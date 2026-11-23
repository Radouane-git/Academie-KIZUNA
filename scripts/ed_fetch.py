"""Récupération des devoirs et de l'emploi du temps sur EcoleDirecte.

EcoleDirecte n'a pas d'API officielle : on passe par la bibliothèque communautaire
`ecoledirecte-py-client`, qui utilise l'API interne de l'application.
Les formats renvoyés peuvent évoluer : tout est normalisé ici de façon défensive.

IMPORTANT : le dépôt est public et les journaux GitHub Actions aussi.
Ce module n'affiche JAMAIS de données personnelles (seulement des compteurs).
"""
from __future__ import annotations

import base64
import binascii
import dataclasses
import html
import json
import os
import re
import tempfile
from datetime import date, datetime


class NeedMFA(Exception):
    """EcoleDirecte pose une question de sécurité dont on ne connaît pas la réponse."""

    def __init__(self, question: str, choices: list[str]):
        super().__init__("Question de sécurité EcoleDirecte sans réponse connue")
        self.question = question
        self.choices = choices


# ---------------------------------------------------------------- utilitaires

def plain(obj):
    """Convertit modèles pydantic / dataclasses / objets en dict/list simples."""
    if obj is None or isinstance(obj, (str, int, float, bool)):
        return obj
    if isinstance(obj, (date, datetime)):
        return obj.isoformat()
    if isinstance(obj, dict):
        return {str(k): plain(v) for k, v in obj.items()}
    if isinstance(obj, (list, tuple, set)):
        return [plain(v) for v in obj]
    if hasattr(obj, "model_dump"):
        return plain(obj.model_dump())
    if dataclasses.is_dataclass(obj):
        return plain(dataclasses.asdict(obj))
    if hasattr(obj, "__dict__"):
        return {k: plain(v) for k, v in vars(obj).items() if not k.startswith("_")}
    return str(obj)


def first(d: dict, keys, default=None):
    for k in keys:
        if isinstance(d, dict) and d.get(k) not in (None, ""):
            return d[k]
    return default


def maybe_b64(s: str) -> str:
    if not isinstance(s, str):
        return ""
    t = s.strip()
    if len(t) >= 8 and re.fullmatch(r"[A-Za-z0-9+/=\s]+", t) and len(t.replace("\n", "")) % 4 == 0:
        try:
            out = base64.b64decode(t, validate=False).decode("utf-8")
            if out and sum(c.isprintable() or c in "\n\r\t" for c in out) / len(out) > 0.95:
                return out
        except (binascii.Error, UnicodeDecodeError, ValueError):
            pass
    return s


def strip_html(s: str) -> str:
    s = maybe_b64(s or "")
    s = re.sub(r"<\s*(br|/p|/div|/li)\s*/?>", "\n", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s)
    s = re.sub(r"[ \t ]+", " ", s)
    s = re.sub(r"\n\s*\n+", "\n", s)
    return s.strip()


DATE_RE = re.compile(r"(\d{4})-(\d{2})-(\d{2})")


def as_date(v) -> str | None:
    if not v:
        return None
    m = DATE_RE.search(str(v))
    if m:
        return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
    m = re.search(r"(\d{2})/(\d{2})/(\d{4})", str(v))
    if m:
        return f"{m.group(3)}-{m.group(2)}-{m.group(1)}"
    return None


def as_time(v) -> str | None:
    m = re.search(r"(\d{1,2})[:h](\d{2})", str(v or ""))
    if m:
        return f"{int(m.group(1))}h{m.group(2)}"
    return None


SUBJECT_NAMES = [
    ("EDUCATION MUS", "Éducation musicale"), ("MUSI", "Éducation musicale"), ("ARTS PLA", "Arts plastiques"),
    ("FRANC", "Français"), ("MATH", "Maths"), ("ANGL", "Anglais"), ("ESPAG", "Espagnol"), ("ALLEM", "Allemand"),
    ("HISTOIRE", "Histoire-Géo"), ("HIST", "Histoire-Géo"), ("SCIENCES DE LA VIE", "SVT"), ("SVT", "SVT"),
    # EPS avant Physique-Chimie : « ED.PHYSIQUE & SPORT. » contient « PHYSIQUE »
    ("SPORT", "EPS"), ("ED.PHYS", "EPS"), ("ED PHYS", "EPS"), ("EDUCATION PHYS", "EPS"), ("EDUC. PHYS", "EPS"), ("E.P.S", "EPS"), ("EPS", "EPS"),
    ("PHYSIQUE", "Physique-Chimie"), ("PH-CH", "Physique-Chimie"), ("TECHNO", "Technologie"), ("SCIENCES ECO", "SES"), ("SES", "SES"),
    ("SCIENCES NUM", "SNT"), ("SNT", "SNT"), ("ENSEIGNEMENT MORAL", "EMC"), ("EMC", "EMC"),
    ("ACCOMPAGNEMENT", "Accompagnement personnalisé"), ("ARABE", "Arabe"), ("LATIN", "Latin"),
]


def pretty_subject(s: str) -> str:
    if not s:
        return "Autre"
    s = str(s).strip()
    up = s.upper()
    for k, v in SUBJECT_NAMES:
        if k in up:
            return v
    return s.capitalize() if s.isupper() else s


# ---------------------------------------------------------------- normalisation

def _walk_items(data, inherited_date=None):
    """Parcourt une structure de devoirs quelconque et produit (item, date_clé)."""
    if isinstance(data, list):
        for it in data:
            if isinstance(it, dict) and any(k in it for k in ("matieres", "devoirs", "homeworks", "items")):
                inner = first(it, ["matieres", "devoirs", "homeworks", "items"], [])
                yield from _walk_items(inner, as_date(first(it, ["date", "day"])) or inherited_date)
            else:
                yield it, inherited_date
    elif isinstance(data, dict):
        keyed = [k for k in data if as_date(k) and len(str(k)) <= 10]
        if keyed:
            for k in keyed:
                yield from _walk_items(data[k], as_date(k))
        else:
            for k in ("matieres", "devoirs", "homeworks", "homework", "items", "data"):
                if k in data:
                    yield from _walk_items(data[k], inherited_date)
                    return
            yield data, inherited_date


def normalize_homework(raw) -> list[dict]:
    out = []
    for it, dkey in _walk_items(plain(raw)):
        if not isinstance(it, dict):
            continue
        due = as_date(first(it, ["due_date", "dueDate", "pour_le", "pourLe", "date_due", "date"])) or dkey
        if not due:
            continue
        subj = pretty_subject(first(it, ["subject", "matiere", "discipline", "subject_name", "codeMatiere"], ""))
        todo = first(it, ["aFaire", "a_faire", "todo"])
        content = ""
        if isinstance(todo, dict):
            content = first(todo, ["contenu", "content", "text"], "")
        content = content or first(it, ["content", "contenu", "description", "text", "texte"], "")
        text = strip_html(content if isinstance(content, str) else json.dumps(content, ensure_ascii=False))
        is_eval = bool(first(it, ["interrogation", "is_test", "isTest", "exam", "is_exam", "evaluation"], False))
        if not text:
            text = f"Devoir de {subj} (détail sur EcoleDirecte)"
        out.append({"due": due, "subject": subj, "text": text[:600], "eval": is_eval})
    # dédoublonnage
    seen, res = set(), []
    for h in out:
        key = (h["due"], h["subject"], h["text"][:80])
        if key not in seen:
            seen.add(key)
            res.append(h)
    return res


def normalize_schedule(raw) -> list[dict]:
    out = []
    data = plain(raw)
    items = data if isinstance(data, list) else first(data or {}, ["cours", "items", "data", "schedule"], []) or []
    for it in items:
        if not isinstance(it, dict):
            continue
        start = first(it, ["start_date", "startDate", "start", "debut", "dateDebut"])
        end = first(it, ["end_date", "endDate", "end", "fin", "dateFin"])
        d = as_date(start)
        if not d:
            continue
        subj = pretty_subject(first(it, ["matiere", "subject", "text", "codeMatiere"], ""))
        row = {"date": d, "start": as_time(start), "end": as_time(end), "subject": subj}
        room = first(it, ["salle", "room"], "")
        if room:
            row["room"] = str(room).strip()[:30]
        if first(it, ["isAnnule", "is_cancelled", "cancelled", "annule"], False):
            row["cancelled"] = "Annulé sur EcoleDirecte"
        out.append(row)
    return out


def shape_of(raw, depth=0):
    """Décrit la structure (clés seulement) pour le diagnostic, sans valeurs."""
    raw = plain(raw)
    if depth > 3:
        return "…"
    if isinstance(raw, list):
        return [shape_of(raw[0], depth + 1)] if raw else []
    if isinstance(raw, dict):
        keys = list(raw.keys())[:25]
        if keys and all(as_date(k) for k in keys[:3]):
            return {"<date>": shape_of(raw[keys[0]], depth + 1)}
        return {k: shape_of(raw[k], depth + 1) for k in keys}
    return type(raw).__name__


# ---------------------------------------------------------------- client EcoleDirecte
#
# Connexion calquée sur le site www.ecoledirecte.com (protocole observé en 2026) :
#  1. GET  /v3/login.awp?gtk=1        -> cookie GTK (à refaire avant CHAQUE login)
#  2. POST /v3/login.awp              -> en-têtes X-Gtk + Cookie, corps « data={...} »
#  3. code 250 = question de sécurité : doubleauth.awp (get puis post), puis nouveau
#     login avec cn/cv au premier niveau ET dans « fa », en-têtes X-Token + 2FA-Token.

import urllib.parse

import requests

API = "https://api.ecoledirecte.com/v3"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36")


class EDError(Exception):
    pass


def _enc(s: str) -> str:
    """Équivalent de encodeURIComponent (JavaScript)."""
    return urllib.parse.quote(s, safe="-_.!~*'()")


class EDClient:
    def __init__(self, version: str | None = None):
        self.v = version or os.environ.get("ED_API_VERSION") or "4.101.4"
        self.s = requests.Session()
        self.s.headers.update({
            "User-Agent": UA,
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "fr-FR,fr;q=0.9",
            "Origin": "https://www.ecoledirecte.com",
            "Referer": "https://www.ecoledirecte.com/",
        })
        self.token = ""
        self.fa_token = ""

    # -- bas niveau
    def _gtk(self):
        self.s.headers.pop("X-Gtk", None)
        self.s.cookies.clear()
        r = self.s.get(f"{API}/login.awp", params={"gtk": "1", "v": self.v}, timeout=30)
        gtk = self.s.cookies.get("GTK") or r.cookies.get("GTK")
        if not gtk:
            raise EDError("cookie GTK absent")
        self.s.headers["X-Gtk"] = gtk

    def _post(self, url: str, data: dict | None = None, params: dict | None = None, raw: str | None = None):
        p = {"v": self.v}
        p.update(params or {})
        h = {"Content-Type": "application/x-www-form-urlencoded"}
        if self.token:
            h["X-Token"] = self.token
        if self.fa_token:
            h["2FA-Token"] = self.fa_token
        body = raw if raw is not None else "data=" + json.dumps(data or {}, ensure_ascii=False, separators=(",", ":"))
        r = self.s.post(url, params=p, data=body.encode("utf-8"), headers=h, timeout=30)
        tok = r.headers.get("x-token") or r.headers.get("X-Token")
        if tok:
            self.token = tok
        fat = r.headers.get("2fa-token") or r.headers.get("2FA-Token")
        if fat:
            self.fa_token = fat
        try:
            js = r.json()
        except ValueError:
            raise EDError(f"réponse illisible (HTTP {r.status_code})")
        if js.get("token"):
            self.token = js["token"]
        return js

    # -- connexion
    def _login_once(self, user: str, pwd: str, cn: str = "", cv: str = ""):
        self._gtk()
        u, pw = json.dumps(_enc(user))[1:-1], json.dumps(_enc(pwd))[1:-1]
        if cn and cv:
            raw = ('data={"identifiant":"%s","motdepasse":"%s","isRelogin":false,"uuid":"",'
                   '"cn":"%s","cv":"%s","fa":[{"cn":"%s","cv":"%s"}]}') % (u, pw, cn, cv, cn, cv)
        else:
            raw = 'data={"identifiant":"%s","motdepasse":"%s","isRelogin":false,"uuid":""}' % (u, pw)
        return self._post(f"{API}/login.awp", raw=raw)

    def login(self, user: str, pwd: str, known_answers: dict[str, str], device: dict | None, ask=None):
        cn, cv = (device or {}).get("cn", ""), (device or {}).get("cv", "")
        js = self._login_once(user, pwd, cn, cv)
        if js.get("code") == 250:
            q = self._post(f"{API}/connexion/doubleauth.awp", {}, {"verbe": "get"})
            if q.get("code") != 200:
                raise EDError(f"question de sécurité indisponible ({q.get('code')} {q.get('message', '')})")
            question = maybe_b64(q["data"].get("question", ""))
            props = q["data"].get("propositions", [])
            choices = [maybe_b64(x) for x in props]
            answer = known_answers.get(question)
            if (answer is None or answer not in choices) and ask:
                answer = ask(question, choices)
                if answer in choices:
                    self.answered = (question, answer)
            if answer is None or answer not in choices:
                raise NeedMFA(question, choices)
            raw_choice = props[choices.index(answer)]
            a = self._post(f"{API}/connexion/doubleauth.awp", {"choix": raw_choice}, {"verbe": "post"})
            if a.get("code") != 200:
                raise EDError(f"réponse de sécurité refusée ({a.get('code')} {a.get('message', '')})")
            cn, cv = a["data"].get("cn", ""), a["data"].get("cv", "")
            js = self._login_once(user, pwd, cn, cv)
        if js.get("code") != 200:
            raise EDError(f"{js.get('code')} {js.get('message', '')}".strip())
        self.device = {"cn": cn, "cv": cv} if cn and cv else device
        self.s.headers.pop("X-Gtk", None)
        self.fa_token = ""
        return js.get("data", {})

    # -- données
    def homework(self, eid) -> list:
        base = self._post(f"{API}/Eleves/{eid}/cahierdetexte.awp", {}, {"verbe": "get"})
        dates = sorted((base.get("data") or {}).keys()) if isinstance(base.get("data"), dict) else []
        out = {}
        for d in dates:
            det = self._post(f"{API}/Eleves/{eid}/cahierdetexte/{d}.awp", {}, {"verbe": "get"})
            mats = (det.get("data") or {}).get("matieres", [])
            out[d] = [m for m in mats if m.get("aFaire")] or base["data"][d]
        return out

    def schedule(self, eid, start: str, end: str) -> list:
        js = self._post(f"{API}/E/{eid}/emploidutemps.awp", {"dateDebut": start, "dateFin": end, "avecTrous": False}, {"verbe": "get"})
        return js.get("data") or []


def students_of(data: dict) -> list[dict]:
    out = []
    for acc in data.get("accounts", []):
        eleves = (acc.get("profile") or {}).get("eleves") or []
        if eleves:
            for e in eleves:
                out.append({"id": e.get("id"), "name": f"{e.get('prenom', '')} {e.get('nom', '')}".strip()})
        elif acc.get("typeCompte") == "E":
            out.append({"id": acc.get("id"), "name": f"{acc.get('prenom', '')} {acc.get('nom', '')}".strip()})
    return out


async def fetch(username: str, password: str, start: str, end: str,
                known_answers: dict[str, str], device_state: dict | None, qcm_state: dict | None, ask=None) -> dict:
    """Retourne {students:[{name,id,homework,schedule}], device_state, qcm_state, shapes, answered}."""
    cli = EDClient()
    data = cli.login(username, password, known_answers, device_state, ask=ask)
    result, shapes = [], {}
    for st in students_of(data):
        hw_raw = cli.homework(st["id"])
        try:
            sch_raw = cli.schedule(st["id"], start, end)
        except Exception:  # l'emploi du temps n'est pas indispensable
            sch_raw = []
        if not shapes:
            shapes = {"homework": shape_of(hw_raw), "schedule": shape_of(sch_raw)}
        result.append({"name": st["name"], "id": str(st["id"]),
                       "homework": normalize_homework(hw_raw), "schedule": normalize_schedule(sch_raw)})
    if not result:
        shapes["accounts"] = shape_of(data)
    return {"students": result, "device_state": getattr(cli, "device", None), "qcm_state": None, "shapes": shapes,
            "answered": getattr(cli, "answered", None)}
