# Planning devoirs de la famille

Un planning de devoirs partagé, accessible sur internet, qui se met à jour tout seul à partir d’EcoleDirecte.

- **Site** : GitHub Pages (gratuit), protégé par un mot de passe familial.
- **Données** (réglages, semaines, coches, historique) : Supabase (gratuit). Rien de personnel n’est stocké dans ce dépôt.
- **Synchronisation** : un programme GitHub Actions lit EcoleDirecte deux fois par jour (vers 6h et 17h), place les créneaux de travail selon des règles, et écrit le planning dans Supabase.

> EcoleDirecte n’a pas d’API officielle. La synchro utilise la bibliothèque communautaire
> [`ecoledirecte-py-client`](https://pypi.org/project/ecoledirecte-py-client/), qui peut cesser de fonctionner si
> EcoleDirecte change son site. Le planning reste alors utilisable, et l’ajout de devoirs à la main fonctionne toujours.

---

## Installation (environ 30 minutes, une seule fois)

### 1. Créer la base Supabase

1. Créez un compte sur [supabase.com](https://supabase.com), puis **New project** (région : *West EU (Paris)* ou *Central EU*).
2. Menu **SQL Editor** → **New query** → collez tout le contenu de `supabase/schema.sql` → **Run**.
3. Menu **Authentication** → **Users** → **Add user** → **Create new user** :
   - e-mail : une adresse de votre choix pour le compte famille (elle ne reçoit rien) ;
   - mot de passe : **le mot de passe familial**. Prenez une phrase longue, par exemple `cahier-tortue-velo-2026` ;
   - cochez **Auto Confirm User**.
4. **Important pour la sécurité** : menu **Authentication** → **Sign In / Providers** → désactivez
   **Allow new users to sign up**. Sinon, n’importe qui pourrait se créer un compte et lire le planning.
5. Menu **Project Settings** → **API Keys** : notez la clé **Publishable** (`sb_publishable_…`) et la clé
   **Secret** (`sb_secret_…`). La Project URL est dans **Project Settings** → **Data API** (ou bouton **Connect**).
   La clé Secret ne va que dans les secrets GitHub (étape 3). Les anciennes clés `anon` / `service_role` marchent aussi.

### 2. Mettre le code sur GitHub

1. Sur GitHub : **New repository** → nom `Kidz-Homeworks` → **Public** (nécessaire pour GitHub Pages gratuit ;
   aucune donnée personnelle n’y est stockée).
2. **Add file** → **Upload files** → glissez tout le contenu du dossier (y compris le dossier `.github`) → **Commit**.
3. Ouvrez `site/config.js` sur GitHub (icône crayon) et remplissez :
   - `SUPABASE_URL` : la Project URL ;
   - `SUPABASE_ANON_KEY` : la clé Publishable ;
   - `FAMILY_EMAIL` : l’e-mail du compte famille ;
   - `GITHUB_ACTIONS_URL` : `https://github.com/Radouane-git/Kidz-Homeworks/actions/workflows/sync.yml`.

### 3. Ajouter les secrets

Dans le dépôt : **Settings** → **Secrets and variables** → **Actions** → **New repository secret**, quatre fois :

| Nom | Valeur |
|---|---|
| `ED_USERNAME` | identifiant EcoleDirecte du compte parent |
| `ED_PASSWORD` | mot de passe EcoleDirecte |
| `SUPABASE_URL` | la Project URL |
| `SUPABASE_SERVICE_KEY` | la clé Secret (`sb_secret_…`) |

### 4. Publier le site

1. **Settings** → **Pages** → *Source* : **GitHub Actions**.
2. Onglet **Actions** → workflow **Publier le site** → **Run workflow**.
3. Le site est en ligne à l’adresse `https://radouane-git.github.io/Kidz-Homeworks/`.

### 5. Importer l’historique

1. Ouvrez le site, entrez le mot de passe familial.
2. Onglet **Vue parents** → **Importer un historique** → choisissez le fichier `historique-planning-famille.json`
   (fourni à part, il n’est **pas** dans ce dépôt) → **Importer**.

Les semaines déjà faites, les coches et les réglages (enfants, activités, heures de coucher) sont alors en place.

### 6. Première synchronisation EcoleDirecte

1. Onglet **Actions** → **Synchro EcoleDirecte** → **Run workflow**.
2. Si EcoleDirecte pose une question de sécurité, la page l’affiche dans **Vue parents** : choisissez la réponse,
   enregistrez, puis relancez **Run workflow**. Les synchros suivantes s’en souviennent.
3. Ensuite, tout est automatique, deux fois par jour.

### 7. Partager

Envoyez l’adresse du site et le mot de passe familial à votre femme et aux enfants.
Sur téléphone : menu du navigateur → **Ajouter à l’écran d’accueil**, pour l’ouvrir comme une appli.

---

## Au quotidien

- **Cocher** : chaque enfant ouvre son onglet et coche. Les coches apparaissent en direct sur tous les appareils.
- **Ajouter un devoir hors EcoleDirecte** (cours de soutien, cours de langue…) : Vue parents → *Ajouter un devoir*.
  Il apparaît tout de suite dans « Pour demain » et prend sa place dans le planning à la synchro suivante.
- **Changer une activité ou une heure de coucher** : Vue parents → *Réglages (avancé)*.
- **Historique** : toutes les semaines restent consultables avec les boutons de semaine.

### Comment les créneaux sont placés

- un devoir est fait la veille (la veille d’un lundi : le samedi pour l’écrit, le dimanche pour l’oral) ;
- une évaluation se prépare sur 3 jours (fiche, exercices, interrogation) + 10 minutes le matin même ;
  un DS ajoute une séance de plus ;
- ce qui s’apprend la veille se récite le lendemain au petit-déjeuner ;
- goûter et pause en rentrant, pauses entre les blocs, aucun devoir après le sport ;
- chaque soir : relire les leçons du jour et du lendemain, sac, une corvée (elles tournent), rangement ;
- grand rangement le mercredi, draps le samedi.

Les semaines importées depuis un historique (faites à la main) sont **verrouillées** : la synchro n’y change que
« Pour demain » et les évaluations. Les semaines suivantes sont entièrement automatiques.

## Entretien

- **GitHub désactive les tâches planifiées après 60 jours sans activité** sur un dépôt public. Vous recevez un
  e-mail : il suffit de cliquer sur *Enable workflow* dans l’onglet Actions.
- Supabase met en pause un projet gratuit inactif depuis 7 jours. La synchro quotidienne le garde actif.
- Si la synchro échoue, la page l’indique en haut. Le détail est dans l’onglet Actions de GitHub et dans la table
  `sync_log` de Supabase (colonne `details`).

## Sécurité

- Le site ne contient aucune donnée : tout est chargé depuis Supabase **après** la saisie du mot de passe.
- La clé `anon` dans `site/config.js` est publique par conception ; ce sont les règles de la base (RLS) qui protègent
  les données. La clé `service_role` n’est que dans les secrets GitHub.
- Les journaux GitHub Actions d’un dépôt public sont visibles de tous : les scripts n’y écrivent que des compteurs.
- Mode démo (données fictives) : ajoutez `?demo` à l’adresse du site.

## Pour les curieux

```
site/            la page (HTML + JS, sans framework)
scripts/
  ed_fetch.py    connexion EcoleDirecte et normalisation des devoirs / emploi du temps
  planner.py     règles de placement des créneaux
  sync.py        orchestration : EcoleDirecte -> planificateur -> Supabase
  demo_data.py   famille fictive (tests + site/demo.json)
supabase/schema.sql
.github/workflows/  sync.yml (2 fois par jour), pages.yml (publication du site)
```

Tester le planificateur en local : `python scripts/demo_data.py`.
