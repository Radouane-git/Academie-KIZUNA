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
    ("PHYSIQUE", "Physique-Chimie"), ("PH-CH", "Physique-Chimie"), ("TECHNO", "Technologie"),
    ("EDUCATION PHYS", "EPS"), ("EPS", "EPS"), ("SCIENCES ECO", "SES"), ("SES", "SES"),
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
        if first(it, ["isAnnule", "is_cancelled", "cancelled", "annule"], False):
            continue
        subj = pretty_subject(first(it, ["matiere", "subject", "text", "codeMatiere"], ""))
        out.append({"date": d, "start": as_time(start), "end": as_time(end), "subject": subj})
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


# ---------------------------------------------------------------- récupération

async def fetch(username: str, password: str, start: str, end: str,
                known_answers: dict[str, str], device_state: dict | None, qcm_state: dict | None) -> dict:
    """Retourne {students:[{name,id,homework,schedule}], device_state, qcm_state, shapes}."""
    from ecoledirecte_py_client import Client, MFARequiredError  # import tardif
    try:
        from ecoledirecte_py_client import Family
    except ImportError:  # pragma: no cover
        Family = ()

    tmp = tempfile.mkdtemp(prefix="ed-")
    device_file = os.path.join(tmp, "device.json")
    qcm_file = os.path.join(tmp, "qcm.json")
    if device_state:
        with open(device_file, "w") as f:
            json.dump(device_state, f)
    if qcm_state:
        with open(qcm_file, "w") as f:
            json.dump(qcm_state, f)

    client = Client(device_file=device_file, qcm_file=qcm_file)
    try:
        try:
            session = await client.login(username, password)
        except MFARequiredError as e:
            question = str(getattr(e, "question", "") or "")
            choices = [str(c) for c in (getattr(e, "propositions", None) or getattr(e, "choices", None) or [])]
            answer = known_answers.get(question)
            if answer is None:
                raise NeedMFA(question, choices)
            session = await client.submit_mfa(answer)

        students = list(getattr(session, "students", None) or []) if isinstance(session, Family) or hasattr(session, "students") else [session]
        if not students:
            students = [session]
        result, shapes = [], {}
        for st in students:
            name = str(getattr(st, "name", None) or getattr(st, "first_name", None) or getattr(st, "prenom", "") or "")
            hw_raw = await st.get_homework()
            try:
                sch_raw = await st.get_schedule(start, end)
            except Exception:  # l'emploi du temps n'est pas indispensable
                sch_raw = []
            if not shapes:
                shapes = {"homework": shape_of(hw_raw), "schedule": shape_of(sch_raw)}
            result.append({
                "name": name,
                "id": str(getattr(st, "id", "")),
                "homework": normalize_homework(hw_raw),
                "schedule": normalize_schedule(sch_raw),
            })
    finally:
        try:
            await client.close()
        except Exception:
            pass

    def load(p):
        try:
            with open(p) as f:
                return json.load(f)
        except Exception:
            return None

    return {"students": result, "device_state": load(device_file), "qcm_state": load(qcm_file), "shapes": shapes}
