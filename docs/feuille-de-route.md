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
