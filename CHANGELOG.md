# Historique des versions

Numérotation : `MAJEUR.MINEUR.CORRECTIF` (ex. 0.2.1).
- **correctif** (0.1.**1**) : un bug corrigé, rien ne change pour la famille ;
- **mineur** (0.**2**.0) : une nouveauté (un réglage, un écran, une règle de planning) ;
- **majeur** (**1**.0.0) : la version jugée stable après plusieurs semaines d'usage réel.

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
