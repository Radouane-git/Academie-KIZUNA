# Journal des décisions

Une ligne par décision importante : ce qui a été choisi et pourquoi. Les plus récentes en bas.

| Date | Décision | Pourquoi |
|---|---|---|
| 22/11/2026 | Site statique sur **GitHub Pages**, dépôt public | gratuit, sans serveur à maintenir ; possible car aucune donnée personnelle n'est dans le dépôt |
| 22/11/2026 | Données dans **Supabase** (offre gratuite, Francfort) | base Postgres hébergée en Europe, authentification et temps réel inclus, accessible directement depuis le navigateur |
| 22/11/2026 | **Un seul compte famille** protégé par un mot de passe familial | simple pour les enfants ; RLS limitée à ce compte, inscriptions désactivées |
| 22/11/2026 | **Client ENT écrit maison** (`ed_fetch.py`) plutôt qu'une bibliothèque tierce | la bibliothèque essayée échouait sur la nouvelle poignée de main (GTK) et la double authentification |
| 22/11/2026 | **Synchro sur le PC de la maison** (tâche planifiée Windows), pas sur les serveurs GitHub | l'ENT bloque les adresses de centres de données (faux « mot de passe invalide » + e-mail « connexion bloquée ») |
| 22/11/2026 | Question de sécurité ENT **répondue dans la console du PC** | l'ENT change de question à chaque tentative : il faut répondre pendant la même connexion |
| 22/11/2026 | Identifiants **chiffrés par Windows (DPAPI)** sur le PC | lisibles seulement par la session de l'utilisateur ; jamais dans le dépôt ni sur le site |
| 22/11/2026 | Règles de planning **automatiques et explicables** (voir fonctionnel § 5) | prévisibles pour les enfants, réglables par les parents |
| 23/11/2026 | Les devoirs ajoutés à la main sont datés **« jour où le faire »** par défaut | c'est ainsi que la famille les note |
| 23/11/2026 | Identité **Académie Kizuna** (logo 絆, couleurs de héros, tampons) | univers manga apprécié des enfants, sans reprendre de marque protégée |
| 23/11/2026 | Polices **Unbounded + Atkinson Hyperlegible + Dela Gothic One**, à ne pas changer | caractère + lisibilité ; validées par la famille |
| 23/11/2026 | Navigation **inspirée de Brilliant** (une action principale, chemin du jour, 4 sections) | clarté et prise en main ; inspiration de design, pas de fonctionnalités |
| 23/11/2026 | Devoirs possibles **jusqu'à 21h30** les jours chargés, coucher au plus tard **22h00** | demande des parents, surtout la veille d'un contrôle |
| 23/11/2026 | Les annonces « pas cours / prof absent » **annulent le cours** | éviter de les prendre pour des devoirs ; libérer le créneau |
| 23/11/2026 | **Préversion** sur `/preview/` avant chaque changement visible important | les parents valident avant que les enfants ne voient le changement |
| 23/11/2026 | **Appli installable** (manifeste web) plutôt qu'une appli de magasin | aucun coût, mises à jour instantanées |
| 23/11/2026 | **Page d'accueil des profils** à l'ouverture | appareils partagés ; chaque enfant choisit son profil |
| 23/11/2026 | Dépôt renommé **Academie-KIZUNA** | adresse du site au nom de l'appli |
| 23/11/2026 | Architecture **multi-sources** (EcoleDirecte, Pronote) prévue mais pas développée | besoin futur ; voir feuille de route |
