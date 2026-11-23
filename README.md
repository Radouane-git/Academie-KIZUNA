# Académie Kizuna

*Devoirs, missions et organisation.*

Un planning du soir pour les enfants (collège, lycée), qui se remplit tout seul à partir des devoirs de l'ENT
(EcoleDirecte), que chaque enfant coche sur son téléphone, et que les parents suivent en direct.

- **Site** : https://radouane-git.github.io/Academie-KIZUNA/ (installable comme une appli) — démo : ajouter `?demo`.
- **Données** : Supabase. **Aucune donnée personnelle ni aucun secret dans ce dépôt public.**
- **Synchronisation** : sur le PC Windows de la maison, à 7h et 18h.

## Documentation

| Document | Pour quoi faire |
|---|---|
| [docs/fonctionnel.md](docs/fonctionnel.md) | ce que fait l'appli : écrans, règles du planning, niveaux et tampons |
| [docs/architecture.md](docs/architecture.md) | comment c'est construit : composants, tables, sécurité |
| [docs/exploitation.md](docs/exploitation.md) | le quotidien et les pannes : synchro, question de sécurité, mises à jour, publication |
| [docs/charte-graphique.md](docs/charte-graphique.md) | nom, logo, tampon, polices, couleurs, éléments |
| [docs/decisions.md](docs/decisions.md) | les choix importants et leurs raisons |
| [docs/recette.md](docs/recette.md) | les vérifications après chaque version |
| [docs/feuille-de-route.md](docs/feuille-de-route.md) | la suite prévue (Pronote, ajout d'enfants…) |
| [CHANGELOG.md](CHANGELOG.md) | l'historique des versions |

## Installation (environ 30 minutes, une seule fois)

### 1. Base Supabase
1. Créer un compte sur [supabase.com](https://supabase.com), puis **New project** (région Europe).
2. **SQL Editor** → **New query** → coller tout `supabase/schema.sql` → **Run**.
3. **Authentication** → **Users** → **Add user** → **Create new user** : e-mail du compte famille (il ne reçoit rien),
   **mot de passe familial** (une phrase longue), cocher **Auto Confirm User**.
4. **Authentication** → **Sign In / Providers** : désactiver **Allow new users to sign up** (et les connexions anonymes).
5. **Project Settings** → **API Keys** : noter la clé **Publishable** (`sb_publishable_…`) et la clé **Secret**
   (`sb_secret_…`, elle n'ira que sur le PC). L'adresse du projet est dans **Data API**.

### 2. Code et site
1. Copier ce dépôt sur votre compte GitHub (public, nécessaire pour GitHub Pages gratuit).
2. Remplir `site/config.js` : adresse Supabase, clé **Publishable**, e-mail du compte famille.
3. **Settings** → **Pages** → *Source* : **GitHub Actions** ; puis **Actions** → « Publier le site » → **Run workflow**.

### 3. Réglages de la famille
Ouvrir le site, entrer le mot de passe familial, puis **Paramètres** → **Importer un historique**
avec le fichier JSON de la famille (fourni à part, **jamais** dans ce dépôt). Les réglages (enfants, activités,
coucher) se modifient ensuite dans **Paramètres** → **Réglages (avancé)**.

### 4. Synchronisation sur le PC de la maison
L'ENT bloque les connexions venant des serveurs : la synchro tourne donc sur le PC familial.
Dans **PowerShell** :
```powershell
irm https://raw.githubusercontent.com/Radouane-git/Academie-KIZUNA/main/windows/installer.ps1 | iex
```
Répondre aux questions (identifiants ENT, clé Secret Supabase ; rien ne s'affiche quand on tape un mot de passe).
L'installateur installe Python si besoin, chiffre les identifiants (Windows), crée la tâche planifiée
(7h et 18h, rattrapée au démarrage) et le raccourci **Synchro planning**, puis lance une première synchro.
Si l'ENT pose une question de sécurité, elle s'affiche dans la fenêtre : taper le numéro de la bonne réponse.

### 5. Partager
Donner l'adresse et le mot de passe familial à la famille, puis installer l'appli sur chaque téléphone
(**Paramètres** → **Installer sur un téléphone**).

Pour la suite (pannes, mises à jour, publication d'une version) : [docs/exploitation.md](docs/exploitation.md).

## Développement

- Site : `site/index.html` + `site/app.js`, sans outil de build. Tester en local :
  `cd site && python3 -m http.server` puis http://localhost:8000/?demo
- Planning : `scripts/planner.py` ; données de démo : `python3 scripts/demo_data.py`.
- Avant de publier : mettre à jour `?v=` dans `site/index.html`, le `CHANGELOG.md`, puis dérouler
  [docs/recette.md](docs/recette.md).
