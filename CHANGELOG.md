# Historique des versions

Numérotation : `MAJEUR.MINEUR.CORRECTIF` (ex. 0.2.1).
- **correctif** (0.1.**1**) : un bug corrigé, rien ne change pour la famille ;
- **mineur** (0.**2**.0) : une nouveauté (un réglage, un écran, une règle de planning) ;
- **majeur** (**1**.0.0) : la version jugée stable après plusieurs semaines d'usage réel.

## [0.8.0] – 23 novembre 2026

- Page d'accueil « Qui ouvre l'Académie ? » : une grande carte par enfant (couleur, niveau, missions du jour),
  plus Vue parents et Conseils. L'appli s'ouvre dessus ; le logo y ramène.
- Ordinateur : le bandeau du haut reste sur une ligne quel que soit l'enfant choisi (menus un peu plus compacts).
- Tampon de l'Académie entouré de blanc sur les cartes : bien visible sur Sakura et Brasier.

## [0.7.0] – 23 novembre 2026

Validée le 23/11 et publiée. Corrections issues de l'audit UX du 23/11 :
- Téléphone : la carte d'élève est compacte, la « Prochaine mission » et son bouton Commencer sont visibles
  dès l'ouverture ; évaluation proche, « Pour demain » et mot du sensei juste en dessous.
- Téléphone : menu des profils (enfants, Vue parents, Paramètres, Conseils) derrière l'avatar en haut à droite.
- Aide à la première visite : « Touche le rond quand une mission est faite » (bouton Compris).
- Retour quand on coche : petit rebond du rond, vibration courte, message tous les 3 cochés et à la fin.
- Vue parents : une carte par enfant (missions du jour, semaine, prochaine évaluation) ; formulaires repliés
  (« + Donner un tampon », « + Écrire le mot du sensei »…) ; tableau de la semaine masqué sur téléphone.
- Contrastes corrigés (corail foncé sur fond clair, chiffre du niveau, titres corail sur fond sombre).
- Zones à toucher d'au moins 44 px (roue dentée, matières à relire, Prof absent, emploi du temps, liens).
- Nouvelle couleur de héros « Jade » (#14806D, éclair #9FF5E1).

## [0.6.0] – 23 novembre 2026

- L'Académie s'installe comme une appli (icône 絆 sur l'écran d'accueil, ouverture en plein écran,
  nom « Kizuna ») : manifeste web, icônes iPhone et Android.
- Paramètres : encadré « Installer sur un téléphone » (bouton direct sur Android quand c'est possible,
  marche à suivre pour iPhone et Android).
- Chaque appareil rouvre directement le dernier profil utilisé (le téléphone d'Imrane s'ouvre sur Imrane).

## [0.5.2] – 23 novembre 2026

- Nouvelle page « Paramètres » (roue dentée en haut à droite, ou lien en bas de la Vue parents) :
  couleurs de héros, import d'historique et réglages avancés y sont rangés, hors de la Vue parents.

## [0.5.1] – 23 novembre 2026

- Retour de la carte à lignes de vitesse aux couleurs de chaque enfant en haut des sections
  Aujourd'hui (niveau, badges, missions du jour, tampons), Ma semaine et Bibliothèque.
  Polices inchangées (titre en Unbounded très gras, comme avant).

## [0.5.0] – 23 novembre 2026

Validée le 23/11 : la préversion devient le site principal (`/preview/` renvoie vers l'accueil).
Navigation inspirée de Brilliant, polices inchangées (Unbounded, Atkinson Hyperlegible, Dela Gothic One).
- Quatre sections par enfant : Aujourd'hui, Ma semaine, Bibliothèque, Tampons (en haut sur ordinateur,
  barre en bas sur téléphone) ; changement de profil par pastilles en haut à droite.
- Aujourd'hui : salutation, bande des 7 jours, carte « Prochaine mission » avec un bouton « Commencer »,
  « Le chemin du jour » (on coche en touchant le rond), colonne avec avancement, mot du sensei,
  « Pour demain » et prochaine évaluation.
- Écran « mission en cours » : barre de progression, consigne, « C'est fait » passe à la mission suivante,
  « Plus tard » referme (touche Échap aussi).
- Ma semaine : un jour par ligne avec son avancement et ses évaluations, puis évaluations et idées.
- Compteurs par mission (« Relire les leçons » compte pour une mission).

## [0.4.1] – 23 novembre 2026

- « Relire les leçons » : message « Pas de leçon à relire pour demain » quand le lendemain n'a pas cours
  (au lieu d'une pastille vide, qui empêchait aussi d'atteindre 100 %).
- Vue parents : la liste « Missions ajoutées à la main » a une hauteur fixe (environ 5 missions) avec défilement.

## [0.4.0] – 23 novembre 2026

- Emploi du temps du jour (lu sur EcoleDirecte) affiché en haut des missions, avec les salles.
- Cours annulés : ceux marqués annulés sur EcoleDirecte, ceux que le professeur annonce dans les devoirs
  (« pas cours », « cours annulé », « professeur absent »…) et ceux annulés sur le site avec le bouton
  « Prof absent » (pour les jumeaux, l'annulation vaut pour les deux). Le planning en tient compte
  (heures de retour, leçons à relire) à la synchronisation suivante ; « Rétablir » annule l'annulation.
- Une annonce d'annulation n'est plus prise pour un devoir ni une évaluation.
- Correction : « ED.PHYSIQUE & SPORT. » est bien l'EPS (et non la Physique-Chimie).
- Journées chargées : devoirs possibles jusqu'à 21h30 (réglage « work_until »), en commençant par
  les révisions d'évaluation ; le coucher est alors décalé, au plus tard à 22h00 (réglage « bedtime_max »).
- Nouvelle table Supabase : `cancellations` (bloc SQL « v0.4.0 » de schema.sql).

## [0.3.2] – 23 novembre 2026

- Bibliothèque : bouton « Annuler » (et touche Échap) pour refermer le formulaire « J'ai fini un livre ».

## [0.3.1] – 23 novembre 2026

- Plus aucune mission après « écrans coupés » : quand la journée déborde, le travail peut aller jusqu'à 25 min
  avant le dîner, puis après le dîner (jamais après le sport) ; ce qui ne rentre toujours pas s'affiche
  dans un encadré « Pas de place avant le coucher », et une remarque prévient les parents.
- Semaines verrouillées : les jours à venir sont recalculés en entier à chaque synchronisation
  (les jours passés et leurs coches ne bougent pas), pour que les devoirs ajoutés trouvent une vraie place.
- Pictogrammes tous à la même taille (les moments calmes sont juste plus pâles).

## [0.3.0] – 23 novembre 2026

Validée le 23/11 : la préversion devient le site principal (l'adresse `/preview/` renvoie vers l'accueil).
- Nouvelle identité « Académie Kizuna » : logo 絆, carte d'élève avec niveau et badges,
  missions classées par rang (S, A, B, C, D), pictos autocollants.
- Couleurs par profil (Imrane Lagon, Nahila Sakura, Aliya Améthyste, Parents Graphite), modifiables dans la Vue parents.
- Tampon de l'Académie : les parents tamponnent une bonne note, l'enfant le voit sur sa carte.
- Mot du sensei : message des parents affiché dans la journée de l'enfant.
- Niveau = 1 + une tranche par 40 missions cochées ; badges « jours de suite » (80 % de la journée faite),
  Lecteur (15 lectures), Stratège (10 révisions), Pilier de la maison (15 tâches de maison), Tamponné.
- Bibliothèque des livres lus : chaque enfant note ses livres terminés (titre, auteur, pages, date),
  avec le total de livres et de pages ; résumé par enfant dans la Vue parents.
  Badge Lecteur aussi à partir de 3 livres, badge « 1 000 pages lues » (puis 2 000…).
- Nouvelles tables Supabase : `stamps`, `sensei_messages` et `books` (blocs SQL « v0.3.0 » de schema.sql).

## [0.2.1] – 23 novembre 2026

- Les devoirs ajoutés à la main sont aussi placés dans les semaines verrouillées (faites à la main),
  sans toucher au reste de la journée.
- Choix « jour où le faire / jour où le rendre » dans « Ajouter un devoir » et dans la saisie rapide
  (par défaut : jour où le faire), et bouton pour décaler d'un jour les devoirs déjà saisis.
- Un devoir dont l'échéance est aujourd'hui est placé le jour même ; une durée écrite (« 15 mins ») est respectée.
- Sans matière, le libellé n'affiche plus « Devoir : ».

## [0.2.0] – 22 novembre 2026

- **Vue à 3 semaines** : boutons « Semaine dernière », « Cette semaine », « Semaine prochaine » ;
  les autres semaines restent accessibles dans « Autres semaines… ».
- La synchro prépare la semaine suivante, et une semaine de plus le week-end
  (la semaine à venir est visible dès le samedi).
- **Saisie rapide de devoirs** (Vue parents) : on colle la liste telle qu'on la reçoit
  (prénom, dates, un devoir par ligne), aperçu avec le type modifiable, enregistrement en une fois.
  Le planificateur respecte le type choisi (devoir, à apprendre, lecture, évaluation).
- **Idées de loisirs et de sorties** : lecture plaisir, sortie, défi construction, échecs…
  Affichées dans l'onglet de chaque enfant (« Idées pour toi »), à cocher, et dans la journée si elles sont datées.

Nécessite d'exécuter une fois dans Supabase le bloc SQL « v0.2.0 » de `supabase/schema.sql` (table `ideas`).

## [0.1.0] – 22 novembre 2026

Première version en service.

- Site en ligne (GitHub Pages), protégé par un mot de passe familial (Supabase).
- Un onglet par enfant, semaines et historique, coches partagées en direct sur tous les appareils.
- Vue parents : avancement de la semaine, évaluations à venir, ajout de devoirs hors EcoleDirecte,
  réglages (enfants, activités, heures de coucher), import d'historique.
- Synchronisation EcoleDirecte depuis le PC de la maison (tâche planifiée Windows, 7h et 18h,
  raccourci « Synchro planning »), avec réponse à la question de sécurité dans la fenêtre.
- Placement automatique des créneaux : devoir la veille, évaluations sur 3 jours, rien après le sport,
  relecture des leçons du jour et du lendemain, corvées et rangement.
- Historique repris : semaines du 16 et du 23 novembre (faites à la main, verrouillées).

Limites connues : le placement automatique n'a pas encore été vérifié sur une vraie semaine
(première semaine automatique : 30 novembre) ; EcoleDirecte n'a pas d'API officielle.
