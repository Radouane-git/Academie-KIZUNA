# Dossier d'architecture

## 1. Vue d'ensemble

```
            ┌──────────────────────────┐
            │  ENT (EcoleDirecte)      │  pas d'API officielle
            └────────────┬─────────────┘
                         │ HTTPS (client maison, compte parent)
                         │ 7h et 18h + double-clic « Synchro planning »
            ┌────────────▼─────────────┐
            │  PC Windows de la maison │  Python : ed_fetch → planner → sync
            │  identifiants chiffrés   │  (DPAPI, session Windows)
            └────────────┬─────────────┘
                         │ HTTPS REST, clé secrète Supabase
            ┌────────────▼─────────────┐
            │  Supabase (Postgres)     │  RLS, compte famille unique
            └────────────┬─────────────┘
                         │ HTTPS, clé publique + session du compte famille
            ┌────────────▼─────────────┐
            │  Site statique           │  GitHub Pages, appli installable
            │  (téléphones, PC)        │  HTML + JS sans framework
            └──────────────────────────┘
```

Principes :
- **Le dépôt est public** : il ne contient que du code. Aucune donnée de la famille, aucun secret.
- **Le site est statique** : il lit et écrit dans Supabase directement depuis le navigateur.
- **La synchro tourne sur le PC de la maison** : l'ENT bloque les connexions venant des serveurs
  (adresses de centres de données), voir [decisions.md](decisions.md).

## 2. Composants

### 2.1 Site (`site/`)
| Fichier | Rôle |
|---|---|
| `index.html` | page unique : styles, polices (Google Fonts), chargement des scripts avec `?v=<version>` pour vider le cache |
| `app.js` | toute l'application (rendu, navigation par `#adresse`, formulaires, temps réel) |
| `config.js` | adresse Supabase, clé **publique** (`sb_publishable_…`), e-mail du compte famille |
| `manifest.webmanifest`, `icons/` | installation comme une appli |
| `demo.json` | données fictives du mode démo (`?demo`), générées par `scripts/demo_data.py` |
| `preview/` | préversions à valider ; renvoie vers l'accueil quand il n'y en a pas |

- Bibliothèque : `supabase-js` (UMD depuis jsDelivr). Aucun outil de build.
- Connexion : `signInWithPassword` avec l'e-mail du compte famille et le mot de passe familial ; session gardée
  dans le navigateur.
- Temps réel : abonnement aux changements de la table `checks` ; relecture toutes les 60 s et au retour sur l'onglet.
- Publication : workflow `.github/workflows/pages.yml` à chaque push touchant `site/`.

### 2.2 Synchronisation (`scripts/`, `windows/`)
| Fichier | Rôle |
|---|---|
| `scripts/ed_fetch.py` | client ENT : poignée de main GTK, connexion, double authentification (question de sécurité), devoirs, emploi du temps ; normalise vers un format commun |
| `scripts/planner.py` | calcule les semaines : répartit les tâches dans les créneaux, applique les règles de [fonctionnel.md](fonctionnel.md) § 5 |
| `scripts/sync.py` | orchestre : lit réglages et ajouts dans Supabase, appelle l'ENT, calcule, écrit les semaines et le journal |
| `scripts/demo_data.py` | génère `site/demo.json` (famille fictive) |
| `windows/installer.ps1` | installe Python si besoin, demande les identifiants, les chiffre, crée la tâche planifiée et le raccourci |
| `windows/sync-windows.ps1` | lanceur : télécharge le code à jour du dépôt, déchiffre les identifiants en variables d'environnement, lance `sync.py` |

Variables d'environnement lues par `sync.py` : `ED_USERNAME`, `ED_PASSWORD`, `SUPABASE_URL`,
`SUPABASE_SERVICE_KEY`, `ED_INTERACTIVE` (1 = console ouverte : la question de sécurité peut être posée),
`PLAN_TODAY` (tests).

Semaines calculées : semaine en cours + suivante (+ une troisième le week-end).

### 2.3 Base Supabase (`supabase/schema.sql`)

| Table | Contenu | Écrit par |
|---|---|---|
| `settings` | clé `famille` : enfants, activités, coucher, corvées, couleurs, réglages ; clé `parent_lock` : empreinte du code parent (`{h, s, at}`) | site (Paramètres), import |
| `plans` | une ligne par semaine (`week_start`, `data` JSON, `source` : `auto` ou verrouillée) | synchro, import |
| `checks` | une ligne par case cochée (`id` de la tâche, `difficulty` 1 à 5, `method` liste, `minutes` — facultatifs) | site |
| `extras` | missions ajoutées à la main | site |
| `ideas` | idées de loisirs (`status` : ok / proposee / non ; `proposed_by` : enfant qui propose) | site |
| `stamps` | tampons de l'Académie | site |
| `sensei_messages` | mots du sensei | site |
| `books` | livres lus | site |
| `cancellations` | cours annulés depuis le site | site |
| `tips` | conseils de la famille (titre, texte, source, matière, moments, enfant) | site |
| `teacher_notes` | retours des professeurs : original privé, version pour l'enfant, objectif, partage | site |
| `sync_log` | résultat de chaque synchro (état, message court, détails techniques sans donnée personnelle) | synchro |
| `mfa_answers` | réponses déjà données aux questions de sécurité de l'ENT | synchro |
| `private_kv` | clés techniques privées (appareil reconnu par l'ENT) | synchro |

Identifiants de tâches (stables d'une synchro à l'autre, servent de clé aux coches) :
`<enfant>|<date>|<type>|<texte-simplifié>` ; pastilles de relecture `<…>|r|t|<matière>` et `<…>|r|d|<matière>` ;
idées `idea|<uuid>` ; objectif tenu dans la semaine `goal|<id du retour>|<lundi>`.

Évolution du schéma : chaque version qui ajoute une table ajoute un bloc à la fin de `schema.sql`
(idempotent : `create table if not exists`, `drop policy if exists`) à exécuter dans le SQL Editor.

### 2.4 Format commun d'une semaine (`plans.data`)
```json
{
  "week_start": "2026-11-23", "title": "Du lundi 23 au dimanche 29 novembre 2026",
  "days": [{"date": "…", "wd": 1, "short": "Lun", "num": 23, "long": "Lundi 23 novembre"}],
  "children": {
    "<enfant>": {
      "blocks":  {"<date>": [{"t": "17h25", "k": "rev", "l": "…", "d": "…", "id": "…"}]},
      "due":     {"<date>": ["…"]},  "evals": [["<date>", "…"]],
      "school":  {"<date>": "Collège 8h00 – 16h25"},
      "lessons": {"<date>": [{"s": "8h00", "e": "8h55", "m": "Maths", "r": "B12", "x": "motif d'annulation"}]}
    }
  },
  "notes": [["titre", "texte"]]
}
```
Types de blocs (`k`) : `dev` devoir, `app` apprendre, `rev` révision, `lec` lecture, `rel` relire les leçons,
`cor` corvée, `ran` rangement, `org` sac, `loi` loisir, `rep`/`repas`/`act`/`dodo` repères non cochables.
Marqueurs : `x` (mission ajoutée à la main), `over` (pas de place avant le coucher).

## 3. Sécurité et vie privée

| Secret | Où il vit | Jamais |
|---|---|---|
| Mot de passe familial | dans la tête des membres de la famille ; vérifié par Supabase Auth | dans le dépôt |
| Clé publique Supabase | `site/config.js` (publique par nature) | — |
| Clé secrète Supabase | PC de la maison, chiffrée (DPAPI) | dans le dépôt, sur le site, dans une conversation |
| Identifiants ENT | PC de la maison, chiffrés (DPAPI) | idem |

- **RLS** sur toutes les tables : seul le compte famille (`public.is_family()`, connexion non anonyme) lit et écrit ;
  inscriptions publiques désactivées ; droits accordés explicitement (`grant`).
- La clé secrète contourne la RLS : elle ne sert qu'à la synchro.
- Les journaux ne contiennent que des comptages et des messages courts ; les identifiants sont masqués dans les erreurs.
- **Code parent** (0.14) : la Vue parents et les Paramètres demandent un code. Seule une empreinte SHA-256
  (code + sel aléatoire) est enregistrée dans `settings.parent_lock`. Le déverrouillage est gardé pour la session
  (`sessionStorage`) ou, si on le demande, sur l'appareil (`localStorage`). C'est une protection d'usage contre
  l'ouverture par erreur ou par curiosité, pas un contrôle d'accès : toutes les données restent lisibles par le
  compte famille.
- Dépôt public : pas de prénoms, horaires d'activités ou fichiers d'historique (l'historique s'importe depuis le site).

## 4. Limites connues

- L'ENT n'a pas d'API officielle : un changement de son site peut casser la synchro (le planning reste utilisable,
  les ajouts à la main aussi).
- La synchro dépend du PC de la maison (allumé au moins une fois par jour ; la tâche est rattrapée au démarrage).
- Supabase gratuit met en pause un projet inactif 7 jours : la synchro quotidienne l'en empêche.
- Pas de copie hors ligne : sans réseau, l'appli ne charge pas.

## 5. Évolution prévue

Connecteurs interchangeables (EcoleDirecte, Pronote) et ajout d'enfants depuis le site :
voir [feuille-de-route.md](feuille-de-route.md).
