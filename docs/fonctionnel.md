# Spécifications fonctionnelles

Ce document décrit **ce que fait** l'Académie Kizuna : les écrans, les règles du planning, la progression.
Pour **comment** c'est construit, voir [architecture.md](architecture.md).

> Aucune donnée réelle de la famille ici : les exemples utilisent des prénoms fictifs (Léo, Inès, Sarah),
> ceux du mode démo (`?demo`).

## 1. Objectif

Donner à chaque enfant (collège, lycée) un planning du soir clair, qui se remplit tout seul à partir des devoirs
de l'ENT, et qu'il coche lui-même. Les parents suivent l'avancement, ajoutent ce que l'ENT ne connaît pas
(cours du soir, cours de langue…), et encouragent (tampons, mot du sensei).

## 2. Profils et navigation

| Profil | Accès | Rôle |
|---|---|---|
| Enfant | carte sur l'accueil, pastille ou menu avatar | voit et coche sa journée, sa semaine, ses livres, ses tampons |
| Parents | « Vue parents » | suit les enfants, donne des tampons, écrit le mot du sensei, ajoute des missions, propose des idées |
| Paramètres | roue dentée | couleurs de héros, installation sur téléphone, import d'historique, réglages avancés (JSON) |

- Un seul **mot de passe familial** ouvre l'appli (demandé une fois par appareil).
- L'appli s'ouvre sur l'**accueil** « Qui ouvre l'Académie ? » : une carte par enfant (couleur, niveau, missions du jour).
- Adresses : `#accueil`, `#<enfant>`, `#<enfant>/semaine`, `#<enfant>/livres`, `#<enfant>/tampons`, `#parents`,
  `#parametres`, `#conseils`.
- Ordinateur : sections en haut, profils en pastilles à droite. Téléphone : sections en barre du bas,
  profils derrière l'avatar en haut à droite.
- Installable comme une appli (« Kizuna », icône 絆) sur iPhone, Android et ordinateur.

## 3. Écrans de l'enfant

### 3.1 Aujourd'hui
- **Carte d'élève** aux couleurs de l'enfant (lignes de vitesse) : niveau, salutation, missions faites et restantes,
  badges, anneau des missions du jour, nombre de tampons. Compacte sur téléphone.
- **Bande des 7 jours** pour changer de jour (pastille : vide, entamé, complet).
- **Prochaine mission** : la première mission non faite, avec le bouton **Commencer**.
- **Écran « mission en cours »** : consigne en grand, barre de progression, **C'est fait** (coche et passe à la suivante),
  **Plus tard** (ferme). Échap ferme aussi.
- **Emploi du temps du jour** (repliable) : cours, salles, cours annulés barrés, bouton **Prof absent** / **Rétablir**.
- **Le chemin du jour** : toutes les étapes de la soirée dans l'ordre. On coche en touchant le **rond** ;
  toucher le **nom** ouvre l'écran mission. Les pauses, repas et coucher sont des repères non cochables.
- **Relire les leçons** : une pastille par matière du jour et du lendemain ; message
  « Pas de leçon à relire pour demain » si le lendemain n'a pas cours. Compte pour **une** mission.
- **Pas de place avant le coucher** : encadré des missions qui ne rentrent pas dans la journée (voir § 5.4).
- Colonne (ou bloc sous la prochaine mission sur téléphone) : **mot du sensei**, **Pour demain** (ce qui est à rendre),
  **prochaine évaluation**.
- **Difficulté ressentie** : en cochant un devoir, une leçon, une révision ou une lecture, l'enfant note de 1 (très facile)
  à 5 (très difficile), ou passe ; pastille colorée sur le rond, modifiable.
- **Méthode de travail** : après une révision ou une leçon, l'enfant indique comment il a travaillé (méthodes, temps) ;
  un coup de pouce propose une méthode plus efficace si les dernières révisions se limitent à relire le cours.
- **Retours quand on coche** : petit rebond du rond, vibration courte, message tous les 3 cochés et à la fin.
- **Aide** à la première visite : « Touche le rond quand une mission est faite » (bouton Compris).

### 3.2 Ma semaine
Un jour par ligne (anneau, horaires de cours, évaluations du jour) ; un clic ouvre le jour.
Puis évaluations à venir et **idées pour toi** (loisirs proposés par les parents, cochables) ; l'enfant peut aussi
**proposer une idée**, qui attend l'accord d'un parent.
Navigation : semaine dernière, cette semaine, semaine prochaine, autres semaines.

### 3.3 Bibliothèque
Livres terminés (titre, auteur, pages, date), total de livres et de pages, bouton **J'ai fini un livre**
(formulaire avec Annuler).

### 3.4 Tampons
Carte d'élève complète, **Mes objectifs** (bouton « Cette semaine, je l'ai tenu »), **Ce que pensent mes professeurs**
(version pour l'enfant des retours partagés par les parents), liste des tampons reçus, rappel des règles de niveau.

## 4. Vue parents

- **Bureau du sensei** : semaine en cours, pourcentage, évaluations à 7 jours, tampons.
- **Une carte par enfant** : missions du jour, semaine, prochaine évaluation, missions notées difficiles ; un clic ouvre sa journée.
- **Points difficiles de la semaine** : missions notées 4 ou 5, par enfant (utile avant une évaluation).
- **Avancement de la semaine** (ordinateur) : tableau enfant × jour.
- **Retours des professeurs** : liste par enfant (privé / visible par l'enfant, objectif et suivi de la semaine,
  message d'origine repliable), boutons Modifier et Supprimer.
- Formulaires repliés :
  - **Ajouter un retour de professeur** (message d'origine privé + version pour l'enfant en trois parties + objectif +
    case « Montrer à l'enfant ») ; ne jamais y écrire le nom d'un autre élève ;
  - **Donner un tampon** (enfant, évaluation, note, date, message) ;
  - **Écrire le mot du sensei** (pour un enfant ou tous) ;
  - **Ajouter une mission** (date « à faire » ou « à rendre », matière, consigne, type) ;
  - **Saisie rapide** de plusieurs missions collées en texte (prénom, puis dates, puis une mission par ligne ;
    aperçu avant enregistrement) ;
  - **Proposer une idée** de loisir ou de sortie (datée ou non).
- **Missions ajoutées à la main** (liste avec défilement, suppression, « tout décaler d'un jour »).

## 4 bis. Conseils

- Onglet **Conseils** : conseils de l'Académie + conseils de la famille (professeurs, fiches de livres reformulées),
  filtrables par moment (organisation, devoirs, révisions, leçons, lecture).
- Un conseil adapté s'affiche dans l'écran « mission en cours » ; « Conseil de la semaine » sur l'accueil.
- Les parents ajoutent, modifient, suppriment les conseils (Vue parents) ; un retour de professeur peut devenir un conseil.
- Règle : écrire les conseils avec ses mots, ne jamais recopier de passages de livres.
- **Conseils pour les parents** (0.13) : rubrique de la Vue parents, jamais affichée aux enfants (ni onglet Conseils,
  ni missions, ni accueil). Conseils par défaut dans le code (`PARENT_TIPS`) + conseils de la famille saisis avec
  « Pour : Les parents » (`tips.child = 'parents'`, `tips.moments` = endroits : general, diff, meth, notes).
  Un conseil s'affiche aussi sous « Points difficiles », « Méthodes de travail » et « Retours des professeurs ».

## 4 ter. Code parent (0.14)

- Facultatif. S'il existe, la Vue parents et les Paramètres affichent d'abord l'écran « Espace parents ».
- Toujours ouverts sans code : accueil, pages des enfants (y compris « Proposer une idée »), Conseils.
- Déverrouillage valable jusqu'à la fermeture de l'appli, ou durablement sur l'appareil si la case est cochée.
- Changer le code reverrouille les autres appareils. 5 codes faux : 30 secondes d'attente.

## 4 quater. Bilan de la semaine (0.15)

- Vue parents → « Bilan de la semaine » (bandeau mis en avant le samedi et le dimanche). Protégé par le code parent.
- Par enfant : missions faites / prévues par catégorie, jours passés seulement (jusqu'à la veille en cours de
  semaine, toute la semaine le dimanche) ; les loisirs et les pauses ne comptent pas.
- « À en parler ensemble » : au plus 4 points calculés (tampons ou régularité ≥ 85 % → féliciter ; < 70 % sur une
  semaine finie → ce qui a coincé ; mission notée 4 ou 5 ; révisions surtout « relu le cours » ; évaluations des
  7 jours suivants ; objectif de retour de professeur pas encore tenu).
- « Préparer la semaine » : 5 gestes cochables, enregistrés dans `checks` (`sunday|<lundi suivant>|<geste>`).

## 4 quinquies. Emploi du temps de la semaine (0.16)

- Section « Emploi du temps » de chaque enfant (5e section, « Horaires » sur téléphone).
- Sources : cours d'EcoleDirecte (`plans.data.children[id].lessons`, annulations comprises) et activités de
  `settings.famille.children[].activities` (jour, début, fin, libellé, `sport`).
- Couleurs : École ; Cours et soutien (toute activité non sportive) ; Sport (`sport: true` ou libellé sportif).
- Les cours consécutifs de la même matière forment un seul bloc.

## 4 sexies. Carnet et fiche de lecture (0.18)

- Bibliothèque → « Je commence un livre » : un livre en cours avec son carnet (époque, narrateur, personnages, lieux,
  résumé des chapitres, passages clés). Plusieurs livres en cours possibles ; « Abandonner ce livre » le retire.
- « J'ai fini ce livre » : ajoute le livre aux livres lus (même règle que « J'ai fini un livre ») et ouvre la fiche.
- Fiche en 5 parties, pré-remplie depuis le carnet ; une partie est « complète » quand ses champs principaux sont
  remplis (titre et genre ; narrateur et résumé ; personnage et but ; lieux et époque ; trois raisons).
- Les parents voient les livres en cours, le nombre de notes du carnet et l'avancement de la fiche.
- Inspirée d'une méthode transmise par une professeure de français (reformulée).

## 4 septies. Visites guidées (0.20)

- Une visite par écran (table `TOURS` dans `site/app.js` : sélecteur, titre, texte). Les étapes dont l'élément est
  absent (par exemple pas de livre en cours) sont sautées.
- Lancement automatique à la première ouverture de l'écran sur l'appareil (`localStorage` `kizuna-tour-<écran>`),
  jamais sur l'écran du code parent ; relance par le bouton ampoule du bandeau.
- Quand un écran change, mettre à jour ses étapes dans `TOURS`.

## 5. Règles du planning

Le planning est recalculé à chaque synchronisation (7h et 18h). Réglages dans Paramètres → Réglages (avancé).

### 5.1 Quand faire quoi
- Les dates de l'ENT sont des dates **de rendu** ; un devoir se fait **la veille**
  (pour un lundi : samedi pour l'écrit, dimanche pour l'oral).
- Les missions ajoutées à la main sont par défaut datées du **jour où les faire** et sont placées **ce jour-là exactement**
  (jamais plus tôt), sans récitation automatique le lendemain.
- **Évaluation** : préparation sur 3 jours (fiche, exercices, se faire interroger) + 10 minutes le matin même ;
  un DS ajoute une séance.
- **À apprendre** : apprendre la veille, réciter le lendemain matin.
- **Lecture** : de préférence au lit, avant de dormir.
- Une durée écrite dans la consigne (« 15 min ») est respectée.

### 5.2 Organisation de la soirée
- Goûter et pause sans écran en rentrant, puis le travail par blocs avec pauses.
- Avant le dîner : relire les leçons, préparer le sac, une corvée (elles tournent entre les enfants).
- Grand rangement le mercredi, draps le samedi.
- **Aucun devoir après le sport.**
- Écrans coupés 45 minutes avant le coucher.

### 5.3 Coucher
- Coucher habituel réglé par enfant ; plus tard les soirs de sport (22h au plus tard).
- Journée chargée : devoirs possibles **jusqu'à 21h30** (`work_until`), en commençant par les révisions
  d'évaluation ; le coucher est alors décalé, **22h00 au plus tard** (`bedtime_max`).

### 5.4 Journées trop chargées
1. Le travail peut aller jusqu'à 25 minutes avant le dîner (la corvée passe après).
2. Puis après le dîner, jusqu'à 21h30, les plus courtes et les révisions d'abord.
3. Ce qui ne rentre toujours pas va dans l'encadré **Pas de place avant le coucher**, et une remarque prévient les parents.

### 5.4 bis Échéances et doublons
- Rien n'est jamais placé après les cours le jour de l'échéance (sauf la relecture du matin même).
- S'il ne reste aucune soirée avant l'échéance, le devoir n'est pas placé et une remarque prévient les parents.
- Une séance déjà prévue un jour passé n'est pas reprogrammée.
- Une évaluation saisie à la main en double d'une évaluation de l'ENT (même matière, même date) est ignorée.

### 5.5 Cours annulés
Un cours est annulé s'il est :
- marqué annulé dans l'ENT ;
- annoncé dans les devoirs (« pas cours », « cours annulé », « professeur absent »…) — l'annonce n'est alors ni un devoir
  ni une évaluation ;
- annulé sur le site (« Prof absent »), ce qui vaut aussi pour un frère ou une sœur de la même classe.
Le planning en tient compte (heure de retour, leçons à relire) à la synchronisation suivante.

### 5.6 Semaines verrouillées
Une semaine importée d'un historique (faite à la main) garde ses jours passés et leurs coches ;
les jours à venir sont recalculés à chaque synchronisation.

## 6. Progression et récompenses

- **Niveau** = 1 + une tranche par 40 missions cochées.
- **Badges** : « N jours de suite » (au moins 80 % de la journée faite), Lecteur (15 lectures ou 3 livres),
  Stratège (10 révisions), Pilier de la maison (15 tâches ménagères), Tamponné (premier tampon),
  « 1 000 pages lues » (puis 2 000…).
- Une série qui s'arrête ne retire rien (choix volontaire : motiver sans culpabiliser).
- **Tampon de l'Académie** : donné par un parent après une bonne note préparée avec les révisions.
- **Mot du sensei** : message d'encouragement d'un parent, affiché dans la journée de l'enfant.

## 7. Couleurs de héros

Chaque profil choisit sa couleur dans Paramètres : Lagon, Sakura, Améthyste, Jade, Graphite (parents par défaut),
Ombre, Brasier, Émeraude, Éclair. Détails dans [charte-graphique.md](charte-graphique.md).

## 8. Hors périmètre (pour l'instant)

Ajouter un enfant depuis le site, choisir Pronote comme source, notes de l'ENT, bilan du dimanche :
voir [feuille-de-route.md](feuille-de-route.md).
