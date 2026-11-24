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
2 (petit, prolonge la difficulté 1 à 5) → 3 (conseils au bon moment) → 1 (remarques des professeurs).
