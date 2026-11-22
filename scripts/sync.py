"""Synchronisation : EcoleDirecte -> planificateur -> Supabase.

Variables d'environnement (secrets GitHub) :
  ED_USERNAME, ED_PASSWORD        identifiants EcoleDirecte du compte parent
  SUPABASE_URL                    https://xxxx.supabase.co
  SUPABASE_SERVICE_KEY            clé service_role (secrète, jamais dans le site)
Optionnel :
  ED_MFA_ANSWERS                  JSON {"question": "réponse"} (sinon : saisie dans la page)
  PLAN_TODAY                      date forcée (tests), format AAAA-MM-JJ

Le dépôt et les journaux GitHub Actions sont publics : ce script n'affiche
que des messages génériques et des compteurs, jamais de données personnelles.
"""
from __future__ import annotations

import asyncio
import json
import os
import sys
import traceback
from datetime import date, timedelta

import requests

sys.path.insert(0, os.path.dirname(__file__))
import ed_fetch  # noqa: E402
import planner  # noqa: E402


class Supa:
    def __init__(self, url: str, key: str):
        self.base = url.rstrip("/") + "/rest/v1"
        self.h = {"apikey": key, "Content-Type": "application/json"}
        if key.startswith("eyJ"):  # ancienne clé service_role (JWT) ; une clé sb_secret_ passe seulement par « apikey »
            self.h["Authorization"] = f"Bearer {key}"

    def get(self, table: str, query: str = "select=*"):
        r = requests.get(f"{self.base}/{table}?{query}", headers=self.h, timeout=30)
        r.raise_for_status()
        return r.json()

    def upsert(self, table: str, rows):
        h = dict(self.h, Prefer="resolution=merge-duplicates,return=minimal")
        r = requests.post(f"{self.base}/{table}", headers=h, data=json.dumps(rows, ensure_ascii=False).encode(), timeout=30)
        r.raise_for_status()

    def insert(self, table: str, row):
        h = dict(self.h, Prefer="return=minimal")
        r = requests.post(f"{self.base}/{table}", headers=h, data=json.dumps(row, ensure_ascii=False).encode(), timeout=30)
        r.raise_for_status()

    def kv(self, key: str):
        rows = self.get("private_kv", f"select=value&key=eq.{key}")
        return rows[0]["value"] if rows else None

    def set_kv(self, key: str, value):
        if value is not None:
            self.upsert("private_kv", [{"key": key, "value": value}])


def log(db: Supa, status: str, message: str, details: dict | None = None):
    print(f"[{status}] {message}")
    try:
        db.insert("sync_log", {"status": status, "message": message, "details": details or {}})
    except Exception:
        print("Impossible d’écrire dans sync_log")


def match_child(children: list[dict], ed_name: str) -> str | None:
    n = (ed_name or "").lower()
    for c in children:
        key = (c.get("ed_name") or c["name"]).lower()
        if key and key in n:
            return c["id"]
    return None


def main() -> int:
    db = Supa(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_KEY"])
    today = date.fromisoformat(os.environ["PLAN_TODAY"]) if os.environ.get("PLAN_TODAY") else date.today()
    settings = {r["key"]: r["value"] for r in db.get("settings")}
    cfg = settings.get("famille")
    if not cfg:
        log(db, "error", "Réglages « famille » absents : importez l’historique ou les réglages depuis la page.")
        return 1

    monday = today - timedelta(days=today.weekday())
    weeks = [monday, monday + timedelta(days=7)]   # semaine en cours + suivante
    start, end = weeks[0], weeks[-1] + timedelta(days=9)

    answers = {r["question"]: r["answer"] for r in db.get("mfa_answers", "select=question,answer")}
    if os.environ.get("ED_MFA_ANSWERS"):
        try:
            answers.update(json.loads(os.environ["ED_MFA_ANSWERS"]))
        except ValueError:
            pass

    try:
        res = asyncio.run(ed_fetch.fetch(
            os.environ["ED_USERNAME"], os.environ["ED_PASSWORD"], start.isoformat(), end.isoformat(),
            answers, db.kv("ed_device"), db.kv("ed_qcm")))
    except ed_fetch.NeedMFA as e:
        log(db, "mfa", "EcoleDirecte pose une question de sécurité : répondez-y dans la page (onglet Vue parents).",
            {"question": e.question, "choices": e.choices})
        return 2
    except Exception as e:  # noqa: BLE001
        msg = str(e).replace(os.environ.get("ED_USERNAME", "\0"), "***").replace(os.environ.get("ED_PASSWORD", "\0"), "***")[:300]
        log(db, "error", f"Connexion ou lecture EcoleDirecte impossible ({type(e).__name__} : {msg}).",
            {"trace": traceback.format_exc()[-1500:]})
        # Pile d'appels sans valeurs : seulement fichiers / lignes / types d'erreur
        for fr in traceback.extract_tb(e.__traceback__)[-6:]:
            print(f"  à {os.path.basename(fr.filename)}:{fr.lineno} dans {fr.name}")
        return 1

    db.set_kv("ed_device", res.get("device_state"))
    db.set_kv("ed_qcm", res.get("qcm_state"))

    data_by_child, unmatched = {}, 0
    for st in res["students"]:
        cid = match_child(cfg["children"], st["name"])
        if not cid and len(res["students"]) == 1 and len(cfg["children"]) == 1:
            cid = cfg["children"][0]["id"]
        if not cid:
            unmatched += 1
            continue
        data_by_child[cid] = {"homework": st["homework"], "schedule": st["schedule"]}
    # enfants sans compte EcoleDirecte distinct (ex. jumeaux) : « ed_same_as »
    for c in cfg["children"]:
        if c["id"] not in data_by_child and c.get("ed_same_as") in data_by_child:
            data_by_child[c["id"]] = data_by_child[c["ed_same_as"]]

    extras = db.get("extras", f"select=*&due=gte.{start.isoformat()}")
    existing = {r["week_start"]: r for r in db.get("plans", "select=week_start,source,data")}
    written = []
    for wk in weeks:
        cur = existing.get(wk.isoformat())
        prev = existing.get((wk - timedelta(days=7)).isoformat())
        week = planner.build_week(cfg, wk, data_by_child, extras,
                                  prev_week=prev and prev["data"], today=today,
                                  frozen=cur and cur["data"])
        if cur and cur["source"] != "auto":
            # semaine verrouillée (faite à la main) : seuls « à rendre » et évaluations sont mis à jour
            data = cur["data"]
            for cid, ch in week["children"].items():
                tgt = data.setdefault("children", {}).setdefault(cid, {})
                tgt["due_ed"] = ch["due"]
                tgt["evals_ed"] = ch["evals"]
            db.upsert("plans", [{"week_start": wk.isoformat(), "data": data, "source": cur["source"]}])
            written.append(f"{wk.isoformat()} (verrouillée)")
            continue
        week["generated_at"] = today.isoformat()
        db.upsert("plans", [{"week_start": wk.isoformat(), "data": week, "source": "auto"}])
        written.append(wk.isoformat())

    n_hw = sum(len(v["homework"]) for v in data_by_child.values())
    log(db, "ok", f"Synchronisation réussie : {n_hw} devoirs lus, semaines {', '.join(written)}.",
        {"students": len(res["students"]), "unmatched": unmatched, "shapes": res.get("shapes")})
    return 0


if __name__ == "__main__":
    sys.exit(main())
