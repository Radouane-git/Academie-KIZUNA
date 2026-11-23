# Historique des versions

Numérotation : `MAJEUR.MINEUR.CORRECTIF` (ex. 0.2.1).
- **correctif** (0.1.**1**) : un bug corrigé, rien ne change pour la famille ;
- **mineur** (0.**2**.0) : une nouveauté (un réglage, un écran, une règle de planning) ;
- **majeur** (**1**.0.0) : la version jugée stable après plusieurs semaines d'usage réel.

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
