# Feuille de route

## Plus tard : ajouter un enfant et choisir sa source (EcoleDirecte ou Pronote)

Pas encore développé. Objectif : qu'une famille puisse ajouter un enfant depuis le site et brancher
son compte EcoleDirecte **ou** Pronote, sans toucher au code.

### Principe : des « connecteurs » interchangeables

```
scripts/
  sources/
    __init__.py        # registre : {"ecoledirecte": ..., "pronote": ...}
    base.py            # interface commune
    ecoledirecte.py    # le client actuel (ed_fetch.py), déplacé ici
    pronote.py         # à écrire (bibliothèque pronotepy, ou équivalent)
  sync.py              # boucle sur les comptes, appelle le bon connecteur
  planner.py           # inchangé : il ne connaît que le format commun
```

Interface commune d'un connecteur :

```python
class Source:
    id = "ecoledirecte"            # ou "pronote"
    label = "EcoleDirecte"
    def login(self, account: dict, secrets: dict, ask=None) -> None: ...
    def students(self) -> list[dict]:          # [{"id": "...", "name": "..."}]
    def homework(self, student_id, start, end) -> list[dict]:
        # [{"due": "2026-11-24", "subject": "Maths", "text": "...", "eval": False}]
    def schedule(self, student_id, start, end) -> list[dict]:
        # [{"date": ..., "start": "8h00", "end": "8h55", "subject": ..., "room": ..., "cancelled": ...}]
    def grades(self, student_id, start, end) -> list[dict]:  # plus tard (tampons automatiques)
```

Le planificateur ne voit que ce format commun : ajouter Pronote ne change ni le planning ni le site.

### Réglages (table settings, clé « famille »)

```json
{
  "accounts": [
    {"id": "ed-famille", "source": "ecoledirecte", "label": "Compte parent EcoleDirecte"},
    {"id": "pronote-lycee", "source": "pronote", "label": "Pronote du lycée", "url": "https://…/pronote/parent.html"}
  ],
  "children": [
    {"id": "…", "name": "…", "account": "ed-famille", "student": "<id élève chez la source>"},
    {"id": "…", "name": "…", "account": "ed-famille", "same_class_as": "<id d'un autre enfant>"}
  ]
}
```

- `accounts` ne contient **jamais** de mot de passe : seulement le type de source et un libellé.
- Les identifiants restent sur le PC de synchro (fichier chiffré), rangés par `account.id`.
- `same_class_as` remplace `ed_same_as` (jumeaux dans la même classe : mêmes devoirs, annulations partagées).
- Migration : un enfant sans `account` reste sur l'ancien fonctionnement (EcoleDirecte).

### Écrans à prévoir (page Paramètres)

1. **Ajouter un enfant** : prénom, niveau (collège / lycée), couleur de héros, coucher, activités,
   puis « Relier à un compte » (liste des comptes) ou « Même classe que… ».
2. **Comptes scolaires** : ajouter un compte (EcoleDirecte ou Pronote), libellé.
   Les identifiants se saisissent sur le PC (double-clic « Synchro planning » → nouvelle question),
   jamais sur le site.
3. Après la première synchro du compte : choisir quel élève correspond à quel enfant.

### Points d'attention

- Pronote : la bibliothèque Python pronotepy est en mode maintenance (corrections seulement) ;
  vérifier au moment du développement qu'elle fonctionne avec l'ENT de l'établissement,
  ou passer par Pawnote (JavaScript), maintenu activement.
- Comme EcoleDirecte, Pronote peut bloquer les serveurs : garder la synchro sur un PC de la maison.
- Tester d'abord avec le compte de démonstration de Pronote.

## Autres pistes notées le 23/11

- Vue parents dans le nouveau style (navigation inspirée de Brilliant).
- Code parent pour ouvrir les Paramètres.
- Notes EcoleDirecte → proposition de tampon automatique après une bonne note préparée.
- Bilan du dimanche pour les parents.
- Mode « interroge-moi » pour les révisions.

## Idées notées le 24/11

### 1. Remarques et retours des professeurs
Garder au même endroit ce que les professeurs disent de chaque enfant (bulletin, cahier de liaison, réunion,
message, appréciation d'une copie).
- **Saisie** (Vue parents → « + Ajouter une remarque ») : enfant, matière, professeur (facultatif), date, type
  (encouragement / point à travailler / comportement / méthode), texte.
- **Lecture** : fil par enfant, filtrable par matière ; les « points à travailler » encore ouverts remontent
  sur la carte de l'enfant et à côté des évaluations de la même matière.
- **Lien avec le reste** : une remarque « point à travailler » peut devenir une mission ou un conseil.
- **Plus tard** : récupérer automatiquement les appréciations des bulletins de l'ENT, si l'API le permet.
- **Confidentialité** : visible par les parents ; l'enfant ne voit que ce que les parents choisissent de partager
  (case « montrer à l'enfant »).
- **Pourquoi** (retour des parents, 24/11) : les enfants ne savent pas toujours ce que leurs professeurs pensent d'eux ;
  les retours arrivent par e-mail, à l'oral ou au bulletin, et se perdent.
- **Deux versions de chaque retour** :
  - *original* (privé, parents seulement) : le message tel que reçu, la source (e-mail, réunion, bulletin), la date ;
  - *version pour l'enfant* (rédigée ou reformulée par les parents, Claude peut proposer une formulation) :
    **ce que le professeur apprécie chez toi** → **ce qu'il attend** → **ce qui peut changer** (ex. une note de
    comportement qui peut remonter d'ici la fin du trimestre).
- **Côté enfant** : rubrique « Ce que pensent mes professeurs », les points forts d'abord ; les retours positifs
  s'affichent comme un « mot du professeur ». Un point à travailler peut devenir un **objectif** suivi
  (« me mettre au travail plus vite », « rester calme quand on me cherche ») avec un petit bilan chaque semaine.
- **Discrétion** : ne jamais enregistrer le nom d'autres élèves cités dans un message (les remplacer par « un camarade ») ;
  ces contenus restent dans Supabase, jamais dans le dépôt.
- Base : nouvelle table `teacher_notes` (bloc SQL dédié).

### 2. « Comment j'ai travaillé ? » (méthode de révision)
Après une révision ou une leçon (en plus de la difficulté 1 à 5), l'enfant indique en un toucher comment il a travaillé,
pour repérer les méthodes qui marchent et les améliorer.
- **Choix rapides** (plusieurs possibles) : relu le cours · fait une fiche · refait des exercices sans la correction ·
  me suis fait interroger · cartes mémoire · expliqué à quelqu'un · fait un schéma · rien de tout ça ;
  plus « Temps réel » (≈ 10 / 20 / 30 / 45 min) et une note libre facultative.
- **Parents** : par enfant et par matière, quelles méthodes sont utilisées ; croisé avec la difficulté ressentie
  et, plus tard, avec les notes obtenues (« tes révisions avec interrogation donnent de meilleures notes »).
- **Coup de pouce** : si une révision n'a été que « relu le cours », proposer la prochaine fois une méthode plus efficace
  (s'interroger, refaire des exercices), avec un lien vers le conseil correspondant.
- Base : colonnes `method` (liste) et `minutes` sur `checks`, ou petite table `work_logs`.

### 3. Conseils enrichis (professeurs et livres de méthode)
Transformer l'onglet Conseils en une petite bibliothèque de méthodes, alimentée par les parents.
- **Sources** : conseils des professeurs (par exemple le professeur des cours du soir, qui en donne beaucoup),
  et fiches de lecture de livres de méthode choisis par les parents (ex. un livre sur la façon d'apprendre
  efficacement, un autre sur la façon de lire un livre en profondeur).
- **Forme** : une carte par conseil — titre, en deux ou trois phrases **reformulées** (jamais de passages recopiés
  des livres), source (« Conseil de M. … », « D'après le livre … »), matières ou moments concernés.
- **Au bon moment** : un conseil lié aux révisions s'affiche dans l'écran « mission en cours » d'une révision,
  un conseil de lecture à côté d'une lecture, etc. ; « conseil de la semaine » sur l'accueil.
- **Saisie** : Paramètres ou Vue parents → « + Ajouter un conseil » ; les retours d'un professeur (idée n° 1)
  peuvent être promus en conseil d'un clic.
- **Contenu de départ** : une dizaine de conseils généraux déjà présents (pause en rentrant, 25/5, apprendre le soir
  et réciter le matin, révision sur 3 jours…), à compléter par la famille.
- Base : nouvelle table `tips` (les conseils actuels du code deviennent les conseils par défaut).
- Le dépôt public ne contient que les conseils généraux ; les conseils des professeurs et les fiches de lecture
  vivent dans Supabase.

### Ordre conseillé
1 (retours des professeurs, jugé prioritaire par les parents le 24/11) → 2 (méthode de révision) → 3 (conseils au bon moment).
Les trois idées du 24/11 sont faites (v0.10.0, v0.11.0, v0.12.0).

## Idée notée le 25/11 : carnet de lecture et fiche de lecture guidée

Inspirée de la méthode de lecture transmise par une professeure de français de 4e (ses conseils, reformulés,
sont saisis dans les conseils de la famille, dans Supabase). À mettre en place plus tard.

- **Pendant la lecture** (Bibliothèque de l'enfant → livre en cours) : un carnet de lecture où l'enfant note
  au fil des chapitres les personnages principaux (âge, liens), les lieux, l'époque, qui raconte (« je » ou
  « il / elle ») et un court résumé de chaque chapitre ; il peut marquer deux ou trois passages clés.
- **Quand il clique sur « J'ai fini un livre »** : une fiche de lecture guidée, pré-remplie à partir du carnet,
  en 5 parties : carte d'identité du livre (auteur, titre, éditeur, genre) · histoire et narration ·
  personnage principal (but, alliés, opposants, qualités, défauts, évolution) · lieux et époque · avis
  (au moins trois raisons). En option : une quatrième de couverture qui donne envie sans adjectifs creux.
- **Sortie** : fiche imprimable ou à recopier dans le cahier.
- **Parents** : voient où en est la fiche de chaque livre en cours.
- **Lien avec le reste** : les conseils « Lecture » s'affichent pendant les missions de lecture ;
  préparer l'évaluation = savoir raconter un passage clé.
- Base : nouvelle table `reading_notes` (livre, enfant, chapitre, type de note, texte) ou champ JSON sur `books`.

## Idée notée le 25/11 : conseils pour les parents (faite en v0.13.0)

Les livres de méthode contiennent aussi des conseils qui s'adressent aux adultes qui accompagnent les devoirs.
À mettre en place plus tard.

- **Où** : une rubrique « Conseils pour les parents » dans la Vue parents (jamais affichée aux enfants).
- **Exemples** (reformulés d'après « Pourquoi les enfants n'aiment pas l'école ! » et « Mets-toi ça dans la tête ! ») :
  doser la difficulté (ni trop facile, ni trop dur) · ouvrir une séance par une question qui donne envie de chercher ·
  enrichir la culture générale par des lectures variées · traiter l'enfant en débutant, pas en expert ·
  ne pas l'étiqueter « visuel » ou « auditif » · féliciter l'effort et la méthode plutôt que le talent ·
  observer ce qui aide vraiment et s'ajuster.
- **Au bon moment** : un conseil parent lié à ce que montre la Vue parents (par exemple, sur « Points difficiles »,
  un conseil sur le dosage de la difficulté).
- Base : valeur `parents` dans la colonne `child` de la table `tips` (ou nouveau moment « parents »),
  exclue des écrans enfants.

## Idée notée le 25/11 : revoir la présentation finale

Les écrans se chargent (Conseils, Retours des professeurs, Vue parents…) et il faut beaucoup défiler.
À faire après les prochaines fonctions, avant la 1.0.

- Faire l'inventaire de chaque écran : ce qui sert tous les jours, ce qui sert de temps en temps, ce qui sert rarement.
- Pistes : onglets ou sous-pages dans la Vue parents (Semaine · Enfants · Conseils et retours · Actions) ;
  listes repliées avec les 3 éléments les plus récents et « Voir tout » ; filtres et recherche dans les conseils ;
  un seul conseil visible à la fois avec « suivant » ; retours des professeurs groupés par enfant puis par matière.
- Vérifier sur téléphone : une action principale par écran, le moins de défilement possible.
- Faire tester par les enfants et les parents, puis valider en préversion.
