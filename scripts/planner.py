"""Planificateur : transforme devoirs + emploi du temps + réglages en planning horaire.

Règles appliquées (celles du planning fait à la main) :
- un devoir est fait la veille (ou avant si la veille est chargée) ;
- devoirs pour lundi : écrits le samedi, à apprendre le dimanche ;
- une évaluation se prépare sur 3 jours (fiche J-3, exercices J-2, interrogation J-1)
  + un coup d'œil de 10 minutes le matin même ;
- ce qui s'apprend la veille se récite le lendemain matin ;
- goûter + pause en rentrant, pauses de 5 à 10 minutes entre les blocs ;
- aucun devoir après le sport ; coucher à l'heure fixée, plus tard les soirs de sport ;
- chaque soir : relire les leçons du jour et du lendemain, préparer le sac, une corvée, ranger.
"""
from __future__ import annotations

import re
import unicodedata
from datetime import date, timedelta

JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
JOURS_COURTS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août",
        "septembre", "octobre", "novembre", "décembre"]
NO_REL = re.compile(r"EPS|accompagnement|vie de classe|permanence|étude|AP\b|orientation", re.I)
EVAL_RE = re.compile(r"\b(évaluation|evaluation|contr[ôo]le|DS|devoir surveill|QCM|interro|test|flash test|bac blanc|brevet blanc)\b", re.I)
APP_RE = re.compile(r"(apprendre|par c[œo]eur|réciter|reciter|leçon|vocabulaire|revoir|réviser)", re.I)
LEC_RE = re.compile(r"\b(lire|lecture)\b", re.I)
# le professeur annonce dans les devoirs qu'il n'y aura pas cours
CANCEL_RE = re.compile(r"(pas (de |d['’]\s?)?(cours|eps|sport|piscine)\b|cours (est |sont )?(annul|supprim)|pas cours|absence (du|de la|de) (prof|professeur|enseignant)|(prof|professeur|enseignant)e? (sera |est )?absent)", re.I)
BIG_EVAL_RE = re.compile(r"\b(DS|devoir surveill|2\s?h|bac blanc|brevet blanc)\b", re.I)


# ---------------------------------------------------------------- temps

def m(t: str | None, default: int | None = None) -> int | None:
    if t is None:
        return default
    r = re.match(r"\s*(\d{1,2})\s*[h:]\s*(\d{0,2})", str(t))
    if not r:
        return default
    return int(r.group(1)) * 60 + int(r.group(2) or 0)


def fmt(x: int) -> str:
    return f"{x // 60}h{x % 60:02d}"


def jsw(d: date) -> int:
    """Jour de la semaine façon JavaScript : 0 = dimanche … 6 = samedi."""
    return (d.weekday() + 1) % 7


def long_fr(d: date) -> str:
    return f"{JOURS[d.weekday()]} {d.day} {MOIS[d.month - 1]}"


def jour_fr(d: date) -> str:
    return f"{JOURS[d.weekday()].lower()} {d.day}"


def slug(s: str) -> str:
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:40]


def short_text(text: str, n: int = 70) -> str:
    t = re.split(r"(?<=[.!?;])\s|\n", text.strip())[0]
    return t if len(t) <= n else t[: n - 1].rstrip() + "…"


# ---------------------------------------------------------------- journée type

class Day:
    def __init__(self, d: date, child: dict, cfg: dict, schedule: list[dict]):
        self.d = d
        self.w = jsw(d)
        self.child = child
        lessons = sorted([c for c in schedule if c["date"] == d.isoformat() and c.get("start") and not c.get("cancelled")], key=lambda c: m(c["start"]))
        fb = (child.get("school_fallback") or {}).get(str(self.w))
        if lessons:
            self.school = (m(lessons[0]["start"]), max(m(c["end"] or c["start"]) for c in lessons))
        elif fb and not [c for c in schedule if not c.get("cancelled")]:
            self.school = (m(fb[0]), m(fb[1]))
        else:
            self.school = None
        self.subjects = []
        for c in lessons:
            if c["subject"] not in self.subjects and not NO_REL.search(c["subject"]):
                self.subjects.append(c["subject"])
        self.acts = sorted(
            [(m(a["start"]), m(a["end"]), a["label"], bool(a.get("sport")))
             for a in child.get("activities", []) if int(a["wd"]) == self.w],
            key=lambda a: a[0])
        self.dinner = m(child.get("dinner") or cfg.get("dinner", "19h30"))
        commute = int(child.get("commute_min", 30))
        self.home = self.school[1] + commute if self.school else None
        late_acts = [a for a in self.acts if a[3] and a[1] >= m("20h00")]
        self.sport_evening = bool(late_acts)
        self.bedtime = m(child.get("bedtime_sport" if self.sport_evening else "bedtime", "21h15"))
        self.level = child.get("level", "college")
        self.free = self.school is None or self.school[1] <= m("13h00")
        # créneaux de travail
        self.windows: list[list[int]] = []
        self.morning_flash = bool(self.school and self.school[0] <= m("9h00"))
        if self.school and self.school[0] >= m("9h30"):
            self.windows.append([m("8h30"), self.school[0] - 45])
        evening_anchor = self.evening_anchor()
        if self.school and not self.free:
            self.windows.append([self.home + 30, evening_anchor])
        else:
            if self.school:  # cours le matin seulement (mercredi)
                start_pm = max(m("13h45"), (self.home or 0) + 75)
                self.windows.append([start_pm, evening_anchor])
            else:
                self.windows.append([m("9h15"), m("12h00")])
                self.windows.append([m("14h30"), evening_anchor])
            self.windows = self.carve(self.windows)
        self.windows = [w for w in self.windows if w[1] - w[0] >= 15]
        caps = cfg.get("capacity", {}).get(self.level, {})
        base = caps.get("free" if self.free else "school", 180 if self.free else (120 if self.level == "lycee" else 80))
        self.capacity = min(base, int(sum(w[1] - w[0] for w in self.windows) * 0.8))
        self.used = 0
        self.bedtime_read = not self.sport_evening and not any(a[0] >= m("19h00") for a in self.acts)
        self.bedtime_used = False
        self.big_clean = self.w == int(cfg.get("big_clean_wd", 3))
        self.sheets = self.w == int(cfg.get("sheets_wd", 6))
        self.tasks: list[dict] = []

    def evening_anchor(self) -> int:
        """Heure à laquelle les devoirs doivent être finis."""
        pre = [a for a in self.acts if a[3] and m("16h00") <= a[0] <= m("20h30")]
        if pre:
            return pre[0][0] - 40
        clash = [a for a in self.acts if a[0] < self.dinner and a[1] > self.dinner - 50]
        if clash:
            return clash[0][0] - 45
        return self.dinner - 50

    def carve(self, windows):
        out = []
        for s, e in windows:
            segs = [[s, e]]
            for a0, a1, _, _ in self.acts:
                nxt = []
                for x, y in segs:
                    if a1 + 15 <= x or a0 - 15 >= y:
                        nxt.append([x, y])
                    else:
                        if a0 - 15 > x:
                            nxt.append([x, a0 - 15])
                        if a1 + 15 < y:
                            nxt.append([a1 + 15, y])
                segs = nxt
            out.extend(segs)
        return out


# ---------------------------------------------------------------- tâches

def classify(h: dict) -> str:
    forced = {"rev": "eval", "app": "app", "lec": "lec", "dev": "dev"}.get(h.get("kind") or "")
    if forced:
        return forced
    t = f"{h.get('subject', '')} {h['text']}"
    if h.get("eval") or EVAL_RE.search(t):
        return "eval"
    if LEC_RE.search(h["text"]) and not re.search(r"exercice|ex\.?\s*n?°?\s*\d", h["text"], re.I):
        return "lec"
    if APP_RE.search(h["text"]) and not re.search(r"exercice|ex\.?\s*n?°?\s*\d|faire|rédiger|écrire", h["text"], re.I):
        return "app"
    return "dev"


def dev_minutes(text: str, level: str) -> int:
    nums = re.findall(r"\b\d{1,3}\b", text)
    if re.search(r"\bex", text, re.I) and nums:
        return max(20, min(55, 10 * len(nums)))
    if len(text) > 250:
        return 45 if level == "lycee" else 40
    return 30 if level == "lycee" else 25


def make_tasks(child: dict, homework: list[dict], week_days: list[date], horizon_end: date) -> list[dict]:
    tasks = []
    lvl = child.get("level", "college")
    sib = child.get("sibling_name")
    for h in homework:
        due = date.fromisoformat(h["due"])
        if due < week_days[0] or due > horizon_end:
            continue
        kind = classify(h)
        subj = h.get("subject") or "Devoir"
        short = short_text(h["text"])
        if not h.get("subject"):
            label_core = short[:1].upper() + short[1:]
        else:
            label_core = short if short.lower().startswith(subj.lower()) else f"{subj} : {short}"
        more = h["text"][:300] if len(h["text"]) > len(short) + 3 else ""
        jd = jour_fr(due)
        monday = due.weekday() == 0

        def D(n):
            return due - timedelta(days=n)

        mdur = re.search(r"(\d{1,3})\s*min", h["text"], re.I)   # durée indiquée, ex. « (15 mins) »
        if kind == "eval":
            big = bool(BIG_EVAL_RE.search(h["text"]))
            L = 45 if (big or lvl == "lycee") else 35
            base = f"Éval {jd}. {h['text'][:300]}"
            if big:
                tasks.append(dict(k="rev", l=f"{subj} : préparer {('le DS' if 'DS' in h['text'] else 'l’évaluation')} (plan + fiche)", d=base, min=L, prefs=[D(5), D(6), D(4)], src=h))
            tasks.append(dict(k="rev", l=f"{subj} : faire la fiche de révision", d=base, min=L, prefs=[D(3), D(4), D(2)], src=h))
            tasks.append(dict(k="rev", l=f"{subj} : s’entraîner (exercices)", d=f"Éval {jd}. Refaire des exercices sans la correction, puis corriger.", min=L, prefs=[D(2), D(3), D(1)], src=h))
            tasks.append(dict(k="rev", l=f"{subj} : se faire interroger", d=f"Éval {jd}. " + (f"Avec {sib} ou un parent : 10 questions sur la fiche." if sib else "Un parent pose 10 questions à partir de la fiche."), min=20, prefs=[D(1), D(2)], src=h, short_ok=True))
            tasks.append(dict(k="rev", l=f"{subj} : relire la fiche (10 min)", d="Éval aujourd’hui : un dernier coup d’œil, rien de nouveau.", min=10, prefs=[due], slot="morning", src=h))
        elif kind == "app":
            tasks.append(dict(k="app", l=label_core, d=f"Pour {jd}. Lire 2 fois, cacher, redire à voix haute. {more}", min=int(mdur.group(1)) if mdur else 15, prefs=[D(1), D(2)] if not monday else [D(1), D(2), D(3)], src=h))
            core = re.sub(r"^(apprendre|revoir|réviser|reviser)(\s+par\s+c[œo]eur)?\s*", "", h["text"].strip(), flags=re.I)
            tasks.append(dict(k="app", l=(f"Réciter à {sib} : " if sib else "Réciter : ") + f"{subj}, {short_text(core, 50)}", d="5 minutes au petit-déjeuner.", min=5, prefs=[due], slot="morning", src=h))
        elif kind == "lec":
            mn = int(mdur.group(1)) if mdur else (40 if lvl == "lycee" else 30)
            tasks.append(dict(k="lec", l=label_core, d=f"Pour {jd}. {more}", min=mn, prefs=[D(1), D(2)], slot="bedtime", src=h))
        else:
            mn = int(mdur.group(1)) if mdur else dev_minutes(h["text"], lvl)
            prefs = [D(2), D(1), D(3)] if monday else [D(1), D(2), D(3)]
            tasks.append(dict(k="dev", l=label_core, d=f"Pour {jd}. {more}", min=mn, prefs=prefs, src=h))
    return tasks


def recurring_tasks(child: dict, week_days: list[date]) -> tuple[list[dict], list[dict]]:
    """Tâches récurrentes de la configuration. Renvoie (tâches, devoirs-virtuels)."""
    tasks, virtual = [], []
    for r in child.get("recurring", []):
        if "on_wd" in r:
            for d in week_days:
                if jsw(d) in r["on_wd"]:
                    tasks.append(dict(k=r.get("kind", "dev"), l=r["text"], d=r.get("detail", ""), min=int(r.get("min", 20)), prefs=[d], src=None, fixed=True, slot=(None if r.get("slot") == "normal" else r.get("slot")) or ("bedtime" if r.get("kind") == "lec" and r.get("slot") != "normal" else None)))
        elif "due_wd" in r:
            for d in week_days:
                if jsw(d) == int(r["due_wd"]):
                    virtual.append({"due": d.isoformat(), "subject": r.get("subject", ""), "text": r["text"], "eval": False, "recurring": True})
    return tasks, virtual


# ---------------------------------------------------------------- semaine

def is_cancel_note(h: dict) -> bool:
    return bool(CANCEL_RE.search(h.get("text") or ""))


def apply_cancellations(schedule: list[dict], homework: list[dict], manual: list[dict]) -> list[dict]:
    """Marque les cours annulés : annoncés par le professeur dans les devoirs, ou saisis sur le site."""
    out = [dict(c) for c in schedule]
    def mark(date_s, subject, reason, start=None):
        for c in out:
            if c["date"] == date_s and c["subject"] == subject and (not start or c.get("start") == start) and not c.get("cancelled"):
                c["cancelled"] = reason
    for h in homework:
        if h.get("subject") and is_cancel_note(h):
            mark(h["due"], h["subject"], "Annoncé par le professeur : " + short_text(h["text"], 80))
    for x in manual or []:
        mark(x["date"], x["subject"], "Annulé sur le site" + (f" : {x['reason']}" if x.get("reason") else ""), x.get("start"))
    return out


def build_week(cfg: dict, monday: date, data_by_child: dict, extras: list[dict],
               prev_week: dict | None = None, today: date | None = None, frozen: dict | None = None,
               cancellations: list[dict] | None = None) -> dict:
    """prev_week : semaine précédente (pour repérer les doublons) ;
    frozen : version actuelle de cette semaine, dont on garde les jours déjà passés."""
    today = today or date.today()
    week_days = [monday + timedelta(days=i) for i in range(7)]
    horizon = monday + timedelta(days=9)
    week = {
        "week_start": monday.isoformat(),
        "title": f"Du lundi {monday.day} au dimanche {week_days[-1].day} {MOIS[week_days[-1].month - 1]} {week_days[-1].year}",
        "days": [{"date": d.isoformat(), "wd": jsw(d), "short": JOURS_COURTS[d.weekday()], "num": d.day, "long": long_fr(d)} for d in week_days],
        "children": {},
        "notes": [],
    }
    chores = cfg.get("chores") or ["Mettre la table", "Débarrasser + lave-vaisselle", "Aider à préparer le dîner"]
    names = {c["id"]: c["name"] for c in cfg["children"]}
    for ci, child in enumerate(cfg["children"]):
        cid = child["id"]
        child = dict(child, sibling_name=names.get(child.get("sibling")))
        data = data_by_child.get(cid, {"homework": [], "schedule": []})
        same = {cid, child.get("ed_same_as")} | {c["id"] for c in cfg["children"] if c.get("ed_same_as") == cid}
        manual = [x for x in (cancellations or []) if x.get("child") in same or x.get("child") == "tous"]
        extra_hw = [{"due": e["due"], "subject": e.get("subject") or "", "text": e["text"], "eval": e.get("kind") == "rev", "kind": e.get("kind"), "extra": True}
                    for e in extras if e["child"] in (cid, "tous")]
        rec_tasks, rec_hw = recurring_tasks(child, week_days)
        homework = data.get("homework", []) + extra_hw + rec_hw
        schedule = apply_cancellations(data.get("schedule", []), homework, manual)
        notes_cancel = [h for h in homework if is_cancel_note(h)]
        homework = [h for h in homework if not is_cancel_note(h)]
        days = {d.isoformat(): Day(d, child, cfg, schedule) for d in week_days}
        tasks = make_tasks(child, homework, week_days, horizon) + rec_tasks
        # attribution aux jours
        tasks.sort(key=lambda t: (min(t["prefs"]), {"rev": 0, "dev": 1, "app": 2, "lec": 3}.get(t["k"], 4)))
        for t in tasks:
            cands = [p for p in t["prefs"] if p.isoformat() in days and p >= today]
            if not cands and t.get("src") and t.get("slot") != "morning":
                due_d = date.fromisoformat(t["src"]["due"])
                spare = [days[k] for k in sorted(days) if today <= days[k].d < due_d]
                spare.sort(key=lambda dd: dd.used - dd.capacity)
                cands = [dd.d for dd in spare[:1]]
                if not cands and due_d.isoformat() in days and due_d >= today:
                    cands = [due_d]   # plus de jour avant l'échéance : on le place le jour même
            chosen = None
            for p in cands:
                day = days[p.isoformat()]
                slot = t.get("slot")
                if slot == "morning" and not day.morning_flash:
                    if day.school and day.windows and day.windows[0][1] <= day.school[0]:
                        t = dict(t, slot=None)  # matin libre (cours tardif)
                    else:
                        continue
                if slot == "bedtime" and (not day.bedtime_read or day.bedtime_used):
                    t = dict(t, slot=None)
                if t.get("slot") in ("morning", "bedtime") or day.used + t["min"] <= day.capacity:
                    chosen = day
                    break
            if chosen is None and cands:
                fallback = [p for p in cands if t.get("slot") != "morning" or days[p.isoformat()].morning_flash]
                if fallback:
                    # le jour le moins chargé parmi les possibles
                    chosen = max((days[p.isoformat()] for p in fallback), key=lambda dd: dd.capacity - dd.used)
                    if t.get("short_ok"):
                        t = dict(t, min=15)
            if chosen is None:
                continue
            if t.get("slot") == "bedtime":
                chosen.bedtime_used = True
            if t.get("slot") not in ("morning", "bedtime"):
                chosen.used += t["min"]
            chosen.tasks.append(t)
        # mise en page horaire
        blocks, school_lbl = {}, {}
        for i, d in enumerate(week_days):
            key = d.isoformat()
            if frozen and d < today:
                old = (frozen.get("children", {}).get(cid, {}).get("blocks", {}) or {}).get(key)
                if old is not None:
                    blocks[key] = old
                    school_lbl[key] = (frozen.get("children", {}).get(cid, {}).get("school", {}) or {}).get(key, "")
                    continue
            nxt = days.get((d + timedelta(days=1)).isoformat())
            tomorrow_subjects = nxt.subjects if nxt else [c["subject"] for c in schedule if c["date"] == (d + timedelta(days=1)).isoformat() and not c.get("cancelled") and not NO_REL.search(c["subject"])]
            tomorrow_subjects = list(dict.fromkeys(tomorrow_subjects))
            blocks[key] = layout_day(days[key], cid, cfg, chores[(i + ci) % len(chores)], tomorrow_subjects)
            dd = days[key]
            word = "Lycée" if child.get("level") == "lycee" else "Collège"
            school_lbl[key] = f"{word} {fmt(dd.school[0])} – {fmt(dd.school[1])}" if dd.school else "Pas de cours"
        # à rendre / évaluations
        due, evals, fresh = {}, [], []
        for h in homework:
            if not (monday <= date.fromisoformat(h["due"]) <= horizon):
                continue
            kind = classify(h)
            lbl = ("Évaluation – " if kind == "eval" else "") + (h["text"] if h["text"].lower().startswith((h.get("subject") or "").lower()) else f"{h.get('subject')} : {h['text']}")
            due.setdefault(h["due"], []).append(short_text(lbl, 140))
            if not h.get("recurring"):
                fresh.append(short_text(lbl, 140))
            if kind == "eval":
                evals.append([h["due"], f"{h.get('subject')} : {short_text(h['text'], 60)}"])
        for h in notes_cancel:
            if monday <= date.fromisoformat(h["due"]) <= horizon:
                due.setdefault(h["due"], []).append(short_text(f"{h.get('subject')} : pas cours ({h['text']})", 140))
        lessons = {}
        for c in sorted(schedule, key=lambda c: (c["date"], m(c.get("start") or "0h"))):
            if monday.isoformat() <= c["date"] <= week_days[-1].isoformat() and c.get("start"):
                row = {"s": c["start"], "e": c.get("end") or "", "m": c["subject"]}
                if c.get("room"):
                    row["r"] = c["room"]
                if c.get("cancelled"):
                    row["x"] = c["cancelled"]
                lessons.setdefault(c["date"], []).append(row)
        week["children"][cid] = {"blocks": blocks, "due": due, "evals": evals, "school": school_lbl, "lessons": lessons}
        # remarques : devoirs identiques à la semaine précédente
        if prev_week:
            prev_due = [x for v in (prev_week.get("children", {}).get(cid, {}).get("due", {}) or {}).values() for x in v]
            dup = [x for x in fresh if x in prev_due]
            if dup:
                week["notes"].append([f"{child['name']} : devoirs identiques à la semaine passée",
                                      "À vérifier sur EcoleDirecte (copier-coller du professeur ?) : " + " ; ".join(dup[:4])])
    overflow_notes(week, names)
    return week


def layout_day(day: Day, cid: str, cfg: dict, chore: str, tomorrow_subjects: list[str]) -> list[dict]:
    B: list[dict] = []
    key = day.d.isoformat()
    ids: dict[str, int] = {}

    def add(t: int, k: str, l: str, d: str = "", extra: dict | None = None):
        b = {"t": fmt(t), "k": k, "l": l}
        if d:
            b["d"] = d.strip()
        if k in ("dev", "app", "rev", "lec", "cor", "ran", "org"):
            base = f"{cid}|{key}|{k}|{slug(l)}"
            n = ids.get(base, 0)
            ids[base] = n + 1
            b["id"] = base if n == 0 else f"{base}#{n}"
        if extra:
            b.update(extra)
        B.append(b)

    morning = [t for t in day.tasks if t.get("slot") == "morning"]
    bedtime = [t for t in day.tasks if t.get("slot") == "bedtime"]
    normal = [t for t in day.tasks if t.get("slot") not in ("morning", "bedtime")]
    normal.sort(key=lambda t: ({"rev": 0, "dev": 1, "app": 2, "lec": 3}.get(t["k"], 4), -t["min"]))
    if day.big_clean:
        normal.append(dict(k="ran", l="Grand rangement de la chambre (30 min)", d="Bureau, sol, armoire, linge sale au panier, poubelle vidée.", min=30))
    if day.sheets and not day.school:
        normal.append(dict(k="cor", l="Changer les draps + aspirateur dans la chambre", min=30))
    dn = day.dinner
    busy = [(a0 - 15, a1 + 15) for a0, a1, _, _ in day.acts]

    def free_at(t, dur):
        for b0, b1 in busy:
            if t < b1 and t + dur > b0:
                return b1
        return None

    # matin
    if day.school and day.morning_flash and morning:
        t = m("7h20")
        for x in morning:
            add(t, x["k"], x["l"], x.get("d", ""), {"x": 1} if (x.get("src") or {}).get("extra") else None)
            t += max(5, x["min"])
    if day.school and day.school[0] >= m("9h30"):
        add(m("8h00"), "repas", f"Petit-déjeuner (cours à {fmt(day.school[0])})")
    if not day.school:
        first_act = day.acts[0][0] if day.acts else m("10h00")
        add(min(m("8h45"), first_act - 45), "repas", "Lever + petit-déjeuner")

    # activités
    sport_pre = [a for a in day.acts if a[3] and m("16h00") <= a[0] <= m("20h30")]
    for a0, a1, label, sport in day.acts:
        add(a0 - 15 if sport else a0, "act", f"{label} {fmt(a0)} – {fmt(a1)}")
        if sport and a1 >= m("19h45") and a0 >= m("19h00"):
            add(a1 + 15, "rep", "Douche + collation")

    # repas de midi / goûter
    if day.school and not day.free:
        add(day.home, "rep", "Goûter + pause sans écran", "Souffler 30 minutes avant de s’y mettre.")
    lunch = None
    if day.school and day.free:
        lunch = max(m("12h00"), day.home or m("12h00"))
        add(lunch, "repas", "Déjeuner")
        add(lunch + 45, "rep", "Repos")
    if not day.school:
        lunch = m("12h15")
        for a0, a1, _, _ in day.acts:
            if a0 <= lunch < a1:
                lunch = a1 + 15
        add(lunch, "repas", "Déjeuner")
        add(lunch + 30, "cor", "Débarrasser la table + lave-vaisselle")
        add(lunch + 45, "rep", "Temps libre")

    # devoirs dans les créneaux
    wi = 0
    cur = day.windows[0][0] if day.windows else (day.home or m("17h00")) + 30
    last_end = day.windows[-1][1] if day.windows else day.evening_anchor()
    # marge : si besoin, on peut travailler jusqu'à 25 min avant le dîner (relire + sac juste avant),
    # la corvée passe alors après le dîner ; jamais au-delà d'une activité qui suit
    if not [a for a in day.acts if a[0] >= last_end - 10 and a[0] < day.dinner]:
        last_end = max(last_end, day.dinner - 35)
    overflow: list[dict] = []
    for n, x in enumerate(normal):
        while wi < len(day.windows) - 1 and cur + x["min"] > day.windows[wi][1]:
            wi += 1
            cur = max(cur, day.windows[wi][0])
        jump = free_at(cur, x["min"])
        start = jump or cur
        if start + x["min"] > last_end + 10:
            overflow.append(x)      # ne rentre plus avant le dîner : placé après, ou signalé
            continue
        cur = start
        add(cur, x["k"], x["l"], x.get("d", ""), {"x": 1} if (x.get("src") or {}).get("extra") else None)
        cur += x["min"]
        nxt = next((y for y in normal[n + 1:] if y not in overflow), None)
        if nxt and x["min"] >= 20 and cur + 5 + nxt["min"] <= last_end + 10 and not (wi < len(day.windows) - 1 and cur + nxt["min"] > day.windows[wi][1]):
            p = 10 if x["min"] >= 40 else 5
            add(cur, "rep", f"Pause {p} min")
            cur += p
    if not day.school and not any(a0 <= m("16h00") < a1 for a0, a1, _, _ in day.acts) and (lunch or 0) < m("15h00"):
        add(m("16h00"), "rep", "Goûter")

    # soirée
    rel_extra = {"rel": {"today": day.subjects, "tomorrow": tomorrow_subjects, "idp": f"{cid}|{key}|r"}}
    has_rel = bool(day.subjects or tomorrow_subjects)
    tasks_end = min(cur, last_end + 10) if normal else 0
    if sport_pre:
        a0, a1 = sport_pre[0][0], sport_pre[0][1]
        anchor = a0 - 40
        t = max(anchor - 20, tasks_end, (day.home or 0) + 15 if day.school and not day.free else 0)
        if has_rel:
            add(t, "rel", "Relire les leçons", extra=rel_extra)
            t += 10
        add(t, "org", "Préparer le sac de sport + sac de demain")
        t += 5
        if a0 >= m("19h00"):
            add(max(anchor, t + 5), "repas", "Dîner léger avant le sport")
        else:
            add(max(anchor, t + 5), "repas", "En-cas avant le sport")
            add(a1 + 15, "repas", "Dîner (préparé à l’avance) + douche")
    else:
        clash = [a for a in day.acts if a[0] < dn and a[1] > dn - 50]
        t = max(dn - 50, tasks_end)
        if clash:
            t = max(clash[0][0] - 45, tasks_end)
        if has_rel:
            add(t, "rel", "Relire les leçons", extra=rel_extra)
            t += 15
        if jsw(day.d) == 0:
            add(t, "org", "Préparer la semaine (15 min)", "Agenda EcoleDirecte, devoirs pour lundi, sac prêt.")
            t += 15
        elif tomorrow_subjects:
            add(t, "org", "Préparer le sac de demain")
            t += 10
        if not clash:
            if not day.big_clean and not (day.sheets and not day.school) and t + 25 <= dn:
                add(t, "ran", "Ranger la chambre (10 min)")
                t += 10
            if t <= dn - 15:
                add(dn - 15, "cor", chore)
            else:
                add(dn + 35, "cor", "Débarrasser + lave-vaisselle")
        elif clash[0][1] + 15 <= dn - 10:
            add(dn - 15, "cor", chore)
        add(dn, "repas", "Dîner")

    # après le dîner : seulement les jours sans sport le soir ; si besoin jusqu'à 21h30
    # (« work_until »), le coucher est alors décalé, sans dépasser « bedtime_max » (22h00)
    bed = day.bedtime
    calm = bed - 45
    if overflow:
        work_until = m(cfg.get("work_until", "21h30"))
        bed_max = m(cfg.get("bedtime_max", "22h00"))
        limit = max(calm, min(work_until, bed_max - 30))
        t = max(dn + 45, max((m(b["t"]) for b in B if b["k"] in ("repas", "cor") and m(b["t"]) >= dn), default=dn) + 15)
        # d'abord ce qui prépare une évaluation, puis le plus court
        for x in sorted(overflow, key=lambda y: (y["k"] != "rev", y["min"])):
            if day.sport_evening or any(a0 <= t < a1 + 15 for a0, a1, _, _ in day.acts):
                break
            if t + x["min"] > limit:
                continue
            add(t, x["k"], x["l"], x.get("d", ""), {"x": 1} if (x.get("src") or {}).get("extra") else None)
            t += x["min"]
            overflow.remove(x)
        if t > calm:
            calm = t
            bed = min(bed_max, max(bed, t + 30))
        for x in overflow:   # aucune place ce jour-là : affiché à part, sans horaire
            add(calm, x["k"], x["l"], x.get("d", ""), dict({"over": 1}, **({"x": 1} if (x.get("src") or {}).get("extra") else {})))
    # coucher
    late = bed > day.bedtime
    if bedtime:
        x = bedtime[0]
        add(calm, "lec", x["l"] + " (au lit)", (x.get("d", "") + " Lecture calme avant de dormir.").strip(),
            {"x": 1} if (x.get("src") or {}).get("extra") else None)
    elif not day.sport_evening:
        add(calm, "dodo", "Écrans coupés, temps calme")
    add(bed, "dodo", "Coucher" + (" (22h au plus tard)" if day.sport_evening else " (plus tard ce soir : grosse journée)" if late else ""))
    B.sort(key=lambda b: m(b["t"]))
    return B


def overflow_notes(week: dict, names: dict) -> None:
    """Prévient les parents quand une journée déborde."""
    for cid, ch in week["children"].items():
        for day_key, bl in (ch.get("blocks") or {}).items():
            over = [b["l"] for b in bl if b.get("over")]
            if over:
                week["notes"].append([f"{names.get(cid, cid)} : journée trop chargée le {long_fr(date.fromisoformat(day_key)).lower()}",
                                      "Pas de place avant le coucher pour : " + " ; ".join(over[:4]) + ". À faire plus tôt ou à décaler."])
