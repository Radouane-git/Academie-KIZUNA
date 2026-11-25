"""Famille fictive pour tester le planificateur et alimenter le mode démo du site.
Usage : python scripts/demo_data.py  -> écrit site/demo.json
"""
from __future__ import annotations

import json
import os
import sys
from datetime import date, timedelta

sys.path.insert(0, os.path.dirname(__file__))
import ed_fetch  # noqa: E402
import planner  # noqa: E402

CFG = {
    "dinner": "19h30",
    "big_clean_wd": 3,
    "sheets_wd": 6,
    "chores": ["Mettre la table", "Débarrasser + lave-vaisselle", "Aider à préparer le dîner"],
    "children": [
        {"id": "leo", "name": "Léo", "meta": "13 ans · 4e", "color": "#16788a", "level": "college", "sibling": "ines",
         "commute_min": 30, "bedtime": "21h15", "bedtime_sport": "21h30",
         "activities": [{"wd": 2, "start": "19h30", "end": "20h30", "label": "Judo", "sport": True},
                        {"wd": 3, "start": "17h00", "end": "18h00", "label": "Cours de piano"},
                        {"wd": 6, "start": "10h00", "end": "12h00", "label": "Football", "sport": True}],
         "recurring": [{"due_wd": 6, "kind": "dev", "subject": "Piano", "text": "Piano : travailler le morceau (20 min)", "min": 20}]},
        {"id": "ines", "name": "Inès", "meta": "13 ans · 4e", "color": "#cc3f55", "level": "college", "sibling": "leo",
         "ed_same_as": "leo", "commute_min": 30, "bedtime": "21h15", "bedtime_sport": "21h30",
         "activities": [{"wd": 2, "start": "18h30", "end": "20h00", "label": "Basket", "sport": True},
                        {"wd": 4, "start": "19h00", "end": "20h30", "label": "Basket", "sport": True}]},
        {"id": "sarah", "name": "Sarah", "meta": "15 ans · 2nde", "color": "#6b4ca0", "level": "lycee",
         "commute_min": 30, "bedtime": "21h30", "bedtime_sport": "22h00",
         "activities": [{"wd": 3, "start": "18h00", "end": "19h00", "label": "Théâtre"}],
         "recurring": [{"on_wd": [1, 2, 3, 4], "kind": "lec", "text": "Lecture personnelle : 20 pages", "min": 30}]},
    ],
}

COLLEGE = {1: [("8h00", "8h55", "TECHNOLOGIE"), ("8h55", "9h50", "HISTOIRE-GEOGRAPHIE"), ("10h05", "11h00", "FRANCAIS"), ("13h25", "14h20", "ESPAGNOL LV2"), ("15h30", "16h25", "ANGLAIS LV1")],
           2: [("8h00", "8h55", "EDUCATION MUSICALE"), ("10h05", "11h00", "MATHEMATIQUES"), ("15h30", "17h00", "EPS")],
           4: [("8h00", "8h55", "ARTS PLASTIQUES"), ("10h05", "11h00", "FRANCAIS"), ("14h20", "15h15", "SVT"), ("15h30", "16h25", "ANGLAIS LV1")],
           5: [("8h00", "8h55", "PHYSIQUE-CHIMIE"), ("8h55", "9h50", "HISTOIRE-GEOGRAPHIE"), ("11h00", "11h55", "MATHEMATIQUES"), ("15h30", "16h25", "ANGLAIS LV1")]}
LYCEE = {1: [("8h00", "8h55", "FRANCAIS"), ("13h25", "14h20", "MATHEMATIQUES"), ("16h25", "17h00", "EPS")],
         2: [("8h00", "9h20", "SVT"), ("9h20", "10h55", "PHYSIQUE-CHIMIE"), ("14h20", "15h15", "MATHEMATIQUES")],
         3: [("8h00", "9h50", "ANGLAIS LV1"), ("10h05", "11h00", "MATHEMATIQUES")],
         4: [("10h05", "11h00", "FRANCAIS"), ("14h20", "15h15", "HISTOIRE-GEOGRAPHIE"), ("16h25", "17h00", "FRANCAIS")],
         5: [("8h00", "9h50", "ALLEMAND LV2"), ("13h25", "14h20", "SES"), ("15h30", "17h00", "SNT")]}


def schedule(tpl, monday):
    raw = []
    for i in range(14):
        d = monday + timedelta(days=i)
        for s, e, subj in tpl.get(d.weekday() + 1, []):
            raw.append({"start_date": f"{d.isoformat()} {s.replace('h', ':')}", "end_date": f"{d.isoformat()} {e.replace('h', ':')}", "matiere": subj, "isAnnule": False})
    return ed_fetch.normalize_schedule(raw)


def homework(monday):
    D = lambda n: (monday + timedelta(days=n)).isoformat()  # noqa: E731
    college_raw = {
        D(1): [{"matiere": "MATHEMATIQUES", "aFaire": {"contenu": "Exercices n° 12, 14 et 17 page 62"}, "interrogation": False},
               {"matiere": "EDUCATION MUSICALE", "aFaire": {"contenu": "QCM sur le rythme : apporter la tablette"}, "interrogation": True}],
        D(3): [{"matiere": "FRANCAIS", "aFaire": {"contenu": "Apprendre par cœur la leçon sur les propositions subordonnées"}, "interrogation": False},
               {"matiere": "FRANCAIS", "aFaire": {"contenu": "Lire le chapitre 3 du roman et faire un résumé de 5 lignes"}, "interrogation": False}],
        D(4): [{"matiere": "PHYSIQUE-CHIMIE", "aFaire": {"contenu": "Évaluation sur les atomes et les molécules"}, "interrogation": True},
               {"matiere": "HISTOIRE-GEOGRAPHIE", "aFaire": {"contenu": "Apprendre le vocabulaire du chapitre 4"}, "interrogation": False}],
        D(7): [{"matiere": "ANGLAIS LV1", "aFaire": {"contenu": "Rédiger 10 lignes sur votre dernier voyage"}, "interrogation": False}],
    }
    lycee_raw = [
        {"date": D(0), "matiere": "MATHEMATIQUES", "contenu": "Exercices 7 et 11 du polycopié", "interrogation": False},
        {"date": D(3), "matiere": "MATHEMATIQUES", "contenu": "Évaluation d'automatismes sur les fiches 1 à 4", "interrogation": True},
        {"date": D(3), "matiere": "SES", "contenu": "DS de 2h sur les chapitres 1 et 3", "interrogation": True},
        {"date": D(4), "matiere": "SNT", "contenu": "Préparer le passage oral sur Internet", "interrogation": False},
        {"date": D(7), "matiere": "FRANCAIS", "contenu": "Fiche d'analyse du texte : analyser les quatre mouvements", "interrogation": False},
    ]
    return ed_fetch.normalize_homework(college_raw), ed_fetch.normalize_homework(lycee_raw)


def main():
    today = date.today()
    monday = today - timedelta(days=today.weekday())
    hw_c, hw_l = homework(monday)
    hw_l = hw_l + [{"due": (monday + timedelta(days=1)).isoformat(), "subject": "SVT", "text": "Pas cours : la professeure est en formation."}]
    data = {"leo": {"homework": hw_c, "schedule": schedule(COLLEGE, monday)},
            "ines": {"homework": hw_c, "schedule": schedule(COLLEGE, monday)},
            "sarah": {"homework": hw_l, "schedule": schedule(LYCEE, monday)}}
    extras = [{"child": "sarah", "due": (monday + timedelta(days=2)).isoformat(), "subject": "Anglais", "text": "Apprendre le vocabulaire de la leçon 5", "kind": "app"}]
    w1 = planner.build_week(CFG, monday, data, extras, today=monday)
    w2 = planner.build_week(CFG, monday + timedelta(days=7), data, extras, prev_week=w1, today=monday)
    out = {"settings": {"famille": CFG}, "plans": [{"week_start": w["week_start"], "data": w, "source": "auto"} for w in (w1, w2)],
           "checks": {}, "sync": {"status": "ok", "ran_at": today.isoformat() + "T17:05:00", "message": "Démo : données fictives."},
           "ideas": [{"id": "d1", "child": "tous", "kind": "sortie", "title": "Cinéma entre amis", "detail": "Séance de l’après-midi", "date": (monday + timedelta(days=5)).isoformat(), "time": "15h00"},
                     {"id": "d2", "child": "leo", "kind": "echecs", "title": "Partie d’échecs avec papa", "detail": "Ouverture italienne"},
                     {"id": "d3", "child": "sarah", "kind": "lecture", "title": "Lire « Le Petit Prince »", "detail": "Lecture plaisir, sans résumé"},
                     {"id": "d4", "child": "ines", "proposed_by": "ines", "status": "proposee", "kind": "sortie", "title": "Patinoire avec mes amies", "detail": "Samedi après le match", "date": (monday + timedelta(days=5)).isoformat()}],
           "stamps": [{"id": "s1", "child": "leo", "title": "SVT : la digestion", "note": "17/20", "message": "Tes révisions ont payé !", "date": (monday - timedelta(days=3)).isoformat(), "created_at": (monday - timedelta(days=3)).isoformat() + "T19:00:00"}],
           "reading": [{"id": "r1", "child": "ines", "title": "Le Comte de Monte-Cristo (version abrégée)", "author": "Alexandre Dumas", "pages": 250,
                        "started": (monday - timedelta(days=6)).isoformat(), "status": "en_cours", "book_id": None, "sheet": {},
                        "notes": {"epoque": "1815, sous la Restauration", "narrateur": "il",
                                  "persos": [{"c": "Edmond Dantès", "t": "jeune marin de 19 ans, héros de l'histoire"}, {"c": "Mercédès", "t": "sa fiancée"}, {"c": "Fernand", "t": "cousin de Mercédès, jaloux d'Edmond"}],
                                  "lieux": [{"c": "Marseille", "t": "là où tout commence"}, {"c": "Château d'If", "t": "la prison sur une île"}],
                                  "chapitres": [{"c": "1", "t": "Edmond rentre au port et doit devenir capitaine."}, {"c": "2", "t": "Il retrouve son père et prépare son mariage."}],
                                  "passages": [{"c": "31", "t": "L'arrestation pendant le repas de fiançailles : tout bascule."}]}}],
           "tips": [{"id": "t1", "title": "Lire le sujet deux fois", "body": "Avant de commencer un exercice, lire l'énoncé deux fois et souligner ce qui est demandé. Beaucoup d'erreurs viennent d'une consigne mal lue.", "source_type": "prof", "source": "M. Robert", "subject": "Maths", "moments": "dev,rev", "child": "tous", "active": True},
                    {"id": "t2", "title": "Trois passages pour un livre", "body": "Un premier survol pour voir la structure, une lecture attentive, puis un retour sur les passages clés : c'est ainsi qu'on retient l'essentiel d'un livre.", "source_type": "livre", "source": "Un livre sur l'art de lire", "subject": "", "moments": "lec", "child": "tous", "active": True}],
           "teacher_notes": [{"id": "n1", "child": "leo", "date": (monday - timedelta(days=4)).isoformat(), "source": "mail", "subject": "Mathématiques", "teacher": "Mme Martin", "tone": "mixte",
                              "original": "Léo comprend vite mais bavarde beaucoup et oublie souvent son matériel.", "kid_strengths": "Ta professeure trouve que tu comprends vite.",
                              "kid_expect": "Elle attend que tu écoutes jusqu'au bout et que tu aies ton matériel à chaque cours.", "kid_next": "Ton appréciation du trimestre peut être excellente si tu t'y tiens.",
                              "goal": "Vérifier mon sac le soir avec la liste du lendemain", "goal_active": True, "shared": True},
                             {"id": "n2", "child": "sarah", "date": (monday - timedelta(days=8)).isoformat(), "source": "reunion", "subject": "Français", "teacher": "M. Bernard", "tone": "positif",
                              "original": "Excellente lectrice, analyses fines.", "kid_strengths": "Ton professeur est impressionné : tu lis vite et tes analyses des personnages sont fines.",
                              "kid_expect": "Il t'encourage à continuer à lire beaucoup.", "kid_next": None, "goal": None, "goal_active": True, "shared": True}],
           "books": [{"id": "b1", "child": "leo", "title": "Le Petit Prince", "author": "Antoine de Saint-Exupéry", "pages": 96, "finished": (monday - timedelta(days=9)).isoformat()},
                     {"id": "b2", "child": "leo", "title": "L'Île au trésor", "author": "Robert Louis Stevenson", "pages": 320, "finished": (monday - timedelta(days=2)).isoformat()},
                     {"id": "b3", "child": "sarah", "title": "Antigone", "author": "Jean Anouilh", "pages": 122, "finished": (monday - timedelta(days=5)).isoformat()}],
           "sensei": [{"id": "m1", "child": "tous", "text": "Belle semaine à tous ! Les évaluations se préparent sur 3 jours : on commence ce soir.", "created_at": monday.isoformat() + "T07:30:00"}]}
    target = os.path.join(os.path.dirname(__file__), "..", "site", "demo.json")
    with open(target, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    return out


if __name__ == "__main__":
    o = main()
    for p in o["plans"][:1]:
        for cid, ch in p["data"]["children"].items():
            print("=====", cid)
            for day, bl in ch["blocks"].items():
                print("--", day, ch["school"][day])
                for b in bl:
                    print("   ", b["t"].rjust(5), b["k"].ljust(5), b["l"][:80])
