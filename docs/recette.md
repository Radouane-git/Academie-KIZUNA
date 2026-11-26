# Liste de recette

À dérouler après chaque version, sur un téléphone **et** un ordinateur. Le mode démo (`?demo`) permet de tester
sans toucher aux vraies coches. Compter 10 minutes.

## Accès
- [ ] L'adresse du site s'ouvre (pas de 404) et demande le mot de passe familial sur un appareil neuf.
- [ ] L'appli installée s'ouvre sur l'accueil « Qui ouvre l'Académie ? » avec une carte par enfant.
- [ ] Après un rechargement, la nouvelle version est bien affichée (numéro `?v=` à jour).

## Enfant
- [ ] La carte d'élève a la bonne couleur de héros ; le tampon est visible.
- [ ] Téléphone : « Prochaine mission » et **Commencer** sont visibles sans faire défiler.
- [ ] **Commencer** ouvre l'écran mission ; **C'est fait** coche et passe à la suivante ; **Plus tard** et Échap ferment.
- [ ] Cocher un rond : la coche apparaît, le compteur bouge, un message apparaît tous les 3 cochés.
- [ ] La coche apparaît sur un **autre appareil** en moins d'une minute.
- [ ] Les pastilles « Relire les leçons » se cochent une à une.
- [ ] La bande des jours change de jour ; Ma semaine ouvre un jour au clic.
- [ ] Bibliothèque : ajouter puis retirer un livre (« Retirer » puis « Confirmer ») ; Annuler referme le formulaire.
- [ ] Aucun horaire après 21h30, coucher au plus tard 22h00 ; rien après une activité sportive le soir.

## Parents
- [ ] Une carte par enfant, chiffres cohérents avec l'écran de l'enfant.
- [ ] Donner un tampon → visible sur la carte d'élève de l'enfant.
- [ ] Mot du sensei → visible dans la journée de l'enfant.
- [ ] Ajouter une mission → visible tout de suite dans « Pour demain ».
- [ ] Saisie rapide : l'aperçu reconnaît prénoms, dates et matières.
- [ ] Emploi du temps : **Prof absent** barre le cours, **Rétablir** l'annule.

## Paramètres
- [ ] Changer une couleur de héros et l'enregistrer.
- [ ] Le menu des profils (téléphone) ouvre chaque profil, la Vue parents et les Paramètres.

## Synchro
- [ ] Double-clic **Synchro planning** sur le PC : « Synchronisation réussie ».
- [ ] Le pied de page du site affiche l'heure de la dernière synchro avec un point vert.

## Lisibilité
- [ ] Polices : titres en Unbounded, texte en Atkinson Hyperlegible, 絆 en Dela Gothic One.
- [ ] Bandeau du haut sur une seule ligne sur ordinateur, quel que soit le profil.
- [ ] Rien de coupé ni de superposé sur un petit téléphone (largeur 360 px), bandeau compris, dans Paramètres aussi.

## Recette automatique
Avant une version importante : scripts de `tests/` (mise en page sur 4 largeurs, contrastes, clavier, 20 parcours
en mode démo). Voir `tests/README.md`.
