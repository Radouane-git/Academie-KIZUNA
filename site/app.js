(function () {
"use strict";
var PICTOS={"Conseil": "<path d=\"M24 7a12 12 0 0 1 7 21.7V33H17v-4.3A12 12 0 0 1 24 7Z\" fill=\"#FFC93C\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"18\" y=\"33\" width=\"12\" height=\"5\" rx=\"1.5\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M20 42h8\" fill=\"none\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M19 18a6 6 0 0 1 5-5\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>", "Prof": "<path d=\"M8 11h32a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H22l-8 7v-7H8a3 3 0 0 1-3-3V14a3 3 0 0 1 3-3Z\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M12 19h22M12 26h14\" fill=\"none\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Tampon": "<path d=\"M19 26v-6a5 5 0 1 1 10 0v6\" fill=\"#FF8A6E\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"10\" y=\"26\" width=\"28\" height=\"8\" rx=\"2\" fill=\"#C62E3A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M10 41h28\" fill=\"none\" stroke=\"#C62E3A\" stroke-width=\"3\" stroke-linecap=\"round\"/>", "Parchemin": "<rect x=\"12\" y=\"9\" width=\"24\" height=\"30\" rx=\"2\" fill=\"#FFF4D6\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"9\" y=\"6\" width=\"30\" height=\"6\" rx=\"3\" fill=\"#E0A800\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"9\" y=\"36\" width=\"30\" height=\"6\" rx=\"3\" fill=\"#E0A800\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M17 19h14M17 25h14M17 31h9\" fill=\"none\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Liste": "<rect x=\"10\" y=\"9\" width=\"26\" height=\"32\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"17\" y=\"6\" width=\"12\" height=\"6\" rx=\"2\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M15 20h8M15 27h8M15 34h6\" fill=\"none\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M33 17l-5 9h6l-4 9\" fill=\"none\" stroke=\"#FF6B4A\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Methode": "<rect x=\"10\" y=\"8\" width=\"28\" height=\"33\" rx=\"4\" fill=\"#C9B8FF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M15 19l3 3 5-6M15 32l3 3 5-6M27 19h6M27 32h6\" fill=\"none\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Difficile": "<path d=\"M5 41 19 17l7 11 5-7 12 20Z\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M19 17V7l8 3-8 3\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Avancement": "<path d=\"M7 41h34\" fill=\"none\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"10\" y=\"27\" width=\"7\" height=\"14\" rx=\"1.5\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"20.5\" y=\"19\" width=\"7\" height=\"22\" rx=\"1.5\" fill=\"#FFC93C\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"31\" y=\"10\" width=\"7\" height=\"31\" rx=\"1.5\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Horaires": "<rect x=\"9\" y=\"12\" width=\"30\" height=\"28\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><path d=\"M9 19 h30\" stroke=\"#0D3B45\" stroke-width=\"2.2\"/><rect x=\"9\" y=\"12\" width=\"30\" height=\"7\" rx=\"3\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><path d=\"M16 9 v6 M32 9 v6\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><rect x=\"13\" y=\"23\" width=\"7\" height=\"6\" rx=\"1.5\" fill=\"#9CC9C2\"/><rect x=\"23\" y=\"23\" width=\"7\" height=\"6\" rx=\"1.5\" fill=\"#FFC93C\"/><rect x=\"13\" y=\"31\" width=\"7\" height=\"6\" rx=\"1.5\" fill=\"#C9B8FF\"/><rect x=\"23\" y=\"31\" width=\"7\" height=\"6\" rx=\"1.5\" fill=\"#9CC9C2\"/>", "Devoir": "<path d=\"M10 38 l3-9 L31 11 l6 6 L19 35 Z\" fill=\"#FFC93C\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M31 11 l3-3 a3 3 0 0 1 4 0 l2 2 a3 3 0 0 1 0 4 l-3 3 Z\" fill=\"#FF8FB1\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M10 38 l3-9 l6 6 Z\" fill=\"#F6E7C8\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M8 13 l4 2 M13 7 l2 4 M41 31 l-4 1\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/>", "Réviser": "<circle cx=\"22\" cy=\"26\" r=\"16\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"22\" cy=\"26\" r=\"10\" fill=\"#FFFFFF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"22\" cy=\"26\" r=\"4\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M22 26 L40 8\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M36 6 l5 1 1 5 -4 0 Z\" fill=\"#0D3B45\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Lecture": "<path d=\"M5 13 c6-3 13-3 19 1 v24 c-6-4-13-4-19-1 Z\" fill=\"#FFFFFF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M43 13 c-6-3-13-3-19 1 v24 c6-4 13-4 19-1 Z\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M10 19 h9 M10 24 h9 M29 19 h9 M29 24 h9\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M38 4 l1.2 2.8 3 .4 -2.2 2 .6 3 -2.6-1.4 -2.6 1.4 .6-3 -2.2-2 3-.4 Z\" fill=\"#FFC93C\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Apprendre": "<path d=\"M24 8 a12 12 0 0 0-7 21.7 c1 1 1.5 2 1.5 3.3 h11 c0-1.3.5-2.3 1.5-3.3 A12 12 0 0 0 24 8 Z\" fill=\"#FFC93C\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M19 38 h10 M20.5 42 h7\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M24 2 v2 M8 10 l2 1.5 M40 10 l-2 1.5 M4 22 h2.5 M44 22 h-2.5\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M21 24 l3-5 v6 l3-5\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/>", "Relire": "<path d=\"M38 20 a15 15 0 0 0-27-5\" stroke=\"#0E5E6F\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M10 28 a15 15 0 0 0 27 5\" stroke=\"#FF6B4A\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M6 9 l5 7 7-3 Z\" fill=\"#0E5E6F\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M42 39 l-5-7 -7 3 Z\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Sac": "<path d=\"M12 18 a12 12 0 0 1 24 0 v20 a4 4 0 0 1-4 4 H16 a4 4 0 0 1-4-4 Z\" fill=\"#0E5E6F\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M18 12 v-3 a6 6 0 0 1 12 0 v3\" fill=\"none\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"17\" y=\"27\" width=\"14\" height=\"10\" rx=\"3\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M17 31 h14\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Corvée": "<rect x=\"8\" y=\"20\" width=\"26\" height=\"18\" rx=\"5\" fill=\"#FFD166\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M8 27 h26\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"16\" cy=\"32\" r=\"1.6\" fill=\"#0D3B45\"/><circle cx=\"26\" cy=\"33\" r=\"1.6\" fill=\"#0D3B45\"/><circle cx=\"36\" cy=\"12\" r=\"5\" fill=\"#DDF3FF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"42\" cy=\"22\" r=\"3\" fill=\"#DDF3FF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"27\" cy=\"9\" r=\"3\" fill=\"#DDF3FF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Rangement": "<path d=\"M6 17 l18-8 18 8 v19 l-18 8 -18-8 Z\" fill=\"#E9B872\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M6 17 l18 8 18-8 M24 25 v19\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M15 13 l18 8 v6\" stroke=\"#C62E3A\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/>", "Sport": "<rect x=\"4\" y=\"16\" width=\"7\" height=\"16\" rx=\"2\" fill=\"#16181D\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"37\" y=\"16\" width=\"7\" height=\"16\" rx=\"2\" fill=\"#16181D\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"11\" y=\"19\" width=\"5\" height=\"10\" rx=\"1.5\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"32\" y=\"19\" width=\"5\" height=\"10\" rx=\"1.5\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M16 24 h16\" stroke=\"#0D3B45\" stroke-width=\"3\"/><path d=\"M14 8 l2 4 M24 6 v4 M34 8 l-2 4\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/>", "Loisir": "<path d=\"M14 16 h20 a9 9 0 0 1 9 9 v2 a7 7 0 0 1-12 5 l-3-3 h-8 l-3 3 a7 7 0 0 1-12-5 v-2 a9 9 0 0 1 9-9 Z\" fill=\"#FF8FB1\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M13 22 v8 M9 26 h8\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><circle cx=\"33\" cy=\"23\" r=\"2\" fill=\"#0D3B45\"/><circle cx=\"37\" cy=\"28\" r=\"2\" fill=\"#0D3B45\"/>", "Repas": "<path d=\"M6 24 h36 a18 18 0 0 1-36 0 Z\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M12 24 c3-3 6 3 9 0 s6 3 9 0 s6 3 9 0\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M30 4 L22 22 M36 6 L26 22\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M14 10 c-2 3 2 4 0 7 M20 8 c-2 3 2 4 0 7\" stroke=\"#9CC9C2\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/>", "Coucher": "<path d=\"M30 40 A16 16 0 1 1 22 9 a12 12 0 0 0 16 21 A16 16 0 0 1 30 40 Z\" fill=\"#FFD166\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M34 6 h6 l-6 7 h6 M41 17 h4 l-4 5 h4\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/>"};
PICTOS["Parcours"]='<path d="M8 40c6-2 8-8 14-9s9 2 13-4 2-9 5-12" fill="none" stroke="#0D3B45" stroke-width="2.4" stroke-dasharray="4 3.5" stroke-linecap="round"/><circle cx="8" cy="40" r="4" fill="#FFC93C" stroke="#0D3B45" stroke-width="2"/><path d="M38 17V5" stroke="#0D3B45" stroke-width="2.4" stroke-linecap="round"/><path d="M38 5l8 3.5-8 3.5Z" fill="#FF6B4A" stroke="#0D3B45" stroke-width="2" stroke-linejoin="round"/>';
var CFG = window.PLANNING_CONFIG || {};
var DEMO = /[?&]demo\b/.test(location.search) || !CFG.SUPABASE_URL;
var root = document.getElementById("root");
var sb = null;

var KINDS = {dev:["Devoirs","--k-dev",1],app:["Apprendre / réciter","--k-app",1],rev:["Réviser une éval","--k-rev",1],lec:["Lecture","--k-lec",1],rel:["Relire les leçons","--k-rel",0],cor:["Corvée","--k-cor",1],ran:["Rangement","--k-ran",1],org:["Sac & agenda","--k-org",1],rep:["Pause","--k-calm",0],repas:["Repas","--k-calm",0],act:["Activité","--k-calm",0],dodo:["Soirée","--k-calm",0],loi:["Loisir / sortie","--k-loi",1]};
var IDEA_KINDS=[["lecture","Lecture plaisir"],["sortie","Sortie"],["defi","Défi construction"],["echecs","Échecs"],["sport","Sport / plein air"],["autre","Autre"]];
var TIPS = [
 ["Une pause avant de s’y mettre","20 à 30 minutes de goûter et de repos sans écran en rentrant : le travail qui suit va plus vite.","general"],
 ["25 minutes de travail, 5 minutes de pause","Un minuteur posé sur le bureau aide à tenir le rythme et à éviter de traîner.","dev,rev"],
 ["Apprendre le soir, réciter le matin","Le sommeil fixe la mémoire, et la récitation du petit-déjeuner vérifie que c’est su.","app"],
 ["Travailler en binôme","Quand deux enfants ont les mêmes devoirs, ils s’interrogent l’un l’autre : expliquer est la meilleure façon d’apprendre.","rev,app"],
 ["Les évaluations se préparent sur 3 jours","Jour 1 : la fiche. Jour 2 : les exercices. Jour 3 : se faire interroger. Le matin même : 10 minutes de relecture, rien de nouveau.","rev"],
 ["Se tester plutôt que relire","Relire donne l’impression de savoir. Cacher le cours et essayer de le redire, ou refaire un exercice sans la correction, montre ce qui est vraiment su.","rev,app"],
 ["Revoir plusieurs fois, en petits morceaux","Trois fois 10 minutes sur trois jours valent mieux qu’une heure la veille : on oublie moins.","rev,app"],
 ["Expliquer à quelqu’un","Si tu sais l’expliquer simplement à un frère, une sœur ou un parent, c’est que tu as compris.","rev,app"],
 ["Avant de lire, faire un repérage","Titre, sommaire, quatrième de couverture, premières lignes de chaque chapitre : deux minutes pour savoir où l’on va.","lec"],
 ["Lire avec un crayon","Noter en marge un mot, une question, un personnage : à la fin, le résumé s’écrit presque tout seul.","lec"],
 ["Commencer par le plus difficile","Quand on est encore frais, on avance plus vite sur ce qui résiste. Le facile vient ensuite.","dev"],
 ["Les soirs de sport, zéro devoir après","Tout est fait avant de partir. Au retour : douche, collation, coucher.","general"],
 ["Écrans coupés avant le coucher","Téléphones rechargés hors de la chambre : l’endormissement est plus rapide.","general"],
 ["Le rituel du dimanche","15 minutes pour regarder EcoleDirecte, vérifier le planning de la semaine et préparer les sacs.","general"]
];
var PARENT_TIPS = [
 ["Ni trop facile, ni trop difficile","Un enfant prend plaisir à apprendre quand son effort aboutit. Une mission souvent notée « très difficile » ? Découpez-la en petites étapes. Tout est « facile » ? Proposez un défi un peu plus grand.","diff","Pourquoi les enfants n’aiment pas l’école !"],
 ["« C’est dur » veut dire « il apprend »","Une difficulté n’est pas un échec si l’enfant a les bases pour la surmonter. Votre rôle : doser l’effort, l’aider à corriger ses erreurs, et lui rappeler que c’est ainsi qu’on progresse.","diff","Mets-toi ça dans la tête !"],
 ["Proposer de se tester plutôt que relire","Si les révisions se limitent à relire le cours, proposez une méthode plus active : questions, feuille blanche, explication à voix haute. C’est plus exigeant, et bien plus efficace.","meth","Mets-toi ça dans la tête !"],
 ["Pas d’étiquette « visuel » ou « auditif »","La recherche ne confirme pas les styles d’apprentissage. Adaptez plutôt la façon de présenter au contenu : une carte pour la géographie, l’écoute pour une langue, un schéma pour les sciences.","meth","Pourquoi les enfants n’aiment pas l’école !"],
 ["Un débutant n’est pas un expert","Un enfant voit d’abord les détails d’un problème, pas sa structure. Montrez-lui des exemples résolus et demandez-lui de comprendre et d’expliquer, pas de travailler comme un spécialiste.","meth","Pourquoi les enfants n’aiment pas l’école !"],
 ["Observer ce qui aide vraiment","Accompagner les devoirs s’apprend aussi : essayez une façon de faire, regardez si elle aide votre enfant, puis ajustez. Un seul petit objectif à la fois.","meth","Pourquoi les enfants n’aiment pas l’école !"],
 ["Féliciter l’effort, pas le talent","Dites « tu as bien révisé » plutôt que « tu es doué ». Félicité pour son travail, l’enfant ose les défis ; félicité pour son intelligence, il évite ce qui pourrait le mettre en échec.","notes","Mets-toi ça dans la tête !"],
 ["Ouvrir par une question","Avant d’expliquer, demandez « à ton avis, pourquoi ? ». Une bonne question donne envie de chercher et prépare la mémoire à retenir la réponse.","general","Pourquoi les enfants n’aiment pas l’école !"],
 ["Encourager les lectures variées","Les connaissances générales aident à comprendre tout ce qu’on lit. Romans, documentaires, journaux, visites : tout enrichit la culture qui sert ensuite en classe.","general","Pourquoi les enfants n’aiment pas l’école !"],
 ["Le soir : « qu’as-tu appris ? »","Demander le soir ce que l’enfant a appris fait réviser sans en avoir l’air. Écoutez, posez une question, sans corriger tout de suite.","general","Mets-toi ça dans la tête !"],
 ["Le sommeil passe avant tout","Un enfant reposé apprend plus vite et retient plus longtemps. Mieux vaut un devoir inachevé qu’une nuit écourtée, et des écrans coupés avant le coucher.","general","Apprendre à apprendre"]
];
var PARENT_CTX=[["general","Vue parents"],["diff","Points difficiles"],["meth","Méthodes de travail"],["notes","Retours des professeurs"]];
var MOMENTS=[["general","Organisation"],["dev","Devoirs"],["rev","Révisions"],["app","Leçons"],["lec","Lecture"]];
var TIP_SRC=[["prof","Conseil d’un professeur"],["livre","D’après un livre"],["famille","Conseil de la famille"]];

/* ------------------------------------------------------------ état */
var S = {fam:null, plans:[], done:{}, extras:[], ideas:[], ideasMissing:false, stamps:[], sensei:[], stampsMissing:false, books:[], booksMissing:false, cancels:[], cancelsMissing:false, edtOpen:false, focus:null, ideaOpen:false, ideasPropMissing:false, installEvt:null, standalone:false, diff:{}, rate:null, diffMissing:false, meth:{}, methOpen:null, methMissing:false, notes:[], notesMissing:false, editNote:null, editStamp:null, editSensei:null, tips:[], tipsMissing:false, editTip:null, tipFilter:"tous", bookOpen:false, sync:null, mfa:null, view:null, day:null, msg:{}, bulk:{text:"",items:null}};
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function lsSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function iso(d){var z=new Date(d.getTime()-d.getTimezoneOffset()*60000);return z.toISOString().slice(0,10);}
var TODAY = iso(new Date());
function addDays(s,n){var d=new Date(s+"T12:00:00");d.setDate(d.getDate()+n);return iso(d);}
function dDiff(a,b){return Math.round((Date.parse(a+"T12:00:00")-Date.parse(b+"T12:00:00"))/86400000);}
function mins(t){var m=/(\d+)h(\d*)/.exec(t||"");return m?(+m[1])*60+(+(m[2]||0)):0;}
function fmtDate(s,opt){try{return new Date(s+"T12:00:00").toLocaleDateString("fr-FR",opt||{weekday:"short",day:"numeric",month:"short"});}catch(e){return s;}}

/* ------------------------------------------------------------ données */
function children(){return (S.fam&&S.fam.children)||[];}
function child(id){return children().filter(function(c){return c.id===id;})[0];}
function planOf(date){for(var i=0;i<S.plans.length;i++){var p=S.plans[i].data;if(p.days.some(function(d){return d.date===date;}))return S.plans[i];}return null;}
function curWeekIndex(){var p=planOf(TODAY);if(p)return S.plans.indexOf(p);for(var i=0;i<S.plans.length;i++){if(S.plans[i].data.days[0].date>TODAY)return i;}return S.plans.length-1;}
function weekIdx(){var p=planOf(S.day);return p?S.plans.indexOf(p):S.plans.length-1;}
function dayInfo(date){var p=planOf(date);if(!p)return null;return p.data.days.filter(function(d){return d.date===date;})[0];}
function ideaOk(x){return !x.status||x.status==="ok";}
function ideasFor(cid){return S.ideas.filter(function(x){return (x.child===cid||x.child==="tous")&&ideaOk(x);});}
function blocksOf(cid,date){var p=planOf(date);var ch=p&&p.data.children[cid];var bl=((ch&&ch.blocks&&ch.blocks[date])||[]).slice();
 ideasFor(cid).forEach(function(x){if(x.date===date)bl.push({t:x.time||"16h00",k:"loi",l:x.title,d:[x.detail,x.link].filter(Boolean).join(" · "),id:"idea|"+x.id});});
 return bl.sort(function(a,b){return mins(a.t)-mins(b.t);});}
function subs(a){return (a||[]).filter(function(x){return x&&String(x).trim();});}
function taskIds(cid,date){
 var ids=[];
 blocksOf(cid,date).forEach(function(b){
  if(b.k==="rel"&&b.rel){subs(b.rel.today).forEach(function(s){ids.push(b.rel.idp+"|t|"+s);});subs(b.rel.tomorrow).forEach(function(s){ids.push(b.rel.idp+"|d|"+s);});}
  else if(KINDS[b.k]&&KINDS[b.k][2]&&b.id)ids.push(b.id);
 });
 return ids;
}
function prog(cid,date){var ids=taskIds(cid,date);var n=ids.filter(function(i){return S.done[i];}).length;return {n:n,t:ids.length};}
function weekProg(cid,plan){var n=0,t=0;(plan?plan.data.days:[]).forEach(function(d){var p=prog(cid,d.date);n+=p.n;t+=p.t;});return {n:n,t:t};}
function pct(p){return p.t?Math.round(100*p.n/p.t):0;}
function dueFor(cid,date){
 var out=[];var p=planOf(date)||planOf(addDays(date,-1));
 if(p){var ch=p.data.children[cid]||{};
  ((ch.due||{})[date]||[]).forEach(function(x){out.push(x);});
  ((ch.due_ed||{})[date]||[]).forEach(function(x){if(out.indexOf(x)<0)out.push(x);});}
 S.extras.forEach(function(e){if((e.child===cid||e.child==="tous")&&e.due===date)out.push((e.subject?e.subject+" : ":"")+e.text+" (ajouté)");});
 return out;
}
function evalsFor(cid){
 var seen={},out=[];
 S.plans.forEach(function(p){var ch=p.data.children[cid]||{};(ch.evals||[]).concat(ch.evals_ed||[]).forEach(function(e){var k=e[0]+e[1];if(!seen[k]){seen[k]=1;out.push(e);}});});
 S.extras.forEach(function(e){if((e.child===cid||e.child==="tous")&&e.kind==="rev")out.push([e.due,(e.subject?e.subject+" : ":"")+e.text]);});
 var wk=planOf(S.day);
 return out.filter(function(e){var d=dDiff(e[0],S.day);var inWeek=wk&&wk.data.days.some(function(x){return x.date===e[0];});return inWeek||(d>=0&&d<=12);}).sort(function(a,b){return a[0]<b[0]?-1:1;});
}

/* ------------------------------------------------------------ persistance */
function setDone(id,val){
 if(val)S.done[id]=1;else delete S.done[id];
 if(!val)delete S.diff[id];
 if(val&&!S.focus){var bk=null;var cv0=child(curView());if(cv0)blocksOf(cv0.id,S.day).forEach(function(x){if(x.id===id)bk=x;});if(bk&&RATEABLE[bk.k])S.rate=id;}
 if(val){S.pop=id;try{if(navigator.vibrate)navigator.vibrate(15);}catch(e){}
  var vc=child(curView());if(vc&&!S.focus){var mp=mprog(vc.id,S.day),left=mp.t-mp.n;
   if(mp.t&&left===0)cheer("Journée bouclée ! Tout est fait pour "+(S.day===TODAY?"aujourd’hui":"ce jour-là")+".");
   else if(mp.n&&mp.n%3===0)cheer("Bien joué ! Encore "+left+" mission"+(left>1?"s":"")+".");}}
 render();S.pop=null;
 if(DEMO){lsSet("planning-demo-done",JSON.stringify(S.done));lsSet("planning-demo-diff",JSON.stringify(S.diff));return;}
 if(S.offline||!sb||!navigator.onLine){queuePush(id,val);if(!S.offline)S.offline=new Date().toISOString();render();return;}
 var q=val?sb.from("checks").upsert({id:id,done:true,updated_at:new Date().toISOString()}):sb.from("checks").delete().eq("id",id);
 q.then(function(r){if(r.error){if(netErr(r.error.message)){queuePush(id,val);flash("global","Pas de réseau : la coche est gardée et partira au retour du réseau.");}else flash("global","Coche non enregistrée : "+r.error.message,true);}else saveSnap();});
}
function cheer(t){S.msg.global={t:t,e:false,cheer:true};clearTimeout(S.cheerT);S.cheerT=setTimeout(function(){if(S.msg.global&&S.msg.global.cheer){delete S.msg.global;softRender();}},3500);}
function flash(k,text,err){S.msg[k]={t:text,e:!!err};render();setTimeout(function(){delete S.msg[k];softRender();},6000);}

function loadAll(){
 if(DEMO){
  return fetch("demo.json").then(function(r){return r.json();}).then(function(d){
   S.fam=d.settings.famille;S.plans=d.plans.sort(function(a,b){return a.week_start<b.week_start?-1:1;});
   try{S.done=JSON.parse(lsGet("planning-demo-done")||"{}");}catch(e){S.done={};}try{S.diff=JSON.parse(lsGet("planning-demo-diff")||"{}");}catch(e){S.diff={};}try{S.meth=JSON.parse(lsGet("planning-demo-meth")||"{}");}catch(e){S.meth={};}
   S.sync=d.sync;S.ideas=d.ideas||[];S.stamps=d.stamps||[];S.sensei=d.sensei||[];S.books=d.books||[];S.cancels=d.cancellations||[];S.notes=d.teacher_notes||[];S.tips=d.tips||[];S.reading=d.reading||[];demoExtras();start();
  });
 }
 return Promise.all([
  sb.from("settings").select("*"),
  sb.from("plans").select("*").order("week_start"),
  selectChecks(),
  sb.from("extras").select("*").order("due"),
  sb.from("sync_log").select("*").order("ran_at",{ascending:false}).limit(1),
  sb.from("ideas").select("*").order("created_at"),
  sb.from("stamps").select("*").order("created_at"),
  sb.from("sensei_messages").select("*").order("created_at"),
  sb.from("books").select("*").order("finished",{ascending:false}),
  sb.from("cancellations").select("*").gte("date",addDays(TODAY,-14)),
  sb.from("teacher_notes").select("*").order("date",{ascending:false}),
  sb.from("tips").select("*").order("created_at",{ascending:false}),
  sb.from("reading").select("*").order("created_at",{ascending:false})
 ]).then(function(r){
  S.readingMissing=!!r[12].error;S.reading=r[12].error?[]:(r[12].data||[]);
  S.tipsMissing=!!r[11].error;S.tips=r[11].error?[]:(r[11].data||[]);
  S.notesMissing=!!r[10].error;S.notes=r[10].error?[]:(r[10].data||[]);
  S.cancelsMissing=!!r[9].error;S.cancels=r[9].error?[]:(r[9].data||[]);
  S.booksMissing=!!r[8].error;S.books=r[8].error?[]:(r[8].data||[]);
  S.ideasMissing=!!r[5].error;S.ideas=r[5].error?[]:(r[5].data||[]);
  S.stampsMissing=!!(r[6].error||r[7].error);S.stamps=r[6].error?[]:(r[6].data||[]);S.sensei=r[7].error?[]:(r[7].data||[]);
  var err=r.slice(0,5).filter(function(x){return x.error;})[0];
  if(err){if(netErr(err.error.message)&&goOffline())return;renderError("Lecture impossible : "+err.error.message);return;}
  var set={};r[0].data.forEach(function(x){set[x.key]=x.value;});
  S.fam=set.famille||null;S.lock=set.parent_lock||null;S.plans=r[1].data||[];
  readChecks(r[2].data);
  S.extras=r[3].data||[];S.sync=r[4].data[0]||null;
  S.offline=null;
  flushQueue().then(function(n){if(n>0)refreshChecks();});
  start();saveSnap();
 });
}
function subscribe(){
 if(DEMO||S.offline||!sb||S.subscribed)return;S.subscribed=true;
 try{
  sb.channel("checks").on("postgres_changes",{event:"*",schema:"public",table:"checks"},function(p){
   if(p.eventType==="DELETE"){delete S.done[p.old.id];delete S.diff[p.old.id];delete S.meth[p.old.id];}else if(p.new&&p.new.id){S.done[p.new.id]=1;if(p.new.difficulty)S.diff[p.new.id]=p.new.difficulty;if(p.new.method||p.new.minutes)S.meth[p.new.id]={m:(p.new.method||"").split(",").filter(Boolean),min:p.new.minutes||null};}
   softRender();
  }).subscribe();
 }catch(e){}
 document.addEventListener("visibilitychange",function(){if(!document.hidden)refreshChecks();});
 setInterval(refreshChecks,60000);
}
function selectChecks(){
 return sb.from("checks").select("id,difficulty,method,minutes").then(function(r){if(!r.error){S.methMissing=false;S.diffMissing=false;return r;}S.methMissing=true;
  return sb.from("checks").select("id,difficulty").then(function(r2){if(!r2.error){S.diffMissing=false;return r2;}S.diffMissing=true;return sb.from("checks").select("id");});});}
function readChecks(rows){S.done={};S.diff={};S.meth={};(rows||[]).forEach(function(x){S.done[x.id]=1;if(x.difficulty)S.diff[x.id]=x.difficulty;if(x.method||x.minutes)S.meth[x.id]={m:(x.method||"").split(",").filter(Boolean),min:x.minutes||null};});}
function refreshChecks(){if(S.offline||!sb)return;selectChecks().then(function(r){if(!r.error){readChecks(r.data);queueGet().forEach(function(q){if(q.v)S.done[q.id]=1;else delete S.done[q.id];});softRender();saveSnap();}});}
function softRender(){var a=document.activeElement;if(a&&root.contains(a)&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)&&!a.classList.contains("chk"))return;render();}

/* ------------------------------------------------------------ sauvegarde (0.17) */
var BK_TABLES=["checks","extras","ideas","stamps","sensei_messages","books","cancellations","teacher_notes","tips","reading"];
function doBackup(){
 var fin=function(d){var blob=new Blob([JSON.stringify(d,null,1)],{type:"application/json"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="kizuna-sauvegarde-"+TODAY+".json";document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},1000);
  var n=0;Object.keys(d.tables).forEach(function(k){n+=d.tables[k].length;});flash("backup","Sauvegarde téléchargée : "+d.plans.length+" semaines et "+n+" lignes de données.");};
 if(DEMO||S.offline){var ck={};Object.keys(S.done).forEach(function(k){ck[k]=1;});fin({format:"kizuna-sauvegarde",version:1,at:new Date().toISOString(),settings:{famille:S.fam},plans:S.plans,checks:ck,tables:{extras:S.extras,ideas:S.ideas,stamps:S.stamps,books:S.books,teacher_notes:S.notes,tips:S.tips,reading:S.reading||[]}});return;}
 flash("backup","Préparation de la sauvegarde…");
 Promise.all([sb.from("settings").select("*"),sb.from("plans").select("*")].concat(BK_TABLES.map(function(t){return sb.from(t).select("*");}))).then(function(r){
  if(r[0].error||r[1].error){flash("backup","Erreur : "+(r[0].error||r[1].error).message,true);return;}
  var set={};r[0].data.forEach(function(x){set[x.key]=x.value;});var tb={},ck={};
  BK_TABLES.forEach(function(t,i){var x=r[i+2];tb[t]=x.error?[]:(x.data||[]);});
  tb.checks.forEach(function(x){ck[x.id]=1;});
  fin({format:"kizuna-sauvegarde",version:1,at:new Date().toISOString(),settings:set,plans:r[1].data,checks:ck,tables:tb});
 }).catch(function(e){flash("backup","Erreur : "+e.message,true);});}

/* ------------------------------------------------------------ hors ligne (0.17) */
var SNAP="kizuna-snap",QUEUE="kizuna-queue";
function saveSnap(){if(DEMO||S.offline)return;try{var ck=Object.keys(S.done).map(function(id){var r={id:id};if(S.diff[id])r.difficulty=S.diff[id];if(S.meth[id]){r.method=S.meth[id].m.join(",");r.minutes=S.meth[id].min;}return r;});
 localStorage.setItem(SNAP,JSON.stringify({at:new Date().toISOString(),fam:S.fam,lock:S.lock,plans:S.plans,checks:ck,extras:S.extras,sync:S.sync,ideas:S.ideas,stamps:S.stamps,sensei:S.sensei,books:S.books,cancels:S.cancels,notes:S.notes,tips:S.tips,reading:S.reading}));}catch(e){}}
function loadSnap(){var d=null;try{d=JSON.parse(localStorage.getItem(SNAP)||"null");}catch(e){}if(!d||!d.plans)return false;
 S.fam=d.fam;S.lock=d.lock||null;S.plans=d.plans;readChecks(d.checks);S.extras=d.extras||[];S.sync=d.sync||null;S.ideas=d.ideas||[];S.stamps=d.stamps||[];S.sensei=d.sensei||[];S.books=d.books||[];S.cancels=d.cancels||[];S.notes=d.notes||[];S.tips=d.tips||[];S.reading=d.reading||[];
 queueGet().forEach(function(q){if(q.v)S.done[q.id]=1;else delete S.done[q.id];});
 S.offline=d.at;return true;}
function goOffline(){if(!loadSnap())return false;start();return true;}
function queueGet(){try{return JSON.parse(localStorage.getItem(QUEUE)||"[]");}catch(e){return [];}}
function queuePush(id,v){var q=queueGet().filter(function(x){return x.id!==id;});q.push({id:id,v:v?1:0});try{localStorage.setItem(QUEUE,JSON.stringify(q));}catch(e){}}
function flushQueue(){var q=queueGet();if(!q.length||!sb)return Promise.resolve(0);
 return q.reduce(function(pr,x){return pr.then(function(){return (x.v?sb.from("checks").upsert({id:x.id,done:true,updated_at:new Date().toISOString()}):sb.from("checks").delete().eq("id",x.id)).then(function(r){if(r.error)throw r.error;});});},Promise.resolve())
  .then(function(){try{localStorage.removeItem(QUEUE);}catch(e){}return q.length;}).catch(function(){return -1;});}
function netErr(m){return !navigator.onLine||/fetch|network|load failed|réseau/i.test(String(m||""));}
function offBar(){if(!S.offline)return "";var q=queueGet().length;var d=new Date(S.offline);
 return '<p class="offbar" role="status"><b>Hors ligne.</b> Données du '+esc(d.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"}))+' à '+d.getHours()+'h'+("0"+d.getMinutes()).slice(-2)+'. Les coches sont gardées sur cet appareil'+(q?' ('+q+' en attente)':'')+' et partiront au retour du réseau. Les autres changements attendront.</p>';}
window.addEventListener("online",function(){if(DEMO||!sb)return;flushQueue().then(function(){if(S.offline){S.offline=null;loadAll();}});});

/* ------------------------------------------------------------ navigation */
function defaultDay(){
 if(planOf(TODAY))return TODAY;
 if(!S.plans.length)return TODAY;
 var last=S.plans[S.plans.length-1].data.days;var first=S.plans[0].data.days;
 return TODAY<first[0].date?first[0].date:last[last.length-1].date;
}
function curView(){var h=(location.hash||"").replace("#","").split("/")[0];var ok=children().map(function(c){return c.id;}).concat(["parents","conseils","parametres","accueil"]);return ok.indexOf(h)>=0?h:"accueil";}
function start(){
 var saved=null,on=null;try{saved=sessionStorage.getItem("planning-day");on=sessionStorage.getItem("planning-day-on");}catch(e){}
 S.day=(saved&&on===TODAY&&planOf(saved))?saved:defaultDay();
 render();subscribe();
}
function saveDay(d){try{sessionStorage.setItem("planning-day",d);sessionStorage.setItem("planning-day-on",TODAY);}catch(e){}}
function setDay(d){S.day=d;saveDay(d);render();}
function newDay(){var n=iso(new Date());if(n===TODAY)return false;var a=document.activeElement;if(a&&/INPUT|TEXTAREA|SELECT/.test(a.tagName))return false;try{sessionStorage.removeItem("planning-day");}catch(e){}location.reload();return true;}
document.addEventListener("visibilitychange",function(){if(!document.hidden)newDay();});
setInterval(newDay,60000);

/* ------------------------------------------------------------ rendu (Académie Kizuna) */
var THEMES={
 "Lagon":{bg:"#0E5E6F",acc:"#FF6B4A",txt:"#FFFFFF"},
 "Sakura":{bg:"#C2366C",acc:"#FFD166",txt:"#FFFFFF"},
 "Améthyste":{bg:"#5B3FA8",acc:"#FF8FB1",txt:"#FFFFFF"},
 "Graphite":{bg:"#3A4250",acc:"#FF6B4A",txt:"#FFFFFF"},
 "Jade":{bg:"#14806D",acc:"#9FF5E1",txt:"#FFFFFF"},
 "Ombre":{bg:"#16181D",acc:"#E9C46A",txt:"#FFFFFF"},
 "Brasier":{bg:"#C62E3A",acc:"#FFC93C",txt:"#FFFFFF"},
 "Émeraude":{bg:"#1E7A4E",acc:"#F2C94C",txt:"#FFFFFF"},
 "Éclair":{bg:"#F2B705",acc:"#16181D",txt:"#2B2100"}
};
var DIFF=[null,["Très facile","#2E9E6B","#fff"],["Facile","#6FA83A","#fff"],["Moyen","#F2B705","#2B2100"],["Difficile","#E8792A","#fff"],["Très difficile","#D63A3A","#fff"]];
var RATEABLE={dev:1,app:1,rev:1,lec:1};
function diffBadge(n,big){var d=DIFF[n];if(!d)return "";return '<span class="dbadge'+(big?" big":"")+'" style="background:'+d[1]+';color:'+d[2]+'" title="Difficulté : '+n+'/5 ('+d[0]+')" aria-label="Difficulté '+n+' sur 5">'+n+'</span>';}
function rateRow(id,label){return '<div class="raterow" role="group" aria-label="Difficulté"><span class="rr-q">'+(label||"C’était comment ?")+'</span><div class="rr-btns">'+[1,2,3,4,5].map(function(n){var d=DIFF[n];return '<button class="rr" data-rate="'+esc(id)+'" data-n="'+n+'" style="--dc:'+d[1]+';--dt:'+d[2]+'" aria-pressed="'+(S.diff[id]===n)+'"><b>'+n+'</b><small>'+d[0]+'</small></button>';}).join("")+'</div><button class="linkbtn rr-skip" data-rate="'+esc(id)+'" data-n="0">Passer</button></div>';}
function setDiff(id,n){
 if(n)S.diff[id]=n;else delete S.diff[id];
 if(DEMO){lsSet("planning-demo-diff",JSON.stringify(S.diff));return;}
 sb.from("checks").upsert({id:id,done:true,difficulty:n||null,updated_at:new Date().toISOString()}).then(function(r){if(r.error){S.diffMissing=true;S.diffMissing=true;render();}});
}
function lumHex(h){h=h.replace("#","");var c=[0,2,4].map(function(i){var v=parseInt(h.substr(i,2),16)/255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);});return .2126*c[0]+.7152*c[1]+.0722*c[2];}
function shieldFg(t){return lumHex(t.acc)<.25?"#FFE58A":"#082A31";}
var DEFAULT_THEMES=["Lagon","Sakura","Améthyste","Émeraude","Brasier","Éclair"];
function themeName(c){if(!c)return (S.fam&&S.fam.parents_theme)||"Graphite";var i=children().indexOf(c);return (c.theme&&THEMES[c.theme])?c.theme:DEFAULT_THEMES[i%DEFAULT_THEMES.length];}
function theme(c){return THEMES[themeName(c)];}
var SH="clip-path:polygon(50% 0,100% 14%,100% 58%,50% 100%,0 58%,0 14%)";
function logo(size){size=size||44;return '<span class="logo" style="width:'+size+'px;height:'+size+'px;border-width:'+Math.max(2,Math.round(size/14))+'px"><span style="font-size:'+Math.round(size*.5)+'px">絆</span></span>';}
function stampHtml(size,kj){size=size||52;return '<span class="stamp" style="width:'+size+'px;height:'+size+'px"><span style="font-size:'+Math.round(size*.48)+'px">'+(kj||"絆")+'</span></span>';}
var PICTO_OF={dev:"Devoir",rev:"Réviser",lec:"Lecture",app:"Apprendre",rel:"Relire",org:"Sac",cor:"Corvée",ran:"Rangement",repas:"Repas",dodo:"Coucher",loi:"Loisir"};
function pictoName(b){
 if(b.k==="act")return /taekwondo|hand|match|vtt|foot|judo|basket|sport|natation|danse|piscine/i.test(b.l)?"Sport":"Loisir";
 if(b.k==="rep")return /go[uû]ter|collation/i.test(b.l)?"Repas":null;
 return PICTO_OF[b.k]||null;}
function picto(name,size){if(!name||!PICTOS[name])return '<span class="pic none" style="width:'+size+'px"></span>';return '<span class="pic" style="width:'+size+'px;height:'+size+'px"><svg width="'+Math.round(size*.68)+'" height="'+Math.round(size*.68)+'" viewBox="0 0 48 48" aria-hidden="true">'+PICTOS[name]+'</svg></span>';}
function rankOf(b,date){
 if(b.k==="rev")return (/aujourd/i.test(b.d||"")||/relire la fiche/i.test(b.l))?"S":"A";
 if(b.k==="dev")return "B";
 if(b.k==="lec"||b.k==="app"||b.k==="rel")return "C";
 if(b.k==="cor"||b.k==="ran"||b.k==="org")return "D";
 return null;}
function rankHtml(r){return r?'<span class="rank r'+r+'" aria-label="Rang '+r+'">'+r+'</span>':"";}

/* --- progression : niveau, série, badges --- */
function allDoneByKind(cid){
 var out={tot:0,lec:0,rev:0,maison:0};
 S.plans.forEach(function(p){var ch=p.data.children[cid];if(!ch||!ch.blocks)return;
  Object.keys(ch.blocks).forEach(function(d){ch.blocks[d].forEach(function(b){
   if(b.id&&S.done[b.id]&&KINDS[b.k]&&KINDS[b.k][2]){out.tot++;if(b.k==="lec")out.lec++;if(b.k==="rev")out.rev++;if(b.k==="cor"||b.k==="ran")out.maison++;}
   if(b.k==="rel"&&b.rel){(b.rel.today||[]).concat(b.rel.tomorrow||[]).forEach(function(){});}
  });});});
 return out;}
function streak(cid){
 var n=0,d=TODAY,first=true;
 for(var i=0;i<60;i++){
  var p=prog(cid,d);
  if(p.t===0){d=addDays(d,-1);continue;}
  if(pct(p)>=80)n++;else if(!first)break;
  first=false;d=addDays(d,-1);
  if(!planOf(d))break;}
 return n;}
function stampsFor(cid){return S.stamps.filter(function(x){return x.child===cid;}).sort(function(a,b){return a.created_at<b.created_at?1:-1;});}
function card(cid){
 var k=allDoneByKind(cid),st=streak(cid),badges=[];
 if(st>=2)badges.push(st+" jours de suite");
 if(k.lec>=15||booksFor(cid).length>=3)badges.push("Lecteur");
 var pg=pagesOf(booksFor(cid));if(pg>=1000)badges.push(fmtN(Math.floor(pg/1000)*1000)+" pages lues");
 if(k.rev>=10)badges.push("Stratège");
 if(k.maison>=15)badges.push("Pilier de la maison");
 if(stampsFor(cid).length)badges.push("Tamponné");
 return {level:1+Math.floor(k.tot/40),next:40-(k.tot%40),badges:badges,streak:st};}
/* --- 0.22 : grades de l'Académie (préversion) --- */
var GRADES=[["Recrue",0],["Apprenti",3],["Aspirant",7],["Confirmé",12],["Élite",18],["Maître",25]];
var TENUE=80;
var VAC_TIPS=[["Vacances : garde le rythme","Vingt minutes par jour suffisent : relire une leçon, refaire quelques exercices, lire. À la rentrée, tout sera encore frais."],["Un peu chaque jour","Choisis un moment fixe, le matin par exemple, pour ton petit travail de vacances. Ensuite, la journée est libre."],["Lire en vacances","Un livre qui te fait envie, quelques pages chaque jour : c’est l’entraînement le plus agréable."],["Préparer la rentrée","Le dernier week-end, vérifie ton sac, ton agenda et ce qu’il y a à rendre."]];
function schoolStart(){var d=new Date(TODAY+"T12:00:00");var y=d.getMonth()>=8?d.getFullYear():d.getFullYear()-1;return y+"-09-01";}
function schoolYearLabel(){var y=+schoolStart().slice(0,4);return y+"-"+(y+1);}
function classOf(c){var m=/·\s*([^·]+)$/.exec((c&&c.meta)||"");return m?m[1].trim():"";}
function weeksHeld(cid){var st=schoolStart(),n=0;S.plans.forEach(function(p){var ds=p.data.days;if(!ds||!ds.length)return;if(ds[0].date<st||ds[ds.length-1].date>=TODAY)return;var w=weekProg(cid,p);if(w.t&&pct(w)>=TENUE)n++;});return n;}
function gradeBonus(c){return Math.max(0,+(c&&c.grade_bonus)||0);}
function gradeOf(cid){var c=child(cid),held=weeksHeld(cid),bonus=gradeBonus(c),tot=held+bonus,i=0;GRADES.forEach(function(g,j){if(tot>=g[1])i=j;});var nx=GRADES[i+1]||null;var cw=planOf(TODAY);var wp=cw?weekProg(cid,cw):{n:0,t:0};
 return {i:i,name:GRADES[i][0],held:held,bonus:bonus,tot:tot,next:nx,left:nx?nx[1]-tot:0,week:wp,weekPct:pct(wp),cls:classOf(c)};}
function insignia(i,t,cls){var fg=shieldFg(t),h='';
 if(i>=GRADES.length-1)h='<path d="M24 8l4.8 9.8 10.8 1.6-7.8 7.6 1.8 10.7L24 32.6l-9.6 5.1 1.8-10.7-7.8-7.6 10.8-1.6Z" fill="'+fg+'"/>';
 else{var n=i+1,gap=7,top=24-((n-1)*gap+7)/2;for(var k=0;k<n;k++){var y=top+k*gap;h+='<path d="M13 '+y+'L24 '+(y+7)+'L35 '+y+'" fill="none" stroke="'+fg+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>';}}
 return '<span class="shield ins'+(cls?" "+cls:"")+'" style="background:'+t.acc+'" role="img" aria-label="Grade : '+GRADES[Math.min(i,GRADES.length-1)][0]+'"><svg viewBox="0 0 48 48" aria-hidden="true">'+h+'</svg></span>';}
function mentorMsgs(cid){return S.sensei.filter(function(x){return x.child===cid||x.child==="tous";}).sort(function(a,b){return a.created_at<b.created_at?1:-1;});}
function mentorFor(cid){var lim=addDays(TODAY,-3);var m=mentorMsgs(cid).filter(function(x){return (x.created_at||"").slice(0,10)>=lim;});return m.filter(function(x){return x.child===cid;})[0]||m[0]||null;}
function mentorCard(m,mob){var mine=m.child!=="tous";var d=esc(fmtDate(m.created_at.slice(0,10),{weekday:"long",day:"numeric",month:"long"}));
 return '<section class="'+(mob?"m-mentor":"card side-card mentor")+'"><span class="mt-kick">'+(mine?"Pour toi":"Pour toute la promotion")+'</span><h2>Message de ton mentor</h2><p class="sensei-msg">'+esc(m.text)+'</p><small>Ton mentor · '+d+'</small></section>';}
function isVacWeek(cid){var p=planOf(TODAY);if(!p)return false;var sc=((p.data.children[cid]||{}).school)||{};return p.data.days.slice(0,5).every(function(d){return !sc[d.date];});}
function tipOfDay(c){var dn=Math.floor(new Date(TODAY+"T12:00:00").getTime()/86400000);
 if(isVacWeek(c.id)){var v=VAC_TIPS[dn%VAC_TIPS.length];return {title:v[0],body:v[1],lab:"Conseil du jour · vacances"};}
 var l=allTips(c.id);if(!l.length)return null;var wk=allTips(null),tw=wk.length?wk[weekNum()%wk.length]:null;var t=l[(dn*7+3)%l.length];if(tw&&t.id===tw.id)t=l[(dn*7+4)%l.length];
 return {title:t.title,body:t.body,lab:"Conseil du jour",src:tipSrcLabel(t)};}
function tipDayCard(t,mob){return '<section class="'+(mob?"m-tip":"card side-card tipday")+'"><span class="mt-kick">'+esc(t.lab)+'</span><h2>'+esc(t.title)+'</h2><p>'+esc(t.body)+'</p>'+(t.src?'<small>'+esc(t.src)+'</small>':'')+'</section>';}
function demoExtras(){
 var b={leo:8,ines:3,sarah:13};(S.fam.children||[]).forEach(function(c){if(c.grade_bonus==null&&b[c.id]!=null)c.grade_bonus=b[c.id];});
 S.sensei.push({id:"m2",child:"leo",text:"Ta fiche de physique est propre. Ce soir, fais-toi interroger : dix questions, pas une de moins.",created_at:addDays(TODAY,-1)+"T18:00:00"});}
function renderDossier(c,plan){
 var t=theme(c),g=gradeOf(c.id),st=stampsFor(c.id);
 var h='<div class="narrow">'+hero(c,plan||planOf(TODAY)||S.plans[S.plans.length-1]);
 var grey={acc:"#E4ECEB"};
 h+=side("Mon parcours de l’année",'<ol class="ladder">'+GRADES.map(function(gr,j){var s2=j<g.i?"done":j===g.i?"now":"next";
   return '<li class="lg '+s2+'">'+insignia(j,j<=g.i?t:grey,"sm")+'<span class="lg-t"><b>'+gr[0]+'</b><small>'+(j===0?"au départ":gr[1]+" semaines tenues")+'</small></span>'+(s2==="now"?'<em class="lg-now">Ton grade</em>':s2==="done"?'<em class="lg-ok">Atteint</em>':'')+'</li>';}).join("")+'</ol>'
  +'<p class="det">Semaines tenues depuis la rentrée : <b>'+g.held+'</b>'+(g.bonus?' · semaines accordées par ton mentor : <b>'+g.bonus+'</b> · total : <b>'+g.tot+'</b>':'')+'.</p>');
 var gl=activeGoals(c.id);
 if(gl.length)h+=side("Mes objectifs",gl.map(function(n){return goalHtml(n);}).join(""));
 var kn=notesFor(c.id,true);
 h+=side("Ce que pensent mes professeurs",kn.length?kn.map(kidNoteHtml).join(""):'<p class="none">Quand tes professeurs donnent des nouvelles, tes parents peuvent les partager ici.</p>');
 var mm=mentorMsgs(c.id).slice(0,5);
 h+=side("Messages de mon mentor",mm.length?'<ul class="mlist">'+mm.map(function(m){return '<li><span class="mt-kick">'+(m.child!=="tous"?"Pour toi":"Pour toute la promotion")+' · '+esc(fmtDate(m.created_at.slice(0,10)))+'</span><p>'+esc(m.text)+'</p></li>';}).join("")+'</ul>':'<p class="none">Les messages de ton mentor seront gardés ici.</p>');
 h+=side("Mes sceaux",st.length?st.map(function(x){return '<div class="stamp-row">'+stampHtml(46,"努")+'<span><b>'+esc((x.title||"")+(x.note?" · "+x.note:""))+'</b>'+(x.message?'<small>« '+esc(x.message)+' »</small>':'')+'<small>Sceau de l’effort · '+esc(fmtDate(x.date||x.created_at.slice(0,10)))+'</small></span></div>';}).join(""):'<p class="none">Le sceau est rare : ton mentor le remet à la main pour un vrai effort.</p>');
 h+=side("Mes promotions",'<div class="promo now">'+insignia(g.i,t,"sm")+'<span><b>Promotion '+esc(g.cls||"")+' · '+schoolYearLabel()+'</b><small>En cours · '+esc(g.name)+' pour l’instant</small></span></div><p class="det">Au dernier bilan de juin, ton mentor te remet l’insigne de ta promotion, avec le grade atteint. Il reste ici les années suivantes ; en septembre, tu repars Recrue de ta nouvelle classe.</p>');
 h+=side("Comment monter en grade",'<ul class="dots"><li>Une semaine est <b>tenue</b> quand au moins 80 % de tes missions sont faites.</li><li>Recrue au départ, puis Apprenti (3 semaines tenues), Aspirant (7), Confirmé (12), Élite (18) et Maître (25).</li><li>Tu ne perds jamais un grade, même après une semaine difficile.</li><li>Ton mentor peut te faire monter d’un grade pour un effort exceptionnel.</li><li>Le sceau de l’effort (努) est rare : ton mentor le remet à la main.</li></ul>');
 return h+'</div>';
}
function booksFor(cid){return S.books.filter(function(x){return x.child===cid;}).sort(function(a,b){return (a.finished||"")<(b.finished||"")?1:-1;});}
function pagesOf(list){return list.reduce(function(n,b){return n+(+b.pages||0);},0);}
function fmtN(n){return n.toLocaleString("fr-FR");}
function bookForm(cid){
 return '<form class="f bookf" id="bookf" data-child="'+esc(cid)+'"><label for="b-title">Titre<input id="b-title" type="text" required placeholder="ex. Le Petit Prince"></label><label for="b-author">Auteur (facultatif)<input id="b-author" type="text"></label><div class="cols two"><label for="b-pages">Pages<input id="b-pages" type="number" min="1" max="5000" inputmode="numeric" placeholder="96"></label><label for="b-date">Fini le<input id="b-date" type="date" value="'+TODAY+'"></label></div><div class="btnrow"><button class="btn" type="submit">Ajouter à ma bibliothèque</button><button class="btn sec" type="button" data-act="book-close">Annuler</button></div>'+msgHtml("book")+(S.booksMissing?'<p class="msg err">Exécutez le bloc SQL « livres » dans Supabase.</p>':'')+'</form>';}
function sameClass(a,b){if(a===b||a==="tous"||b==="tous")return true;var ca=child(a),cb=child(b);return !!((ca&&ca.ed_same_as===b)||(cb&&cb.ed_same_as===a)||(ca&&cb&&ca.ed_same_as&&ca.ed_same_as===cb.ed_same_as));}
function manualCancel(cid,date,l){return S.cancels.filter(function(x){return x.date===date&&x.subject===l.m&&(!x.start||x.start===l.s)&&sameClass(x.child,cid);})[0]||null;}
function lessonsOf(cid,date){var p=planOf(date);var ch=p&&p.data.children[cid];var ls=((ch&&ch.lessons&&ch.lessons[date])||[]).map(function(l){var o={};for(var k in l)o[k]=l[k];var mc=manualCancel(cid,date,l);if(mc){o.mc=mc;if(!o.x||/sur le site/.test(o.x))o.x="Annulé sur le site"+(mc.reason?" : "+mc.reason:"");}else if(o.x&&/sur le site/.test(o.x)){delete o.x;}return o;});return ls;}
function renderEdt(c,date){
 var ls=lessonsOf(c.id,date);if(!ls.length)return "";
 var nx=ls.filter(function(l){return l.x;}).length;
 var h='<details class="edt"'+(S.edtOpen?" open":"")+'><summary>Emploi du temps · '+ls.length+' cours'+(nx?' · <b class="cx">'+nx+' annulé'+(nx>1?"s":"")+'</b>':'')+'</summary><ul>';
 ls.forEach(function(l,i){h+='<li class="'+(l.x?"cancelled":"")+'"><span class="et">'+esc(l.s)+(l.e?' – '+esc(l.e):'')+'</span><span class="em"><b>'+esc(l.m)+'</b>'+(l.r?' · salle '+esc(l.r):'')+(l.x?'<small>'+esc(l.x)+'</small>':'')+'</span>'+(l.mc?'<button class="btn sec mini" data-uncancel="'+esc(l.mc.id)+'">Rétablir</button>':l.x?'':'<button class="btn sec mini" data-cancel="'+i+'" data-date="'+esc(date)+'" data-child="'+esc(c.id)+'" aria-label="Annuler le cours de '+esc(l.m)+' à '+esc(l.s)+'">Prof absent</button>')+'</li>';});
 h+='</ul><p class="det">« Prof absent » retire le cours du planning à la prochaine synchronisation (pour '+(children().filter(function(k){return k.id!==c.id&&sameClass(k.id,c.id);}).map(function(k){return esc(k.name);}).concat([esc(c.name)]).join(" et "))+').'+(S.cancelsMissing?' <b>Exécutez le bloc SQL « annulations » dans Supabase.</b>':'')+'</p></details>';
 return h;}
function senseiFor(cid){var m=S.sensei.filter(function(x){return x.child===cid||x.child==="tous";}).sort(function(a,b){return a.created_at<b.created_at?1:-1;});return m[0]||null;}

/* --- écrans --- */
function renderError(t){root.innerHTML='<div class="login"><div class="card"><h2>Problème</h2><p>'+esc(t)+'</p></div></div>';}
function renderLogin(err){
 root.innerHTML='<div class="login"><form class="card f login-card" id="login">'+logo(84)+'<div class="brand-big"><span>ACADÉMIE</span><b>KIZUNA</b></div><p class="tagline">Devoirs, missions et organisation</p><label for="pw">Mot de passe familial<input id="pw" type="password" autocomplete="current-password" required></label><button class="btn" type="submit">Entrer à l’Académie</button>'+(err?'<p class="msg err">'+esc(err)+'</p>':'')+'</form></div>';
 document.getElementById("login").addEventListener("submit",function(e){
  e.preventDefault();
  sb.auth.signInWithPassword({email:CFG.FAMILY_EMAIL,password:document.getElementById("pw").value}).then(function(r){
   if(!r.error){loadAll();return;}
   var m=String(r.error.message||"");
   if(/invalid login credentials/i.test(m))renderLogin("Mot de passe incorrect.");
   else renderLogin("Connexion impossible : "+m);
  });
 });
}
function syncLine(){
 var s=S.sync;if(!s)return '<span class="status"><i></i>Pas encore de synchronisation</span>';
 var when=s.ran_at?new Date(s.ran_at).toLocaleString("fr-FR",{weekday:"short",hour:"2-digit",minute:"2-digit"}):"";
 var cls=s.status==="ok"?"ok":"bad";
 var txt=s.status==="ok"?"EcoleDirecte à jour · "+when:s.status==="mfa"?"EcoleDirecte attend une réponse":"Synchro en échec · "+when;
 return '<span class="status '+cls+'"><i></i>'+esc(txt)+(DEMO?' · <b>démo</b>':'')+(!DEMO?' · <button class="linkbtn" data-act="logout">Se déconnecter</button>':'')+'</span>';
}
function curSection(){var h=(location.hash||"").replace("#","").split("/");if(h[1]==="tampons"||h[1]==="dossier")return "parcours";return ["semaine","edt","livres","parcours"].indexOf(h[1])>=0?h[1]:"jour";}
var LOCK_SVG='<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 10V7a5 5 0 0 1 10 0v3h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1zm2 0h6V7a3 3 0 0 0-6 0v3z"/></svg>';
function ssGet(k){try{return sessionStorage.getItem(k);}catch(e){return null;}}
function ssSet(k,v){try{if(v==null)sessionStorage.removeItem(k);else sessionStorage.setItem(k,v);}catch(e){}}
function lsDel(k){try{localStorage.removeItem(k);}catch(e){}}
function hex(b){return [].map.call(new Uint8Array(b),function(x){return ("0"+x.toString(16)).slice(-2);}).join("");}
function sha(t){if(!(window.crypto&&crypto.subtle))return Promise.reject(new Error("Ce navigateur ne permet pas d’utiliser le code parent."));return crypto.subtle.digest("SHA-256",new TextEncoder().encode(t)).then(hex);}
function newSalt(){var a=new Uint8Array(12);crypto.getRandomValues(a);return hex(a.buffer);}
function lockOn(){return !!(S.lock&&S.lock.h);}
function unlocked(){if(!lockOn())return true;return ssGet("kizuna-unlock")===S.lock.h||lsGet("kizuna-unlock")===S.lock.h;}
function relock(){ssSet("kizuna-unlock",null);lsDel("kizuna-unlock");}
function codeInput(id,lab,ac){return '<label for="'+id+'">'+lab+'<input id="'+id+'" class="codein" type="password" inputmode="numeric" autocomplete="'+ac+'" pattern="[0-9]{4,8}" minlength="4" maxlength="8" required title="4 à 8 chiffres"></label>';}
function renderLock(v){var wait=S.lockUntil&&Date.now()<S.lockUntil;
 var h='<div class="lockwrap"><section class="card lockcard"><span class="lk-ico">'+LOCK_SVG+'</span><h1>Espace parents</h1><p>'+(v==="parametres"?"Les Paramètres sont protégés":"La Vue parents est protégée")+' par le code parent.</p>';
 h+='<form class="f" id="unlockf">'+codeInput("u-code","Code parent","off")+'<label class="chkline"><input type="checkbox" id="u-keep"> Rester déverrouillé sur cet appareil (seulement le téléphone ou l’ordinateur des parents)</label><button class="btn" type="submit"'+(wait?" disabled":"")+'>Ouvrir</button>'+(wait?'<p class="msg err">Trop d’essais. Réessayez dans 30 secondes.</p>':msgHtml("unlock"))+'</form>';
 h+='<details class="lockhelp"><summary>Code oublié ?</summary><p>Dans Supabase, ouvrez <b>SQL Editor</b> et lancez&nbsp;: <code>delete from settings where key = \'parent_lock\';</code> Le code est alors retiré&nbsp;: créez-en un nouveau dans Paramètres.</p></details>';
 h+='<p><a class="linkbtn" href="#accueil">Retour à l’accueil</a></p></section></div>';
 return h;}
function lockForm(){var on=lockOn();
 var h='<form class="card f" id="lockf"><div class="ftitle"><span class="lk-ico sm" aria-hidden="true">'+LOCK_SVG+'</span><h2>Code parent</h2></div><p>'+(on?'Un code protège la Vue parents et les Paramètres. Vous pouvez le changer ou le retirer.':'Protégez la Vue parents et les Paramètres par un code de 4 à 8 chiffres. Les enfants gardent l’accès à leur page et aux Conseils.')+'</p>';
 h+='<div class="cols two">'+codeInput("l-code",on?"Nouveau code":"Code","new-password")+codeInput("l-code2","Confirmer le code","new-password")+'</div>';
 h+='<div class="btnrow"><button class="btn" type="submit">'+(on?"Changer le code":"Activer le code")+'</button>'+(on?'<button class="btn sec" type="button" data-act="lock-off">Retirer le code</button>':'')+'</div>'+msgHtml("lock");
 h+='<p class="det">C’est une porte, pas un coffre-fort : le code évite que l’espace parents soit ouvert par erreur ou par curiosité. Ne reprenez pas le code de votre carte bancaire ou de votre téléphone.</p></form>';
 return h;}
function saveLock(v,done){if(DEMO){S.lock=v;done();return;}
 var q=v?sb.from("settings").upsert({key:"parent_lock",value:v,updated_at:new Date().toISOString()}):sb.from("settings").delete().eq("key","parent_lock");
 q.then(function(r){if(r.error)flash("lock","Erreur : "+r.error.message,true);else{S.lock=v;done();}});}
var GEAR='<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm8.2 4.7-.1-1.2 2-1.6-2-3.4-2.4.9a8 8 0 0 0-2-1.2L15.3 4h-4l-.4 2.7a8 8 0 0 0-2 1.2l-2.4-.9-2 3.4 2 1.6a8 8 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-.9a8 8 0 0 0 2 1.2l.4 2.7h4l.4-2.7a8 8 0 0 0 2-1.2l2.4.9 2-3.4-2-1.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>';
var SECTIONS=[["jour","Aujourd’hui","Devoir","Aujourd’hui"],["semaine","Ma semaine","Sac","Semaine"],["edt","Emploi du temps","Horaires","Horaires"],["livres","Bibliothèque","Lecture","Livres"],["parcours","Mon parcours","Parcours","Parcours"]];
var FLAME='<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 4 5 5.5 5 11a5 5 0 0 1-10 0c0-3 2-4.5 2-7 2 1.2 3 2.6 3 4 1-2 .5-5 0-8z" fill="#FF6B4A"/></svg>';
function ring(p,size,stroke,label,col,track,txt){var r=(size-stroke)/2,c=2*Math.PI*r;return '<span class="ring" style="width:'+size+'px;height:'+size+'px"><svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'" aria-hidden="true"><circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" stroke="'+(track||"var(--line)")+'" stroke-width="'+stroke+'" fill="none"/><circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" stroke="'+(col||"var(--child)")+'" stroke-width="'+stroke+'" fill="none" stroke-linecap="round" stroke-dasharray="'+(c*p).toFixed(1)+' '+c.toFixed(1)+'" transform="rotate(-90 '+size/2+' '+size/2+')"/></svg><b style="font-size:'+Math.round(size/4.2)+'px'+(txt?';color:'+txt:'')+'">'+(label||Math.round(p*100)+"%")+'</b></span>';}
function banner(c,kicker,title,sub,right,withCard){
 var t=theme(c),k=card(c.id);
 var h='<section class="hero kid-hero" style="background-color:'+t.bg+';color:'+t.txt+'"><div class="hero-id">'+(withCard?insignia(gradeOf(c.id).i,t):'')+'<div><span class="over">'+kicker+'</span><h1>'+esc(title)+'</h1>'+(sub?'<p class="hsub">'+esc(sub)+'</p>':'');
 if(withCard){var g=gradeOf(c.id);h+='<div class="badges"><span class="gname">'+esc(g.name)+(g.cls?' · promotion '+esc(g.cls):'')+'</span><span>'+(g.next?'Encore '+g.left+' semaine'+(g.left>1?"s":"")+' tenue'+(g.left>1?"s":"")+' pour '+esc(g.next[0]):'Plus haut grade de l’année')+'</span></div>';}
 return h+'</div></div>'+(right?'<div class="hero-stats">'+right+'</div>':'')+'</section>';}

function topbar(v){
 var c=child(v),sec=curSection();
 var h='<header class="topbar'+(c?" kidbar":"")+'"><a class="brand" href="#accueil" aria-label="Accueil de l’Académie">'+logo(40)+'<span class="wordmark"><span>ACADÉMIE</span><b>KIZUNA</b></span></a>';
 if(c){h+='<nav class="secnav" aria-label="Sections">'+SECTIONS.map(function(s){return '<a href="#'+esc(c.id)+(s[0]==="jour"?"":"/"+s[0])+'" class="sec" title="'+esc(s[1])+'" aria-current="'+(sec===s[0]?"page":"false")+'">'+'<span class="secpic">'+picto(s[2],30)+'</span><span class="sl">'+s[1]+'</span><span class="ss">'+s[3]+'</span></a>';}).join("")+'</nav>';}
 h+='<div class="who">';
 var cur=c||null,ct=cur?theme(cur):THEMES[themeName(null)];
 h+='<details class="pmenu"'+(S.pmenu?" open":"")+'><summary aria-label="Changer de profil"><span class="av" style="background:'+ct.bg+';color:'+ct.txt+'">'+esc(cur?cur.name.charAt(0):(v==="parents"?"P":"≡"))+'</span><span class="pm-name">'+esc(cur?cur.name:v==="parents"?"Parents":v==="parametres"?"Paramètres":v==="accueil"?"Profils":"Conseils")+'</span><span class="caret" aria-hidden="true">▾</span></summary><div class="pm-list">';
 children().forEach(function(ch){var t2=theme(ch);h+='<button class="pm-item" data-view="'+esc(ch.id)+'" aria-current="'+(v===ch.id?"page":"false")+'"><span class="av" style="background:'+t2.bg+';color:'+t2.txt+'">'+esc(ch.name.charAt(0))+'</span>'+esc(ch.name)+'</button>';});
 h+='<button class="pm-item" data-view="parents" aria-current="'+(v==="parents"?"page":"false")+'"><span class="av" style="background:#3A4250;color:#fff">P</span>Vue parents</button><button class="pm-item" data-view="conseils"><span class="av" style="background:#0D3B45;color:#fff">?</span>Conseils</button><button class="pm-item" data-view="parametres" aria-current="'+(v==="parametres"?"page":"false")+'"><span class="av" style="background:#E9EEF0;color:#0D3B45">'+GEAR+'</span>Paramètres</button></div></details>';
  h+='<button class="tourbtn" id="tour-btn" type="button" data-act="tour" aria-label="Visite guidée de cet écran" title="Visite guidée de cet écran">'+BULB+'</button>';
 
 h+='<nav class="profiles" aria-label="Profils">';
 children().forEach(function(ch){var t=theme(ch);var on=v===ch.id;h+='<button class="prof" data-view="'+esc(ch.id)+'" aria-current="'+(on?"page":"false")+'" style="--tc:'+t.bg+';--tt:'+t.txt+'"><span class="av">'+esc(ch.name.charAt(0))+'</span><span class="pn">'+esc(ch.name)+'</span></button>';});
 var tp=THEMES[themeName(null)];
 h+='<button class="prof txt" data-view="parents" aria-current="'+(v==="parents"?"page":"false")+'" style="--tc:'+tp.bg+';--tt:'+tp.txt+'">Parents</button>';
 h+='<button class="prof txt" data-view="conseils" aria-current="'+(v==="conseils"?"page":"false")+'" style="--tc:#0D3B45;--tt:#FFFFFF">Conseils</button><button class="prof gear" data-view="parametres" aria-current="'+(v==="parametres"?"page":"false")+'" aria-label="Paramètres" title="Paramètres" style="--tc:#3A4250;--tt:#FFFFFF">'+GEAR+'</button></nav></div>';
 return h+'</header>';
}
function weeksNav(){
 if(!S.plans.length)return "";
 var h='<nav class="weeks" aria-label="Semaines">';
 var ci=curWeekIndex();var sel=weekIdx();
 var lbl=function(i){var ds=S.plans[i].data.days;var mo=ds.filter(function(d){return d.wd===1;})[0]||ds[0];return fmtDate(mo.date,{day:"numeric",month:"short"});};
 [[ci-1,"Semaine dernière"],[ci,"Cette semaine"],[ci+1,"Semaine prochaine"]].forEach(function(w){
  if(w[0]>=0&&w[0]<S.plans.length)h+='<button class="wk" data-week="'+w[0]+'" aria-pressed="'+(w[0]===sel)+'">'+w[1]+' <small>'+lbl(w[0])+'</small></button>';
  else if(w[1]==="Semaine prochaine")h+='<button class="wk" disabled>Semaine prochaine <small>bientôt</small></button>';
 });
 var others=S.plans.map(function(p,i){return i;}).filter(function(i){return i<ci-1||i>ci+1;});
 if(others.length)h+='<select class="wk" id="oldweek" aria-label="Autres semaines"><option value="">Autres semaines…</option>'+others.map(function(i){return '<option value="'+i+'"'+(i===sel?" selected":"")+'>Semaine du '+lbl(i)+'</option>';}).join("")+'</select>';
 return h+'</nav>';
}
var FOLDS=[["tipf","Conseil","tip","Conseil","Une astuce de professeur ou de livre"],["notef","Retour de professeur","note","Prof","Message reçu, version pour l’enfant"],["stampf","Sceau de l’effort","stamp","Tampon","Récompenser un vrai effort, rarement"],["senseif","Message du mentor","sensei","Parchemin","Un mot direct à un enfant ou à tous"],["addhw","Mission","addhw","Devoir","Un devoir absent d’EcoleDirecte"],["bulk","Saisie rapide","bulk","Liste","Coller une liste de devoirs"],["idea","Idée de loisir","idea","Loisir","Sortie, lecture plaisir, défi"],["lockf","Code parent","lock",""],["themesf","Couleurs de héros","themes",""],["setinstall","Installer sur un téléphone","install",""],["setbackup","Sauvegarde","backup",""],["import","Restaurer ou importer","import",""],["settings","Réglages (avancé)","settings",""]];
function foldForms(){FOLDS.forEach(function(f){var el=document.getElementById(f[0]);if(!el||el.parentNode.tagName==="DETAILS")return;
 var d=document.createElement("details");d.className="fold"+(f[0]==="bulk"||f[0]==="notef"||f[0]==="tipf"?" wide":"");d.setAttribute("data-fold",f[0]);
 if((S.open||{})[f[0]]||S.msg[f[2]]||(f[0]==="bulk"&&S.bulk.items)||(f[0]==="notef"&&S.editNote)||(f[0]==="stampf"&&S.editStamp)||(f[0]==="senseif"&&S.editSensei)||(f[0]==="tipf"&&(S.editTip||S.tipDraft)))d.open=true;
 var sm=document.createElement("summary");sm.innerHTML=(f[3]?picto(f[3],28):"")+"<span>"+esc(f[1])+(f[4]?"<small class=\"fdesc\">"+esc(f[4])+"</small>":"")+"</span><b class=\"fplus\" aria-hidden=\"true\">+</b>";d.appendChild(sm);el.parentNode.insertBefore(d,el);d.appendChild(el);});}
function renderHome(){
 var hr=new Date().getHours();
 var h='<div class="home"><div class="home-head">'+logo(72)+'<h1>'+(hr<18?"Bonjour":"Bonsoir")+' !</h1><p>Qui ouvre l’Académie ?</p></div><div class="home-grid">';
 children().forEach(function(c){var t=theme(c),k=card(c.id),mp=mprog(c.id,TODAY),left=mp.t-mp.n;
  h+='<a class="home-card" href="#'+esc(c.id)+'" style="background-color:'+t.bg+';color:'+t.txt+'">'+insignia(gradeOf(c.id).i,t)+'<span class="hc-txt"><b>'+esc(c.name)+'</b><small>'+esc(gradeOf(c.id).name)+' · '+(mp.t?(left?left+" mission"+(left>1?"s":"")+" aujourd’hui":"Tout est fait aujourd’hui !"):"Rien de prévu aujourd’hui")+'</small></span>'+(mp.t?ring(mp.n/mp.t,56,6,mp.n+"/"+mp.t,t.acc,"rgba(255,255,255,.25)",t.txt):'')+'</a>';});
 var tw=allTips(null);var tow=tw.length?tw[weekNum()%tw.length]:null;
 if(tow)h+='</div><section class="tow"><span class="kicker acc">Conseil de la semaine</span>'+tipCard(tow,true)+'<a class="linkbtn" href="#conseils">Tous les conseils</a></section><div>';
 var tp=THEMES[themeName(null)];
 h+='</div><div class="home-more"><a class="home-small" href="#parents" style="--tc:'+tp.bg+'"><span class="av" style="background:'+tp.bg+';color:#fff">P</span>Vue parents</a><a class="home-small" href="#conseils"><span class="av" style="background:#0D3B45;color:#fff">?</span>Conseils</a></div></div>';
 return h;}
function hardOf(cid,plan){var out=[];if(!plan)return out;var ch=plan.data.children[cid];if(!ch||!ch.blocks)return out;Object.keys(ch.blocks).sort().forEach(function(d){ch.blocks[d].forEach(function(b){if(b.id&&S.diff[b.id]>=4&&S.done[b.id])out.push({l:b.l,date:d,n:S.diff[b.id]});});});return out;}
function pendingExtras(cid,date){
 var due=addDays(date,1),labels={};
 blocksOf(cid,date).forEach(function(b){labels[fold(b.l).replace(/[^a-z0-9]+/g," ").trim()]=1;});
 return S.extras.filter(function(e){if(!(e.child===cid||e.child==="tous")||e.due!==due||e.kind==="rev")return false;
  var core=fold(e.text).replace(/[^a-z0-9]+/g," ").trim().slice(0,30);
  return !Object.keys(labels).some(function(l){return l.indexOf(core)>=0;});});}
var NOTE_SRC=[["mail","E-mail"],["reunion","Réunion"],["bulletin","Bulletin"],["oral","À l’oral"],["cahier","Carnet de liaison"],["autre","Autre"]];
var NOTE_TONE=[["positif","Encouragement"],["mixte","Encouragement et points à travailler"],["travail","Point à travailler"]];
function notesFor(cid,sharedOnly){return S.notes.filter(function(n){return (n.child===cid||n.child==="tous")&&(!sharedOnly||n.shared);}).sort(function(a,b){return (a.date||"")<(b.date||"")?1:-1;});}
function weekKey(){var d=new Date(TODAY+"T12:00:00");var wd=(d.getDay()+6)%7;return addDays(TODAY,-wd);}
function goalId(n){return "goal|"+n.id+"|"+weekKey();}
function noteLabel(list,v){var x=list.filter(function(z){return z[0]===v;})[0];return x?x[1]:"";}
function kidNoteHtml(n){
 var h='<article class="tnote tone-'+esc(n.tone||"mixte")+'"><header><b>'+esc(n.subject||"Professeur")+'</b>'+(n.teacher?' · '+esc(n.teacher):'')+'<small>'+esc(fmtDate(n.date||TODAY,{day:"numeric",month:"long"}))+'</small></header>';
 if(n.kid_strengths)h+='<div class="tn-part good"><em>Ce que ton professeur apprécie chez toi</em><p>'+esc(n.kid_strengths)+'</p></div>';
 if(n.kid_expect)h+='<div class="tn-part expect"><em>Ce qu’il attend de toi</em><p>'+esc(n.kid_expect)+'</p></div>';
 if(n.kid_next)h+='<div class="tn-part next"><em>Ce qui peut changer</em><p>'+esc(n.kid_next)+'</p></div>';
 return h+'</article>';}
function goalHtml(n,compact){var gid=goalId(n),ok=!!S.done[gid];
 return '<div class="goal'+(ok?" ok":"")+'"><span class="g-txt"><em>Mon objectif'+(n.subject?' · '+esc(n.subject):'')+'</em><b>'+esc(n.goal)+'</b></span><button class="g-btn" data-id="'+esc(gid)+'" aria-pressed="'+ok+'">'+(ok?"Tenu cette semaine ✓":"Cette semaine, je l’ai tenu")+'</button></div>';}
function activeGoals(cid){return notesFor(cid,true).filter(function(n){return n.goal&&n.goal_active!==false;});}
function noteForm(){
 var n=S.editNote?S.notes.filter(function(x){return String(x.id)===String(S.editNote);})[0]||{}:{};
 var opt=function(list,v){return list.map(function(o){return '<option value="'+o[0]+'"'+(o[0]===v?" selected":"")+'>'+o[1]+'</option>';}).join("");};
 var h='<form class="card f notef" id="notef"><h2>'+(S.editNote?"Modifier le retour":"Nouveau retour de professeur")+'</h2>';
 h+='<div class="cols three"><label for="n-child">Enfant<select id="n-child">'+children().map(function(c){return '<option value="'+esc(c.id)+'"'+(n.child===c.id?" selected":"")+'>'+esc(c.name)+'</option>';}).join("")+'<option value="tous"'+(n.child==="tous"?" selected":"")+'>Tous</option></select></label>';
 h+='<label for="n-date">Date<input id="n-date" type="date" value="'+esc(n.date||TODAY)+'"></label><label for="n-src">Reçu par<select id="n-src">'+opt(NOTE_SRC,n.source||"mail")+'</select></label></div>';
 h+='<div class="cols three"><label for="n-subj">Matière<input id="n-subj" type="text" value="'+esc(n.subject||"")+'" placeholder="ex. EPS"></label><label for="n-teacher">Professeur (facultatif)<input id="n-teacher" type="text" value="'+esc(n.teacher||"")+'" placeholder="ex. M. Dupont"></label><label for="n-tone">Type<select id="n-tone">'+opt(NOTE_TONE,n.tone||"mixte")+'</select></label></div>';
 h+='<label for="n-orig">Message d’origine (privé : seuls les parents le voient)<textarea id="n-orig" placeholder="Collez ici le message du professeur. Évitez les noms d’autres élèves : écrivez « un camarade ».">'+esc(n.original||"")+'</textarea></label>';
 h+='<fieldset class="kidver"><legend>Version pour l’enfant</legend><p class="det">Trois phrases simples et bienveillantes. Laissez vide ce qui ne s’applique pas.</p>';
 h+='<label for="n-good">Ce que le professeur apprécie chez lui/elle<textarea id="n-good" rows="2">'+esc(n.kid_strengths||"")+'</textarea></label>';
 h+='<label for="n-expect">Ce qu’il attend<textarea id="n-expect" rows="2">'+esc(n.kid_expect||"")+'</textarea></label>';
 h+='<label for="n-next">Ce qui peut changer (facultatif)<textarea id="n-next" rows="2">'+esc(n.kid_next||"")+'</textarea></label>';
 h+='<label for="n-goal">Objectif à suivre chaque semaine (facultatif)<input id="n-goal" type="text" value="'+esc(n.goal||"")+'" placeholder="ex. Me mettre au travail dès le goûter fini"></label>';
 h+='<label class="chkline"><input type="checkbox" id="n-shared"'+(n.shared?" checked":"")+'> Montrer la version pour l’enfant (et l’objectif) dans son profil</label>';
 if(S.editNote)h+='<label class="chkline"><input type="checkbox" id="n-goalon"'+(n.goal_active!==false?" checked":"")+'> Objectif toujours en cours</label>';
 h+='</fieldset><div class="btnrow"><button class="btn" type="submit">'+(S.editNote?"Enregistrer les modifications":"Enregistrer le retour")+'</button>'+(S.editNote?'<button class="btn sec" type="button" data-act="note-cancel">Annuler</button>':'')+'</div>'+msgHtml("note")+(S.notesMissing&&!DEMO?'<p class="msg err">Exécutez d’abord le bloc SQL « v0.10.0 » dans Supabase.</p>':'')+'</form>';
 return h;}
function renderNotesParents(){
 var h='<section class="card wide notes-card"><div class="ftitle">'+picto("Prof",36)+'<h2>Retours des professeurs</h2></div><p class="det">Le message d’origine reste privé. L’enfant ne voit que la version pour lui, et seulement si vous cochez « Montrer ».</p>';
 if(!S.notes.length)h+='<p class="none">Aucun retour pour le moment.</p>';
 children().forEach(function(c){var ns=notesFor(c.id).filter(function(n){return n.child===c.id||n.child==="tous";});if(!ns.length)return;
  var row=function(n){var gid=goalId(n);
   return '<div class="nrow"><div class="nr-txt"><b>'+esc(n.subject||"—")+(n.teacher?' · '+esc(n.teacher):'')+'</b><small>'+esc(fmtDate(n.date||TODAY))+' · '+esc(noteLabel(NOTE_SRC,n.source))+' · '+esc(noteLabel(NOTE_TONE,n.tone))+'</small><span class="nr-flag '+(n.shared?"on":"off")+'">'+(n.shared?"Visible par l’enfant":"Privé")+'</span>'+(n.kid_strengths||n.kid_expect?'<p>'+esc([n.kid_strengths,n.kid_expect].filter(Boolean).join(" · "))+'</p>':'<p class="none">Pas encore de version pour l’enfant.</p>')+(n.goal?'<small class="nr-goal">Objectif : '+esc(n.goal)+(n.goal_active===false?" (terminé)":S.done[gid]?" · tenu cette semaine ✓":" · pas encore coché cette semaine")+'</small>':'')+(n.original?'<details class="orig"><summary>Message d’origine</summary><p>'+esc(n.original)+'</p></details>':'')+'</div><div class="nr-btns"><button class="btn sec mini" data-editnote="'+esc(n.id)+'">Modifier</button><button class="btn sec mini" data-note2tip="'+esc(n.id)+'">En faire un conseil</button><button class="btn sec mini" data-delnote="'+esc(n.id)+'">Supprimer</button></div></div>';};
  h+='<div class="nk"><h3>'+esc(c.name)+' <small class="cnt">('+ns.length+')</small></h3>'+ns.slice(0,3).map(row).join("")+(ns.length>3?'<details class="more-notes"'+(S.open&&S.open["nk-"+c.id]?" open":"")+' data-more="nk-'+esc(c.id)+'"><summary>Voir les '+(ns.length-3)+' autre'+(ns.length-3>1?"s":"")+' retour'+(ns.length-3>1?"s":"")+'</summary>'+ns.slice(3).map(row).join("")+'</details>':'')+'</div>';});
 return h+parentTipFor("notes",weekNum())+'</section>';}
function kidIdeaBlock(c){
 var h='<div class="kid-idea">';
 var mine=S.ideas.filter(function(x){return x.proposed_by===c.id;}).slice(-4).reverse();
 if(mine.length)h+='<p class="ki-title">Mes propositions</p>'+mine.map(function(x){var st=ideaOk(x)?["ok","Acceptée"+(x.date?" pour le "+fmtDate(x.date):"")]:x.status==="non"?["non","Pas cette fois"]:["wait","En attente de réponse"];
  return '<div class="ki-row"><span>'+esc(x.title)+'</span><b class="ki-st '+st[0]+'">'+esc(st[1])+'</b></div>';}).join("");
 if(S.ideaOpen){
  h+='<form class="f kid-idea-form" id="kidideaf" data-child="'+esc(c.id)+'"><label for="ki-kind">Type<select id="ki-kind">'+IDEA_KINDS.map(function(k){return '<option value="'+k[0]+'">'+k[1]+'</option>';}).join("")+'</select></label>';
  h+='<label for="ki-title">Mon idée<input id="ki-title" type="text" required placeholder="ex. Aller au cinéma voir…"></label>';
  h+='<label for="ki-detail">Pourquoi / détails (facultatif)<input id="ki-detail" type="text" placeholder="ex. avec mes cousins, samedi après-midi"></label>';
  h+='<label for="ki-date">Date souhaitée (facultatif)<input id="ki-date" type="date"></label>';
  h+='<div class="btnrow"><button class="btn" type="submit">Envoyer à mes parents</button><button class="btn sec" type="button" data-act="kidea-close">Annuler</button></div>'+msgHtml("kidea")+'</form>';
 } else h+='<button class="btn" type="button" data-act="kidea-open">Proposer une idée</button>';
 return h+'</div>';}
var METHODS=[["relu","Relu le cours"],["fiche","Fait une fiche"],["exos","Refait des exercices"],["interro","Me suis fait interroger"],["cartes","Cartes mémoire"],["explique","Expliqué à quelqu’un"],["schema","Fait un schéma"]];
var METH_KINDS={rev:1,app:1};
var MINS=[10,20,30,45,60];
function methLabel(k){var x=METHODS.filter(function(m){return m[0]===k;})[0];return x?x[1]:k;}
function methSummary(id){var v=S.meth[id];if(!v)return "";return v.m.map(methLabel).join(", ")+(v.min?" · "+v.min+" min":"");}
function methRow(id,cta){var v=S.meth[id]||{m:[],min:null};
 return '<div class="methrow" data-mfor="'+esc(id)+'"><span class="rr-q">Comment as-tu travaillé ?</span><div class="m-chips">'+METHODS.map(function(m){return '<button type="button" class="mchip" data-mtog="'+m[0]+'" aria-pressed="'+(v.m.indexOf(m[0])>=0)+'">'+m[1]+'</button>';}).join("")+'</div><span class="rr-q small">Combien de temps, à peu près ?</span><div class="m-chips">'+MINS.map(function(n){return '<button type="button" class="mchip t" data-mmin="'+n+'" aria-pressed="'+(v.min===n)+'">'+n+' min</button>';}).join("")+'</div><div class="btnrow"><button class="btn mini" data-msave="'+esc(id)+'">'+(cta||"Valider")+'</button><button class="linkbtn" data-mskip="'+esc(id)+'">Passer</button></div></div>';}
function saveMeth(id,v){S.meth[id]=v;
 if(DEMO){lsSet("planning-demo-meth",JSON.stringify(S.meth));return;}
 sb.from("checks").upsert({id:id,done:true,method:v.m.join(",")||null,minutes:v.min||null,updated_at:new Date().toISOString()}).then(function(r){if(r.error){S.methMissing=true;flash("global","Méthode non enregistrée : un parent doit exécuter le bloc SQL « v0.11.0 » dans Supabase.",true);}});}
function blockById(cid,id){var f=null;blocksOf(cid,S.day).forEach(function(x){if(x.id===id)f=x;});return f;}
function lastRevMethods(cid){var out=[];Object.keys(S.meth).forEach(function(id){if(id.indexOf(cid+"|")===0&&id.indexOf("|rev|")>0)out.push({id:id,v:S.meth[id]});});return out.sort(function(a,b){return a.id<b.id?1:-1;}).slice(0,3);}
function methStats(cid,plan){var cnt={},tot=0,mins=0;if(!plan)return null;var ch=plan.data.children[cid];if(!ch||!ch.blocks)return null;
 Object.keys(ch.blocks).forEach(function(d){ch.blocks[d].forEach(function(b){var v=b.id&&S.meth[b.id];if(!v)return;tot++;mins+=v.min||0;v.m.forEach(function(k){cnt[k]=(cnt[k]||0)+1;});});});
 return tot?{cnt:cnt,tot:tot,mins:mins}:null;}
function allTips(cid){
 var fam=S.tips.filter(function(t){return t.active!==false&&t.child!=="parents"&&(!cid||!t.child||t.child==="tous"||t.child===cid);}).map(function(t){return {id:t.id,title:t.title,body:t.body,moments:(t.moments||"general").split(","),src:t.source_type||"famille",from:t.source||"",subject:t.subject||"",fam:true};});
 var def=TIPS.map(function(t,i){return {id:"d"+i,title:t[0],body:t[1],moments:t[2].split(","),src:"academie",from:"",subject:""};});
 return fam.concat(def);}
function tipFor(cid,kind,salt){var list=allTips(cid).filter(function(t){return t.moments.indexOf(kind)>=0;});if(!list.length)return null;
 var famL=list.filter(function(t){return t.fam;});var pool=famL.length&&((salt||0)%2===0)?famL:list;
 return pool[Math.abs(salt||0)%pool.length];}
function tipSrcLabel(t){if(t.src==="academie")return "Conseil de l’Académie";var l=(TIP_SRC.filter(function(x){return x[0]===t.src;})[0]||["","Conseil"])[1];return t.from?(t.src==="prof"?"Conseil de "+t.from:t.src==="livre"?"D’après « "+t.from+" »":l+" · "+t.from):l;}
function tipCard(t,small){return '<article class="tip'+(small?" small":"")+' src-'+esc(t.src)+'"><span class="tip-src">'+esc(tipSrcLabel(t))+(t.subject?' · '+esc(t.subject):'')+'</span><h3>'+esc(t.title)+'</h3><p>'+esc(t.body)+'</p></article>';}
function parentTips(){
 var fam=S.tips.filter(function(t){return t.active!==false&&t.child==="parents";}).map(function(t){return {id:t.id,title:t.title,body:t.body,moments:(t.moments||"general").split(","),src:t.source_type||"famille",from:t.source||"",subject:t.subject||"",fam:true};});
 var def=PARENT_TIPS.map(function(t,i){return {id:"p"+i,title:t[0],body:t[1],moments:t[2].split(","),src:"livre",from:t[3],subject:""};});
 return fam.concat(def);}
function parentTipFor(ctx,salt){var l=parentTips().filter(function(t){return t.moments.indexOf(ctx)>=0;});if(!l.length)return "";var t=l[Math.abs(salt)%l.length];
 return '<details class="ptip"><summary><span class="tip-src">Conseil pour vous · '+esc(tipSrcLabel(t))+'</span><b>'+esc(t.title)+'</b></summary><span>'+esc(t.body)+'</span></details>';}
function renderParentTips(){var l=parentTips();var w=weekNum();var cur=l[w%l.length];
 return '<section class="card wide ptips-card"><div class="ftitle">'+picto("Conseil",36)+'<h2>Conseils pour les parents</h2></div><p class="det">Seulement ici : les enfants ne les voient pas.</p>'+tipCard(cur)+'<details class="ptips-all"><summary>Voir les '+l.length+' conseils</summary><div class="tips-grid">'+l.map(function(t){return tipCard(t,true);}).join("")+'</div></details></section>';}
/* ------------------------------------------------------------ bilan du dimanche (0.15) */
var BCAT=[["ecole","Devoirs et leçons"],["rev","Révisions"],["lec","Lecture"],["maison","Maison"]];
var BKIND={dev:"ecole",app:"ecole",rel:"ecole",rev:"rev",lec:"lec",cor:"maison",ran:"maison",org:"maison"};
var SUNDAY=[["sync","Lancer « Synchro planning » et vérifier la semaine prochaine"],["evals","Regarder les évaluations à venir avec chaque enfant"],["ideas","Valider les idées proposées par les enfants"],["goal","Choisir avec chaque enfant un objectif pour la semaine"],["sacs","Préparer les sacs, l’agenda et le matériel"]];
function bilanKid(c,plan){
 var lastD=plan.data.days[plan.data.days.length-1].date;var lim=lastD<=TODAY?lastD:addDays(TODAY,-1);
 var days=plan.data.days.filter(function(d){return d.date<=lim;});
 var cat={};BCAT.forEach(function(x){cat[x[0]]={n:0,t:0};});var miss=[],all={n:0,t:0};
 days.forEach(function(d){blocksOf(c.id,d.date).forEach(function(b){var k=BKIND[b.k];if(!k)return;var ids=[];
  if(b.k==="rel"){if(b.rel){subs(b.rel.today).forEach(function(x){ids.push(b.rel.idp+"|t|"+x);});subs(b.rel.tomorrow).forEach(function(x){ids.push(b.rel.idp+"|d|"+x);});}}
  else if(b.id)ids.push(b.id);
  ids.forEach(function(i){var ok=!!S.done[i];cat[k].t++;all.t++;if(ok){cat[k].n++;all.n++;}});
  if(b.k!=="rel"&&b.id&&k!=="maison"&&!S.done[b.id])miss.push({l:b.l,date:d.date});});});
 var first=plan.data.days[0].date,last=plan.data.days[plan.data.days.length-1].date;
 var inW=function(x){return x&&x>=first&&x<=last;};
 var st=stampsFor(c.id).filter(function(x){return inW(x.date||String(x.created_at||"").slice(0,10));});
 var bk=booksFor(c.id).filter(function(x){return inW(x.finished);});
 var goals=activeGoals(c.id).map(function(n){return {n:n,ok:!!S.done["goal|"+n.id+"|"+first]};});
 var np=S.plans[S.plans.indexOf(plan)+1]||null,ev=[];
 var nf=addDays(last,1),nl=addDays(last,7);
 var seen={};S.plans.forEach(function(p){var ch=p.data.children[c.id]||{};(ch.evals||[]).concat(ch.evals_ed||[]).forEach(function(e){if(e[0]>=nf&&e[0]<=nl&&!seen[e[0]+e[1]]){seen[e[0]+e[1]]=1;ev.push(e);}});});
 S.extras.forEach(function(e){if((e.child===c.id||e.child==="tous")&&e.kind==="rev"&&e.due>=nf&&e.due<=nl)ev.push([e.due,(e.subject?e.subject+" : ":"")+e.text]);});
 ev.sort(function(a,b){return a[0]<b[0]?-1:1;});
 return {all:all,cat:cat,miss:miss,hard:hardOf(c.id,plan).filter(function(m){return m.date<=lim;}),meth:methStats(c.id,plan),st:st,bk:bk,goals:goals,ev:ev,next:np?weekProg(c.id,np).t:null};}
function bilanTalk(c,b,future,partial){var out=[],p=pct(b.all);if(future)return out;
 if(b.st.length)out.push("Féliciter "+c.name+" pour ses efforts : "+b.st.length+" sceau"+(b.st.length>1?"x":"")+" cette semaine.");
 else if(b.all.t&&p>=85)out.push("Féliciter "+c.name+" pour sa régularité ("+p+" % des missions faites).");
 if(!partial&&b.all.t&&p<70)out.push("Seulement "+p+" % des missions faites : qu’est-ce qui a coincé ? Trop de choses le même soir, fatigue, oubli ?");
 if(b.hard.length)out.push("Reprendre ensemble « "+b.hard[0].l+" », notée difficile.");
 if(b.meth&&b.meth.cnt.relu&&b.meth.cnt.relu>=b.meth.tot*0.6)out.push("Les révisions sont surtout de la relecture : proposer de se tester (feuille blanche, questions).");
 if(b.ev.length)out.push("Préparer "+(b.ev.length>1?"les "+b.ev.length+" évaluations":"l’évaluation")+" de la semaine prochaine : "+b.ev.slice(0,2).map(function(e){return e[1].split(" : ")[0]+" ("+fmtDate(e[0],{weekday:"long"})+")";}).join(", ")+".");
 var g=b.goals.filter(function(x){return !x.ok;})[0];if(g)out.push("Faire le point sur l’objectif « "+g.n.goal+" ».");
 return out.slice(0,4);}
function renderBilan(){
 var plan=planOf(S.day);var tp=THEMES[themeName(null)];
 if(!plan)return '<div class="card"><p>Aucun planning pour cette semaine.</p></div>';
 var first=plan.data.days[0].date,last=plan.data.days[plan.data.days.length-1].date,cur=first<=TODAY&&TODAY<=last,partial=cur&&TODAY!==last;
 var data=children().map(function(c){return [c,bilanKid(c,plan)];});
 var tot={n:0,t:0},nst=0,nbk=0;data.forEach(function(x){tot.n+=x[1].all.n;tot.t+=x[1].all.t;nst+=x[1].st.length;nbk+=x[1].bk.length;});
 var h='<section class="hero bilan-hero" style="background-color:'+tp.bg+';color:'+tp.txt+'"><div class="hero-id"><div><span class="over">Bilan de la semaine'+(partial?" · jusqu’à hier soir":"")+'</span><h1>'+esc(plan.data.title.replace(/^Du /,"Semaine du "))+'</h1></div></div><div class="hero-stats parents"><div><b>'+pct(tot)+' %</b><small>missions faites</small></div><div><b>'+nst+'</b><small>sceau'+(nst>1?"x":"")+'</small></div><div><b>'+nbk+'</b><small>livre'+(nbk>1?"s":"")+' fini'+(nbk>1?"s":"")+'</small></div></div></section>';
 h+='<div class="bilan-bar noprint"><a class="btn sec mini" href="#parents">← Vue parents</a><button class="btn sec mini" type="button" data-act="print">Imprimer</button></div>';
 h+='<div class="noprint">'+weeksNav()+'</div>';
 if(first>TODAY)h+='<p class="det">Cette semaine n’a pas encore commencé : le bilan se remplira au fil des jours.</p>';
 h+='<div class="bilan-grid">';
 data.forEach(function(x){var c=x[0],b=x[1],t=theme(c);
  h+='<section class="card bilan-kid" style="--child:'+t.bg+'"><div class="bk-head">'+ring(b.all.t?b.all.n/b.all.t:0,64,8,pct(b.all)+"%")+'<div><h2>'+esc(c.name)+'</h2><small>'+b.all.n+' mission'+(b.all.n>1?"s":"")+' faite'+(b.all.n>1?"s":"")+' sur '+b.all.t+(partial?" jusqu’à hier":"")+'</small></div></div>';
  h+='<div class="bk-cats">'+BCAT.filter(function(k){return b.cat[k[0]].t;}).map(function(k){var v=b.cat[k[0]];return '<div class="bk-cat"><span>'+k[1]+'</span><i class="bar"><i style="width:'+pct(v)+'%"></i></i><b>'+v.n+'/'+v.t+'</b></div>';}).join("")+'</div>';
  var talk=bilanTalk(c,b,first>TODAY,partial);
  if(talk.length)h+='<div class="bk-talk"><h3>À en parler ensemble</h3><ul>'+talk.map(function(z){return '<li>'+esc(z)+'</li>';}).join("")+'</ul></div>';
  var det='';
  if(b.miss.length)det+='<h3>Pas cochées ('+b.miss.length+')</h3><ul class="bk-list">'+b.miss.slice(0,5).map(function(m){return '<li>'+esc(m.l)+' <small>'+esc(fmtDate(m.date))+'</small></li>';}).join("")+(b.miss.length>5?'<li class="more">et '+(b.miss.length-5)+' autre'+(b.miss.length-5>1?"s":"")+'</li>':'')+'</ul>';
  if(b.hard.length)det+='<h3>Notées difficiles</h3><ul class="bk-list">'+b.hard.slice(0,4).map(function(m){return '<li>'+diffBadge(m.n)+' '+esc(m.l)+'</li>';}).join("")+'</ul>';
  if(b.meth){var arr=Object.keys(b.meth.cnt).sort(function(p,q){return b.meth.cnt[q]-b.meth.cnt[p];});det+='<h3>Méthodes</h3><p>'+b.meth.tot+' révision'+(b.meth.tot>1?"s":"")+' décrite'+(b.meth.tot>1?"s":"")+(b.meth.mins?' · '+b.meth.mins+' min':'')+' · surtout : '+esc(arr.slice(0,2).map(function(k){return noteLabel(METHODS,k).toLowerCase();}).join(", "))+'</p>';}
  var pr=[];b.st.forEach(function(z){pr.push('Tampon : '+esc(z.title)+(z.note?' ('+esc(z.note)+')':''));});b.bk.forEach(function(z){pr.push('Livre fini : '+esc(z.title)+(z.pages?' ('+z.pages+' p.)':''));});b.goals.forEach(function(g){pr.push('Objectif '+(g.ok?'tenu':'pas encore tenu')+' : '+esc(g.n.goal));});
  if(pr.length)det+='<h3>Fiertés et objectifs</h3><ul class="bk-list">'+pr.map(function(z){return '<li>'+z+'</li>';}).join("")+'</ul>';
  det+='<h3>Semaine prochaine</h3>'+(b.ev.length?'<ul class="bk-list">'+b.ev.map(function(e){return '<li><b>'+esc(fmtDate(e[0]))+'</b> '+esc(e[1])+'</li>';}).join("")+'</ul>':'<p class="none">Aucune évaluation connue pour l’instant.</p>')+(b.next!=null?'<p class="det">'+b.next+' missions prévues.</p>':'<p class="det">Planning pas encore créé : il le sera à la prochaine synchro.</p>');
  h+='<details class="bk-more"'+(S.printing?' open':'')+'><summary>Le détail</summary>'+det+'</details></section>';});
 h+='</div>';
 var nm=addDays(last,1);var pend=S.ideas.filter(function(x){return x.status==="proposee";}).length;
 h+='<section class="card sunday"><h2>Préparer la semaine</h2><p class="det">15 minutes le dimanche, en famille.</p><ul class="sun-list">'+SUNDAY.map(function(z){var id="sunday|"+nm+"|"+z[0];return '<li><label><input type="checkbox" class="chk" data-id="'+esc(id)+'"'+(S.done[id]?" checked":"")+'> <span>'+esc(z[1])+(z[0]==="ideas"&&pend?' <b>('+pend+' à valider)</b>':'')+'</span></label></li>';}).join("")+'</ul></section>';
 return h;}
/* ------------------------------------------------------------ emploi du temps de la semaine (0.16) */
var TT_CAT={ecole:["École","#E3F1F4","#0D3B45","#0E5E6F"],cours:["Cours et soutien","#EFEAFE","#3D2A7A","#6B4FD8"],sport:["Sport","#FFE5DD","#7A2412","#FF6B4A"]};
function ttCat(a){return (a.sport||/taekwondo|hand|match|vtt|foot|judo|basket|sport|natation|danse|piscine|tennis|rugby|escalade|gym/i.test(a.label||""))?"sport":"cours";}
function ttDay(c,d){var out=[];var prev=null;
 lessonsOf(c.id,d.date).forEach(function(l){var s=mins(l.s),e=mins(l.e)||s+55;
  if(prev&&prev.l===l.m&&prev.e===s&&!!prev.x===!!l.x){prev.e=e;if(l.r&&prev.r.indexOf(l.r)<0)prev.r.push(l.r);return;}
  prev={s:s,e:e,l:l.m,cat:"ecole",x:l.x||"",r:l.r?[l.r]:[]};out.push(prev);});
 var fc=(S.fam&&S.fam.children||[]).filter(function(k){return k.id===c.id;})[0]||{};
 (fc.activities||[]).forEach(function(a){if(a.wd!==d.wd)return;var s=mins(a.start),e=mins(a.end)||s+60;out.push({s:s,e:e,l:a.label,cat:ttCat(a),x:"",r:[]});});
 return out.sort(function(a,b){return a.s-b.s;});}
function hm(m){var h=Math.floor(m/60),mm=m%60;return h+"h"+(mm?("0"+mm).slice(-2):"");}
function renderTimetable(c,plan){
 var h='<div class="narrow wide-tt">'+banner(c,esc(plan.data.title),"Emploi du temps","")+weeksNav();
 var days=plan.data.days.map(function(d){return {d:d,b:ttDay(c,d),ev:evalsFor(c.id).filter(function(e){return e[0]===d.date;})};});
 var all=[];days.forEach(function(x){all=all.concat(x.b);});
 var lo=8*60,hi=18*60;all.forEach(function(b){if(b.s<lo)lo=Math.floor(b.s/60)*60;if(b.e>hi)hi=Math.ceil(b.e/60)*60;});
 var K=0.9,T=10,H=Math.round((hi-lo)*K)+2*T;
 var tot={ecole:0,cours:0,sport:0};all.forEach(function(b){if(!b.x)tot[b.cat]+=(b.e-b.s);});
 var nx=all.filter(function(b){return b.x;}).length;
 h+='<section class="card"><div class="tt-sum">'+(tot.ecole?'<b>'+hm(tot.ecole)+' de cours au collège</b>':'')+(tot.cours?'<b>'+hm(tot.cours)+' de cours et soutien</b>':'')+(tot.sport?'<b>'+hm(tot.sport)+' de sport</b>':'')+(nx?'<b>'+nx+' cours annulé'+(nx>1?"s":"")+'</b>':'')+'</div>';
 h+='<div class="tt-legend">'+Object.keys(TT_CAT).map(function(k){var t=TT_CAT[k];return '<span><i style="--bg:'+t[1]+';--b:'+t[3]+'"></i>'+t[0]+'</span>';}).join("")+'<span><i style="--bg:#fff;--b:#9AA9AC;opacity:.55"></i>Annulé</span></div>';
 h+='<div class="ttw" id="ttw"><div class="ttg">';
 h+='<div class="tt-hd tt-corner"></div>'+days.map(function(x){var td=x.d.date===TODAY;return '<div class="tt-hd'+(td?" tt-today":"")+'"'+(td?' id="tt-today"':'')+'><b>'+esc(x.d.short)+' '+x.d.num+'</b>'+(x.ev.length?'<span class="tt-ev">Éval : '+esc(x.ev.map(function(e){return e[1].split(" : ")[0];}).join(", "))+'</span>':'')+'</div>';}).join("");
 h+='<div class="tt-hours" style="height:'+H+'px">';for(var m=lo;m<=hi;m+=60)h+='<span style="top:'+(T+Math.round((m-lo)*K))+'px">'+(m/60)+'h</span>';h+='</div>';
 days.forEach(function(x){var td=x.d.date===TODAY;h+='<div class="tt-col'+(td?" tt-today":"")+'" style="height:'+H+'px;--hr:'+Math.round(60*K)+'px;background-position:0 '+T+'px">';
  x.b.forEach(function(b){var t=TT_CAT[b.cat];var top=T+Math.round((b.s-lo)*K),ht=Math.max(22,Math.round((b.e-b.s)*K)-2);
   h+='<div class="tt-b'+(b.x?" x":"")+'" style="top:'+top+'px;height:'+ht+'px;--bg:'+t[1]+';--fg:'+t[2]+';--b:'+t[3]+'" title="'+esc(b.l+" · "+hm(b.s)+" – "+hm(b.e)+(b.r.length?" · salle "+b.r.join(", "):"")+(b.x?" · "+b.x:""))+'"><b>'+esc(b.l)+'</b>'+(ht>34?'<small>'+hm(b.s)+' – '+hm(b.e)+'</small>':'')+(ht>52&&b.r.length?'<small>Salle '+esc(b.r.join(", "))+'</small>':'')+(ht>52&&b.x?'<small>Annulé</small>':'')+'</div>';});
  h+='</div>';});
 if(!all.length)h+='<p class="tt-none">Pas encore d’emploi du temps pour cette semaine : il arrive avec la synchronisation.</p>';
 h+='</div></div><p class="det">École : emploi du temps d’EcoleDirecte (cours annulés barrés). Activités : réglages de la famille (Paramètres).</p></section></div>';
 return h;}
/* ------------------------------------------------------------ carnet et fiche de lecture (0.18) */
var NARR=[["je-perso","« Je » : le personnage principal raconte"],["je-temoin","« Je » : un témoin raconte"],["il","« Il / elle » : quelqu’un d’extérieur raconte"]];
var GENRES=["Roman d’aventures","Roman policier","Roman historique","Science-fiction","Fantastique","Roman","Autobiographie","Contes","Nouvelles","Théâtre","Bande dessinée","Documentaire","Autre"];
var RLISTS=[["persos","Personnages","Nom","Qui est-ce ? (âge, liens de famille, rôle)"],["lieux","Lieux","Lieu","Ce qui s’y passe"],["chapitres","Résumé des chapitres","Chapitre","Ce qui s’est passé (quelques lignes)"],["passages","Passages clés","Page","Ce qui se passe, pourquoi c’est important"]];
var SHEET_PARTS=[
 ["I. Carte d’identité du livre",[["id_titre","Titre","t"],["id_auteur","Auteur (nom, nationalité, siècle)","t"],["id_editeur","Éditeur et collection","t"],["id_date","Date de parution","t"],["id_genre","Genre","genre"]],["id_titre","id_genre"]],
 ["II. Histoire et narration",[["narr","Qui raconte ?","narr"],["resume","Résumé ou quatrième de couverture","a","Pour une quatrième de couverture : donne envie sans écrire « c’est beau » ; une situation, une question, du suspense. Pour un résumé : dis aussi comment l’histoire finit."]],["narr","resume"]],
 ["III. Le personnage principal",[["p_qui","Qui est-il ? (nom, âge, milieu, métier)","t"],["p_debut","Sa situation au début","a"],["p_but","Son but ou son problème","a"],["p_aide","Qui l’aide ?","t"],["p_contre","Qui s’oppose à lui ?","t"],["p_qual","Ses qualités et ses défauts","a"],["p_fin","À la fin : a-t-il réussi ? a-t-il changé ?","a"]],["p_qui","p_but"]],
 ["IV. Lieux et époque",[["l_lieux","Pays et endroits de l’histoire","a"],["l_voyage","Le personnage voyage-t-il ? (départ, étapes, arrivée)","a"],["l_epoque","Époque et durée de l’histoire","t"]],["l_lieux","l_epoque"]],
 ["V. Mon avis",[["a_aime","As-tu aimé ce livre ?","aime"],["a_r1","Raison 1","t"],["a_r2","Raison 2","t"],["a_r3","Raison 3","t"],["a_interet","Ce qui m’a le plus intéressé","t"],["a_conseil","Je le conseille à un ami ? Pourquoi ?","a"]],["a_r1","a_r2","a_r3"]]];
function readingFor(cid){return (S.reading||[]).filter(function(r){return r.child===cid;});}
function rNotes(r){var n=r.notes||{};RLISTS.forEach(function(l){if(!Array.isArray(n[l[0]]))n[l[0]]=[];});r.notes=n;return n;}
function rCount(r){var n=rNotes(r);return RLISTS.reduce(function(a,l){return a+n[l[0]].length;},0)+(n.epoque?1:0)+(n.narrateur?1:0);}
function sheetDone(r){var s=r.sheet||{};return SHEET_PARTS.filter(function(p){return p[2].every(function(k){return s[k]&&String(s[k]).trim();});}).length;}
function saveReading(r,okMsg){r.updated_at=new Date().toISOString();
 var done=function(x){var i=S.reading.map(function(y){return String(y.id);}).indexOf(String(x.id));if(i>=0)S.reading[i]=x;else S.reading.unshift(x);render();if(okMsg)flash("read",okMsg);};
 if(DEMO){if(!r.id)r.id="demo-r"+Date.now();done(r);return Promise.resolve(r);}
 if(S.offline){flash("read","Pas de réseau : réessaie quand le réseau sera revenu.",true);return Promise.resolve(null);}
 var row={child:r.child,title:r.title,author:r.author||null,pages:r.pages||null,started:r.started||TODAY,notes:r.notes||{},sheet:r.sheet||{},status:r.status||"en_cours",book_id:r.book_id||null,updated_at:r.updated_at};if(r.id)row.id=r.id;
 return sb.from("reading").upsert(row).select().then(function(res){if(res.error){flash("read",S.readingMissing?"Exécutez d’abord le bloc SQL « v0.18.0 » dans Supabase.":"Erreur : "+res.error.message,true);return null;}done(res.data[0]);return res.data[0];});}
function readingCard(c,r){var n=rNotes(r);var open=S.readOpen===String(r.id);
 var h='<section class="card read-card"><div class="rc-head">'+picto("Lecture",44)+'<div><span class="kicker acc">Livre en cours</span><h2>'+esc(r.title)+'</h2><small>'+(r.author?esc(r.author)+' · ':'')+'commencé le '+esc(fmtDate(r.started||TODAY,{day:"numeric",month:"long"}))+' · '+rCount(r)+' note'+(rCount(r)>1?"s":"")+' dans le carnet</small></div></div>';
 if(!open)return h+'<div class="btnrow"><button class="btn" type="button" data-ropen="'+esc(r.id)+'">Ouvrir mon carnet</button><button class="btn sec" type="button" data-rfinish="'+esc(r.id)+'">J’ai fini ce livre</button></div></section>';
 var tip=tipFor(c.id,"lec",new Date(TODAY+"T12:00:00").getDate());
 if(tip)h+='<div class="tipbox ctx"><span class="tip-src">'+esc(tipSrcLabel(tip))+'</span><b>'+esc(tip.title)+'</b><span>'+esc(tip.body)+'</span></div>';
 h+='<form class="f rmeta" data-rform="meta" data-rid="'+esc(r.id)+'"><div class="cols two"><label>Époque de l’histoire (date, siècle)<input name="epoque" type="text" value="'+esc(n.epoque||"")+'" placeholder="ex. hiver 1815"></label><label>Qui raconte ?<select name="narrateur"><option value="">Je ne sais pas encore</option>'+NARR.map(function(o){return '<option value="'+o[0]+'"'+(n.narrateur===o[0]?" selected":"")+'>'+o[1]+'</option>';}).join("")+'</select></label></div><button class="btn sec mini" type="submit">Enregistrer</button></form>';
 RLISTS.forEach(function(l){var items=n[l[0]];var num=l[0]==="chapitres";
  h+='<details class="rlist"'+((S.rlOpen||{})[r.id+l[0]]?" open":"")+' data-rl="'+esc(r.id+l[0])+'"><summary>'+l[1]+' <small>('+items.length+')</small></summary>';
  if(items.length)h+='<ul class="rl-items">'+items.map(function(x,i){return '<li><span><b>'+esc(num?"Chapitre "+x.c:(l[0]==="passages"?(x.c?"p. "+x.c:"Passage"):x.c))+'</b> '+esc(x.t||"")+'</span><button class="linkbtn" type="button" data-rdel="'+esc(r.id)+'|'+l[0]+'|'+i+'" aria-label="Retirer">Retirer</button></li>';}).join("")+'</ul>';
  h+='<form class="f rl-add" data-rform="'+l[0]+'" data-rid="'+esc(r.id)+'"><div class="rl-row"><label>'+l[2]+'<input name="c" type="'+(num||l[0]==="passages"?"number":"text")+'"'+(num?' value="'+(items.length?(+items[items.length-1].c||items.length)+1:1)+'" min="1"':l[0]==="passages"?' min="1" placeholder="42"':' required')+'></label><label>'+l[3]+'<input name="t" type="text" required></label></div><button class="btn sec mini" type="submit">Ajouter</button></form></details>';});
 h+='<div class="btnrow"><button class="btn" type="button" data-rfinish="'+esc(r.id)+'">J’ai fini ce livre</button><button class="btn sec" type="button" data-ropen="">Refermer le carnet</button><button class="linkbtn" type="button" data-rdrop="'+esc(r.id)+'">Abandonner ce livre</button></div>'+msgHtml("read")+'</section>';
 return h;}
function sheetPrefill(r){var s=r.sheet||{};if(Object.keys(s).length)return s;var n=rNotes(r);
 s={id_titre:r.title,id_auteur:r.author||"",narr:n.narrateur||"",l_epoque:n.epoque||"",l_lieux:n.lieux.map(function(x){return x.c+(x.t?" ("+x.t+")":"");}).join(" ; "),
  resume:n.chapitres.map(function(x){return "Chapitre "+x.c+" : "+x.t;}).join("\n"),p_qui:n.persos.length?n.persos[0].c+(n.persos[0].t?", "+n.persos[0].t:""):""};
 return s;}
function sheetField(f,s){var v=s[f[0]]||"";var id="sh-"+f[0];
 if(f[2]==="genre")return '<label for="'+id+'">'+f[1]+'<select id="'+id+'" name="'+f[0]+'"><option value="">Choisir…</option>'+GENRES.map(function(g){return '<option'+(v===g?" selected":"")+'>'+esc(g)+'</option>';}).join("")+'</select></label>';
 if(f[2]==="narr")return '<label for="'+id+'">'+f[1]+'<select id="'+id+'" name="'+f[0]+'"><option value="">Choisir…</option>'+NARR.map(function(o){return '<option value="'+o[0]+'"'+(v===o[0]?" selected":"")+'>'+o[1]+'</option>';}).join("")+'</select></label>';
 if(f[2]==="aime")return '<label for="'+id+'">'+f[1]+'<select id="'+id+'" name="'+f[0]+'"><option value="">Choisir…</option>'+["Oui, beaucoup","Plutôt oui","Moyennement","Pas vraiment"].map(function(o){return '<option'+(v===o?" selected":"")+'>'+o+'</option>';}).join("")+'</select></label>';
 if(f[2]==="a")return '<label for="'+id+'">'+f[1]+(f[3]?'<small class="hint">'+esc(f[3])+'</small>':'')+'<textarea id="'+id+'" name="'+f[0]+'" rows="'+(f[0]==="resume"?6:3)+'">'+esc(v)+'</textarea></label>';
 return '<label for="'+id+'">'+f[1]+'<input id="'+id+'" name="'+f[0]+'" type="text" value="'+esc(v)+'"></label>';}
function nLabel(list,v){var x=list.filter(function(o){return o[0]===v;})[0];return x?x[1]:v;}
function renderSheet(c,r){var s=sheetPrefill(r);var view=S.sheetMode==="view";
 var h='<div class="narrow">'+banner(c,esc(r.title),"Ma fiche de lecture","",'<div class="hero-num"><b>'+sheetDone(r)+'/5</b><small>parties</small></div>');
 h+='<div class="bilan-bar noprint"><button class="btn sec mini" type="button" data-sheetclose="1">← Ma bibliothèque</button><span class="btnrow"><button class="btn sec mini" type="button" data-sheetmode="'+(view?"edit":"view")+'">'+(view?"Modifier":"Voir la fiche")+'</button><button class="btn sec mini" type="button" data-act="print-sheet">Imprimer</button></span></div>';
 if(view){h+='<section class="card sheet-view"><h2>'+esc(s.id_titre||r.title)+'</h2>';
  SHEET_PARTS.forEach(function(p){h+='<h3>'+p[0]+'</h3><dl>'+p[1].map(function(f){var v=s[f[0]];if(!v)return "";if(f[2]==="narr")v=nLabel(NARR,v);return '<dt>'+esc(f[1])+'</dt><dd>'+esc(v).replace(/\n/g,"<br>")+'</dd>';}).join("")+'</dl>';});
  return h+'</section></div>';}
 h+='<form class="card f sheetf" id="sheetf" data-rid="'+esc(r.id)+'"><p class="det">Ton carnet a déjà rempli une partie de la fiche. Complète-la avec tes mots ; tu peux enregistrer et revenir plus tard.</p>';
 SHEET_PARTS.forEach(function(p){var ok=p[2].every(function(k){return s[k]&&String(s[k]).trim();});h+='<fieldset class="sheet-part"><legend>'+p[0]+(ok?' <span class="sp-ok">✓</span>':'')+'</legend>'+p[1].map(function(f){return sheetField(f,s);}).join("")+'</fieldset>';});
 h+='<div class="btnrow"><button class="btn" type="submit">Enregistrer ma fiche</button></div>'+msgHtml("read")+'</form></div>';
 return h;}
function readingParents(c){var rs=readingFor(c.id);if(!rs.length)return "";
 return '<ul class="books rp">'+rs.map(function(r){return '<li><span><b>'+esc(r.title)+'</b><small>'+(r.status==="fini"?"fini · fiche "+sheetDone(r)+"/5 parties":"en cours · "+rCount(r)+" note"+(rCount(r)>1?"s":"")+" dans le carnet")+'</small></span></li>';}).join("")+'</ul>';}
function bindReading(){
 document.querySelectorAll("form[data-rform]").forEach(function(f){f.addEventListener("submit",function(e){e.preventDefault();
  var r=(S.reading||[]).filter(function(x){return String(x.id)===f.getAttribute("data-rid");})[0];if(!r)return;var n=rNotes(r);var k=f.getAttribute("data-rform");
  if(k==="meta"){n.epoque=f.elements.epoque.value.trim();n.narrateur=f.elements.narrateur.value;saveReading(r,"Carnet enregistré.");return;}
  var cv=f.elements.c.value.trim(),tv=f.elements.t.value.trim();if(!tv&&!cv)return;n[k].push({c:cv,t:tv});S.rlOpen=S.rlOpen||{};S.rlOpen[r.id+k]=true;saveReading(r,"Ajouté au carnet.");});});
 var sf=document.getElementById("sheetf");if(sf)sf.addEventListener("submit",function(e){e.preventDefault();
  var r=(S.reading||[]).filter(function(x){return String(x.id)===sf.getAttribute("data-rid");})[0];if(!r)return;var s={};
  [].slice.call(sf.elements).forEach(function(el){if(el.name)s[el.name]=el.value.trim();});r.sheet=s;saveReading(r,"Fiche enregistrée ("+sheetDone(r)+"/5 parties complètes).");});
 var rs=document.getElementById("rstartf");if(rs)rs.addEventListener("submit",function(e){e.preventDefault();var pg=parseInt(val("rs-pages"),10);
  saveReading({child:rs.getAttribute("data-child"),title:val("rs-title"),author:val("rs-author")||null,pages:pg>0?pg:null,started:TODAY,notes:{},sheet:{},status:"en_cours"},"Bonne lecture !").then(function(x){if(x){S.rstartOpen=false;S.readOpen=String(x.id);render();}});});}
function readingClick(t){
 if(t.hasAttribute("data-ropen")){S.readOpen=t.getAttribute("data-ropen")||null;render();return true;}
 if(t.hasAttribute("data-rstart")){S.rstartOpen=t.getAttribute("data-rstart")==="1";render();var i=document.getElementById("rs-title");if(i)i.focus();return true;}
 if(t.hasAttribute("data-rdel")){var p=t.getAttribute("data-rdel").split("|");var r=(S.reading||[]).filter(function(x){return String(x.id)===p[0];})[0];if(r){rNotes(r)[p[1]].splice(+p[2],1);saveReading(r);}return true;}
 if(t.hasAttribute("data-rdrop")){if(!t.dataset.ok){t.dataset.ok="1";t.textContent="Confirmer : abandonner";return true;}var id=t.getAttribute("data-rdrop");
  var aft=function(){S.reading=S.reading.filter(function(x){return String(x.id)!==id;});S.readOpen=null;render();};
  if(DEMO)aft();else sb.from("reading").delete().eq("id",id).then(function(r){if(!r.error)aft();});return true;}
 if(t.hasAttribute("data-rfinish")){var r2=(S.reading||[]).filter(function(x){return String(x.id)===t.getAttribute("data-rfinish");})[0];if(!r2)return true;
  var brow={child:r2.child,title:r2.title,author:r2.author||null,pages:r2.pages||null,finished:TODAY};
  var then=function(b){S.books.push(b);r2.status="fini";r2.book_id=b.id;r2.sheet=sheetPrefill(r2);saveReading(r2).then(function(){S.sheetFor=String(r2.id);S.sheetMode="edit";S.readOpen=null;flash("global","Bravo ! « "+r2.title+" » est dans ta bibliothèque. Place à ta fiche de lecture.");window.scrollTo(0,0);});};
  if(DEMO){brow.id="demo-"+Date.now();then(brow);}else sb.from("books").insert(brow).select().then(function(res){if(res.error)flash("read","Erreur : "+res.error.message,true);else then(res.data[0]);});return true;}
 if(t.hasAttribute("data-sheet")){S.sheetFor=t.getAttribute("data-sheet");S.sheetMode=t.getAttribute("data-sheetm")||"view";render();window.scrollTo(0,0);return true;}
 if(t.hasAttribute("data-sheetclose")){S.sheetFor=null;render();return true;}
 if(t.hasAttribute("data-sheetmode")){S.sheetMode=t.getAttribute("data-sheetmode");render();return true;}
 if(t.getAttribute("data-act")==="print-sheet"){var m=S.sheetMode;S.sheetMode="view";render();setTimeout(function(){window.print();S.sheetMode=m;render();},50);return true;}
 return false;}
/* ------------------------------------------------------------ visites guidées (0.20) */
var BULB='<svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7a12 12 0 0 1 7 21.7V33H17v-4.3A12 12 0 0 1 24 7Z" fill="#FFC93C" stroke="#0D3B45" stroke-width="2.6" stroke-linejoin="round"/><rect x="18" y="33" width="12" height="5" rx="1.5" fill="#9CC9C2" stroke="#0D3B45" stroke-width="2.6"/><path d="M20 42h8" stroke="#0D3B45" stroke-width="2.6" stroke-linecap="round"/></svg>';
var TOURS={
 accueil:[["#tour-btn","Bienvenue à l’Académie !","Cette petite visite montre l’essentiel. L’ampoule la relance quand tu veux, sur chaque écran."],[".home-grid","Choisis ton profil","Chaque enfant a sa carte, avec son grade et ses missions du jour. Touche la tienne pour ouvrir ta journée."],[".tow","Le conseil de la semaine","Une astuce pour mieux apprendre ou mieux s’organiser. Tous les conseils sont dans « Conseils »."],[".home-more","Pour les parents","La Vue parents suit la semaine de toute la famille."]],
 jour:[[".kid-hero","Ta carte d’élève","Ton grade, ta promotion et ta semaine. Une semaine tenue (80 % des missions faites) te rapproche du grade suivant."],[".dstrip","Les 7 jours","Touche un jour pour voir ses missions. Rond vide : rien de coché ; demi-rond : commencé ; rond plein : tout fait."],[".nextcard","Ta prochaine mission","Appuie sur « Commencer » : la mission s’ouvre en grand, avec un conseil adapté."],[".pathcard","Le chemin du jour","Toutes les missions de la journée, dans l’ordre. Coche le rond quand c’est fait, puis dis si c’était facile ou difficile."],[".secnav","Tes sections","Ta semaine, ton emploi du temps, ta bibliothèque et ton parcours."],[".pmenu","Changer de profil","Ce bouton ouvre le menu : autres profils, Conseils, Vue parents."]],
 semaine:[[".weeks","Choisir la semaine","Semaine dernière, cette semaine ou semaine prochaine."],[".weeklist","Ta semaine jour par jour","Pour chaque jour : tes missions faites et tes évaluations. Touche un jour pour l’ouvrir."]],
 edt:[[".tt-sum","Ta semaine en un coup d’œil","Les heures de cours, de cours du soir et de sport de la semaine."],[".ttw","L’emploi du temps","Collège en bleu, cours et soutien en violet, sport en orange. Les cours annulés sont barrés et les évaluations signalées sous le jour."],[".weeks","Changer de semaine","Pour regarder la semaine prochaine, par exemple."]],
 livres:[[".read-card","Ton livre en cours","Ouvre ton carnet pour noter les personnages, les lieux, l’époque et le résumé de chaque chapitre."],["[data-rstart]","Commencer un livre","Un nouveau livre ? Ouvre son carnet de lecture : il remplira presque tout seul ta fiche de lecture."],[".books","Tes livres lus","Chaque livre fini compte pour tes badges. Le bouton « Ma fiche de lecture » ouvre ta fiche, prête à imprimer."]],
 parcours:[[".dossier-hero","Ton parcours","Ton grade, ta promotion et tes semaines tenues."],[".ladder","Ton parcours de l’année","Six grades, de Recrue à Maître. Tu ne perds jamais un grade."],["h2=Mes objectifs","Tes objectifs","Un objectif donné par tes professeurs ou tes parents. Coche-le quand tu l’as tenu cette semaine."],["h2=Messages de mon mentor","Les messages de ton mentor","Les messages que tes parents t’ont adressés, gardés ici."],["h2=Mes sceaux","Tes sceaux","Rares : ton mentor les remet à la main pour un vrai effort."]],
 conseils:[[".tipfilter","Trier les conseils","Organisation, devoirs, révisions, leçons, lecture : choisis ce qui t’intéresse."],[".tips-grid","Les conseils","Conseils de l’Académie, de tes professeurs et de livres sur l’art d’apprendre."]],
 parents:[[".alerts-card","À vérifier","Quand le planning ne trouve pas de place pour un devoir, l’alerte arrive ici, et seulement ici. Les alertes passées sont rangées dans l’historique."],[".ptabs","Quatre onglets","La Vue parents est rangée en quatre onglets : Semaine, Enfants, Retours et conseils, Actions. Un chiffre signale ce qui attend votre réponse."],[".kidcards","Les enfants aujourd’hui","Un coup d’œil sur la journée de chacun. Touchez une carte pour ouvrir sa page."],[".bilan-cta","Le bilan de la semaine","Le dimanche, faites le point en famille : ce qui a marché, ce qui a coincé, la semaine qui vient."],[".ovcard","Avancement de la semaine","Le pourcentage de missions faites, jour par jour et pour chaque enfant."],[".hardcard","Points difficiles","Les missions que les enfants ont notées difficiles, avec un conseil pour vous."],[".methcard","Méthodes de travail","Comment les enfants ont révisé. Une méthode trop passive est signalée."],["#tour-btn","Revoir la visite","L’ampoule relance la visite de chaque écran."]],
 "parents-enfants":[[".pend-ideas","Idées à valider","Les idées proposées par les enfants : choisissez une date, puis acceptez ou refusez."],["h2=Bibliothèque","La bibliothèque","Les livres lus et la lecture en cours de chaque enfant."],["h2=Missions ajoutées","Missions ajoutées à la main","Les devoirs que vous avez saisis vous-même, à venir."],[".seals-card","Sceaux et messages du mentor","Pour corriger ou retirer un sceau ou un message déjà donné."]],
 "parents-retours":[[".notes-card","Retours des professeurs","Les trois plus récents par enfant ; « Voir les autres » déplie la suite."],[".ptips-card","Conseils pour les parents","Un conseil par semaine, et tous les autres dépliables. Les enfants ne les voient pas."],[".tips-card","Conseils de la famille","Ceux que vous avez ajoutés : professeurs, livres de méthode."]],
 "parents-actions":[[".acts","Les actions","Mission, saisie rapide, message du mentor, sceau, retour de professeur, conseil, idée : touchez-en une pour ouvrir son formulaire."]],
 bilan:[[".bilan-kid","Une carte par enfant","Les missions faites par catégorie, et quelques points proposés pour en parler ensemble."],[".bk-more","Le détail","Missions pas cochées, missions difficiles, méthodes, fiertés, semaine prochaine."],[".sunday","Préparer la semaine","Cinq gestes à cocher le dimanche, en famille."]],
 parametres:[["[data-fold=lockf]","Code parent","Protégez la Vue parents et les Paramètres des curieux."],["[data-fold=setbackup]","Sauvegarde","Une fois par trimestre, téléchargez une sauvegarde et rangez-la hors de GitHub."],["[data-fold=themesf]","Couleurs de héros","Chaque profil choisit sa couleur."]]};
function tourKey(){var v=curView();if(child(v))return curSection();if(v==="parents"&&(location.hash||"").split("/")[1]==="bilan")return "bilan";if(v==="parents"&&pTab()!=="semaine")return "parents-"+pTab();return v;}
function tourFind(sel){var el=null;
 if(sel.indexOf("h2=")===0){var t=sel.slice(3);[].slice.call(document.querySelectorAll("#root h2")).some(function(h){if(h.textContent.indexOf(t)===0){el=h.closest(".card")||h;return true;}});}
 else el=document.querySelector(sel);
 if(!el)return null;var r=el.getBoundingClientRect();if(!r.width||!r.height||el.offsetParent===null&&getComputedStyle(el).position!=="fixed")return null;return el;}
function tourSteps(k){return (TOURS[k]||[]).filter(function(s){return tourFind(s[0]);});}
function tourStart(k,auto){if(!TOURS[k]||S.focus)return;var steps=tourSteps(k);if(!steps.length)return;S.tour={k:k,i:0,steps:steps,back:document.activeElement};lsSet("kizuna-tour-"+k,"1");tourShow();}
function tourEnd(){var t=S.tour;S.tour=null;var o=document.getElementById("tour");if(o)o.remove();window.removeEventListener("resize",tourPlace);window.removeEventListener("scroll",tourPlace,true);var b=document.getElementById("tour-btn");if(b)b.focus();else if(t&&t.back&&t.back.focus)t.back.focus();}
function tourShow(){var t=S.tour;if(!t)return;var s=t.steps[t.i];var el=tourFind(s[0]);if(!el){if(t.i<t.steps.length-1){t.i++;tourShow();}else tourEnd();return;}
 var o=document.getElementById("tour");if(!o){o=document.createElement("div");o.id="tour";o.innerHTML='<div class="tour-hole"></div><div class="tour-pop" role="dialog" aria-modal="true" aria-labelledby="tour-t" aria-describedby="tour-d"></div>';document.body.appendChild(o);
  o.addEventListener("click",function(e){var b=e.target.closest("[data-tour]");if(!b){if(e.target===o||e.target.classList.contains("tour-hole"))return;return;}var a=b.getAttribute("data-tour");
   if(a==="next"){if(S.tour.i<S.tour.steps.length-1){S.tour.i++;tourShow();}else tourEnd();}else if(a==="prev"){if(S.tour.i>0){S.tour.i--;tourShow();}}else tourEnd();});
  o.addEventListener("keydown",function(e){if(e.key==="Escape"){e.preventDefault();tourEnd();}else if(e.key==="ArrowRight"){var n=o.querySelector('[data-tour="next"]');if(n)n.click();}else if(e.key==="ArrowLeft"){var p=o.querySelector('[data-tour="prev"]');if(p)p.click();}
   else if(e.key==="Tab"){var fs=[].slice.call(o.querySelectorAll("button"));var i=fs.indexOf(document.activeElement);e.preventDefault();fs[(i+(e.shiftKey?-1:1)+fs.length)%fs.length].focus();}});
  window.addEventListener("resize",tourPlace);window.addEventListener("scroll",tourPlace,true);}
 var last=t.i===t.steps.length-1;
 o.querySelector(".tour-pop").innerHTML='<span class="tour-n">'+(t.i+1)+' / '+t.steps.length+'</span><h2 id="tour-t">'+esc(s[1])+'</h2><p id="tour-d">'+esc(s[2])+'</p><div class="tour-btns"><button type="button" class="linkbtn" data-tour="skip">Passer</button><span>'+(t.i?'<button type="button" class="btn sec mini" data-tour="prev">Précédent</button>':'')+'<button type="button" class="btn mini" data-tour="next">'+(last?"C’est parti !":"Suivant")+'</button></span></div>';
 var rr=el.getBoundingClientRect();if(rr.top<70||rr.bottom>window.innerHeight-120){try{el.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}catch(e){el.scrollIntoView();}}
 tourPlace();setTimeout(tourPlace,350);var nb=o.querySelector('[data-tour="next"]');if(nb)nb.focus({preventScroll:true});}
function tourPlace(){var t=S.tour;if(!t)return;var o=document.getElementById("tour");if(!o)return;var el=tourFind(t.steps[t.i][0]);if(!el)return;
 var r=el.getBoundingClientRect(),pad=6,hole=o.querySelector(".tour-hole"),pop=o.querySelector(".tour-pop");
 var top=Math.max(4,r.top-pad),left=Math.max(4,r.left-pad),w=Math.min(window.innerWidth-8,r.width+2*pad),h=Math.min(window.innerHeight-8,r.height+2*pad);
 hole.style.cssText="top:"+top+"px;left:"+left+"px;width:"+w+"px;height:"+h+"px";
 var pw=Math.min(360,window.innerWidth-24);pop.style.width=pw+"px";var ph=pop.offsetHeight;
 var below=top+h+12,above=top-12-ph,y;
 if(below+ph<window.innerHeight-8)y=below;else if(above>8)y=above;else y=Math.max(8,window.innerHeight-ph-(window.innerWidth<=900?96:16));
 var x=Math.min(Math.max(12,r.left+r.width/2-pw/2),window.innerWidth-pw-12);pop.style.top=y+"px";pop.style.left=x+"px";}
function tourAuto(){if(S.tour||S.focus||!S.fam)return;var k=tourKey();var v=curView();if((v==="parents"||v==="parametres")&&!unlocked())return;if(!TOURS[k]||lsGet("kizuna-tour-"+k))return;setTimeout(function(){if(!S.tour&&tourKey()===k)tourStart(k,true);},700);}
function weekNum(){var d=new Date(TODAY+"T12:00:00");var j=new Date(d.getFullYear(),0,1);return Math.floor((d-j)/604800000);}
function tipForm(){
 var t=S.editTip?S.tips.filter(function(x){return String(x.id)===String(S.editTip);})[0]||{}:(S.tipDraft||{});
 var ms=(t.moments||"general").split(",");
 var h='<form class="card f tipf" id="tipf"><h2>'+(S.editTip?"Modifier le conseil":"Nouveau conseil")+'</h2><p class="det">Écrivez le conseil avec vos mots, en deux ou trois phrases. Pour un livre, résumez l’idée : ne recopiez pas de passages.</p>';
 h+='<label for="t-title">Titre<input id="t-title" type="text" required value="'+esc(t.title||"")+'" placeholder="ex. Lire le sujet deux fois"></label>';
 h+='<label for="t-body">Conseil<textarea id="t-body" required rows="3">'+esc(t.body||"")+'</textarea></label>';
 h+='<div class="cols three"><label for="t-src">Source<select id="t-src">'+TIP_SRC.map(function(o){return '<option value="'+o[0]+'"'+((t.source_type||"famille")===o[0]?" selected":"")+'>'+o[1]+'</option>';}).join("")+'</select></label><label for="t-from">Professeur ou livre (facultatif)<input id="t-from" type="text" value="'+esc(t.source||"")+'" placeholder="ex. M. Dupont, ou titre du livre"></label><label for="t-subj">Matière (facultatif)<input id="t-subj" type="text" value="'+esc(t.subject||"")+'"></label></div>';
 var forP=t.child==="parents";
 h+='<fieldset class="kidver" id="t-moms"'+(forP?' hidden':'')+'><legend>Quand l’afficher</legend><div class="m-chips">'+MOMENTS.map(function(m){return '<label class="mchip chk-chip"><input type="checkbox" class="t-mom" value="'+m[0]+'"'+(!forP&&ms.indexOf(m[0])>=0?" checked":"")+'> '+m[1]+'</label>';}).join("")+'</div></fieldset>';
 h+='<fieldset class="kidver" id="t-pctx"'+(forP?'':' hidden')+'><legend>Où l’afficher dans la Vue parents</legend><div class="m-chips">'+PARENT_CTX.map(function(m){return '<label class="mchip chk-chip"><input type="checkbox" class="t-pc" value="'+m[0]+'"'+(forP&&ms.indexOf(m[0])>=0?" checked":"")+'> '+m[1]+'</label>';}).join("")+'</div></fieldset>';
 h+='<label for="t-child">Pour<select id="t-child"><option value="tous">Tous</option>'+children().map(function(c){return '<option value="'+esc(c.id)+'"'+(t.child===c.id?" selected":"")+'>'+esc(c.name)+'</option>';}).join("")+'<option value="parents"'+(t.child==="parents"?" selected":"")+'>Les parents (invisible des enfants)</option></select></label>';
 h+='<div class="btnrow"><button class="btn" type="submit">'+(S.editTip?"Enregistrer les modifications":"Ajouter le conseil")+'</button>'+(S.editTip||S.tipDraft?'<button class="btn sec" type="button" data-act="tip-cancel">Annuler</button>':'')+'</div>'+msgHtml("tip")+(S.tipsMissing&&!DEMO?'<p class="msg err">Exécutez d’abord le bloc SQL « v0.12.0 » dans Supabase.</p>':'')+'</form>';
 return h;}
function renderTipsParents(){
 var fam=S.tips;
 return '<section class="card wide tips-card"><div class="ftitle">'+picto("Conseil",36)+'<h2>Conseils de la famille'+(fam.length?' <small class="cnt">('+fam.length+')</small>':'')+'</h2></div>'+(fam.length?'<div class="scrollbox tips-scroll">'+fam.map(function(t){var c=child(t.child);return '<div class="nrow"><div class="nr-txt"><b>'+esc(t.title)+'</b><small>'+esc(tipSrcLabel({src:t.source_type||"famille",from:t.source||""}))+(t.subject?' · '+esc(t.subject):'')+' · '+esc((t.moments||"general").split(",").map(function(k){return ((t.child==="parents"?PARENT_CTX:MOMENTS).filter(function(m){return m[0]===k;})[0]||["",k])[1];}).join(", "))+' · '+esc(c?c.name:t.child==="parents"?"les parents":"tous")+'</small><p>'+esc(t.body)+'</p></div><div class="nr-btns"><button class="btn sec mini" data-edittip="'+esc(t.id)+'">Modifier</button><button class="btn sec mini" data-deltip="'+esc(t.id)+'">Supprimer</button></div></div>';}).join("")+'</div>':'<p class="none">Ajoutez les conseils des professeurs ou vos fiches de livres de méthode : ils s’affichent dans l’onglet Conseils et au bon moment dans les missions.</p>')+'</section>';}
function footer(){return '<footer class="foot">'+syncLine()+'<a href="#conseils">Conseils</a></footer>';}
function render(){
 if(!S.fam){root.innerHTML='<div class="wrap">'+topbar("parents")+renderParents(true)+footer()+'</div>';bindForms();return;}
 var v=curView();var c=child(v);var t=theme(c);
 var plan=planOf(S.day);
 var h='<div class="wrap'+(c?" kid":"")+'" style="--child:'+t.bg+';--acc:'+t.acc+';--ctxt:'+t.txt+'">';
 h+=topbar(v);
 h+=offBar();
 if(S.msg.global)h+='<p class="msg'+(S.msg.global.e?" err":"")+'" role="status">'+esc(S.msg.global.t)+'</p>';
 if(c){var sec=curSection();
  if(sec==="livres")h+=renderLibrary(c);
  else if(sec==="parcours")h+=renderDossier(c,plan);
  else if(!plan)h+='<div class="card"><p>Aucun planning pour cette période.</p></div>';
  else if(sec==="semaine")h+=renderWeek(c,plan);
  else if(sec==="edt")h+=renderTimetable(c,plan);
  else h+=renderChild(c,plan);}
 else if((v==="parents"||v==="parametres")&&!unlocked())h+=renderLock(v);
 else if(v==="parents"&&(location.hash||"").split("/")[1]==="bilan")h+=renderBilan();
 else if(v==="parents")h+=renderParents(false);
 else if(v==="parametres")h+=renderSettings(false);
 else if(v==="accueil")h+=renderHome();
 else h+=renderTips(plan);
 h+=footer();
 if(c&&S.focus)h+=renderFocus(c);
 h+='</div>';
 root.innerHTML=h;foldForms();bindForms();
 var ttw=document.getElementById("ttw"),ttd=document.getElementById("tt-today");if(ttw&&ttd&&ttw.scrollWidth>ttw.clientWidth)ttw.scrollLeft=Math.max(0,ttd.offsetLeft-50);
 var uc=document.getElementById("u-code");if(uc&&!uc.disabled)uc.focus();
 if(S.tour){var tk=S.tour.k;if(tk!==tourKey())tourEnd();else setTimeout(tourPlace,0);}else tourAuto();
 if(c&&S.focus){var fb=document.querySelector(".focus [data-fdone]")||document.querySelector(".focus [data-fclose]");if(fb)fb.focus();}
}
function hero(c,plan){
 var t=theme(c),g=gradeOf(c.id),st=stampsFor(c.id);
 var goal=g.next?g.next[1]:GRADES[GRADES.length-1][1],base=GRADES[g.i][1],fr=g.next?Math.max(0,Math.min(1,g.tot/goal)):1;
 var h='<section class="hero dossier-hero" style="background-color:'+t.bg+';color:'+t.txt+'"><span class="michi" aria-hidden="true">道</span>';
 h+='<div class="hero-id">'+insignia(g.i,t)+'<div><span class="over">Carte d’élève'+(g.cls?' · promotion '+esc(g.cls):'')+' · '+schoolYearLabel()+'</span><h1>'+esc(c.name)+'</h1><div class="badges"><span class="gname">'+esc(g.name)+'</span></div></div></div>';
 h+='<div class="hero-stats"><div class="wk-prog"><div><span>'+(g.next?'Vers '+esc(g.next[0]):'Grade le plus haut')+'</span><b>'+g.tot+(g.next?'/'+goal:'')+'</b></div><div class="track"><i style="width:'+Math.round(fr*100)+'%;background:'+t.acc+'"></i></div><small>semaines tenues'+(g.next?' · encore '+g.left:'')+'</small></div>';
 h+='<div class="wk-prog wk-now"><div><span>Cette semaine</span><b>'+g.weekPct+' %</b></div><div class="track"><i style="width:'+g.weekPct+'%;background:'+t.acc+'"></i></div><small>'+(g.weekPct>=TENUE?'Semaine tenue pour l’instant':'80 % pour la tenir')+'</small></div>';
 h+='<div class="hero-stamps">'+stampHtml(50,"努")+'<div><b>'+st.length+'</b><small>sceau'+(st.length>1?"x":"")+'</small></div></div></div>';
 return h+'</section>';
}

/* --- missions : ordre, prochaine, état --- */
function isTask(b){var kd=KINDS[b.k];return !!(kd&&kd[2]&&b.id)||(b.k==="rel"&&b.rel&&(subs(b.rel.today).length||subs(b.rel.tomorrow).length));}
function relIds(b){return subs(b.rel.today).map(function(s){return b.rel.idp+"|t|"+s;}).concat(subs(b.rel.tomorrow).map(function(s){return b.rel.idp+"|d|"+s;}));}
function isDoneB(b){if(b.k==="rel"&&b.rel){var ids=relIds(b);return ids.length&&ids.every(function(i){return S.done[i];});}return !!S.done[b.id];}
function keyOf(b){return b.k==="rel"&&b.rel?b.rel.idp:b.id;}
function tasksOf(cid,date){var all=blocksOf(cid,date);return all.filter(function(b){return !b.over&&isTask(b);}).concat(all.filter(function(b){return b.over&&isTask(b);}));}
function mprog(cid,date){var t=tasksOf(cid,date);return {n:t.filter(isDoneB).length,t:t.length};}
function nextTask(cid,date){return tasksOf(cid,date).filter(function(b){return !isDoneB(b);})[0]||null;}
function dayChip(c,d){var p=mprog(c.id,d.date);var st=p.t&&p.n===p.t?"full":p.n?"part":"";return '<button class="dchip'+(d.date===TODAY?" is-today":"")+'" data-day="'+d.date+'" aria-pressed="'+(d.date===S.day)+'" aria-label="'+esc(d.long)+', '+(p.t?(p.n===p.t?"tout fait":p.n?p.n+" sur "+p.t+" fait"+(p.n>1?"s":""):"rien de coché"):"rien de prévu")+'"><span>'+esc(d.short.charAt(0))+'</span><b>'+d.num+'</b><i class="'+st+'"></i></button>';}

function renderChild(c,plan){
 var days=plan.data.days;var di=dayInfo(S.day)||days[0];var p=mprog(c.id,S.day);var full=p.t&&p.n===p.t;
 var sc=((plan.data.children[c.id]||{}).school||{})[S.day];
 var hr=new Date().getHours();
 var title=S.day===TODAY?(hr<18?"Bonjour ":"Bonsoir ")+c.name:di.long;
 var tasks=tasksOf(c.id,S.day);var left=tasks.filter(function(b){return !isDoneB(b);});
 var lastT=left.length?left[left.length-1].t:null;
 var sub=!tasks.length?"Rien de prévu ce jour-là.":full?"Tout est fait. Bravo !":(tasks.length-left.length)+" mission"+(tasks.length-left.length>1?"s":"")+" faite"+(tasks.length-left.length>1?"s":"")+", encore "+left.length+"."+(lastT&&!left[left.length-1].over?" Dernière prévue à "+lastT+".":"");
 var h='<div class="today"><section class="main-col">';
 var t0=theme(c),st0=stampsFor(c.id);
 h+=banner(c,esc(S.day===TODAY?di.long:(S.day<TODAY?"Journée passée":di.long))+(sc?' · '+esc(sc):''),title,sub,
  '<div class="hero-ring">'+ring(p.t?p.n/p.t:0,76,8,p.t?p.n+"/"+p.t:"–",t0.acc,"rgba(255,255,255,.25)",t0.txt)+'<small>missions<br>du jour</small></div>'+(function(){var g=gradeOf(c.id);return '<div class="hero-week"><small>Ma semaine</small><b>'+g.weekPct+' %</b><small>'+(g.weekPct>=TENUE?'tenue pour l’instant':'80 % pour la tenir')+'</small></div>';})(),true);
 h+='<div class="dstrip" role="group" aria-label="Jours de la semaine">'+days.map(function(d){return dayChip(c,d);}).join("")+'</div><p class="dlegend" aria-hidden="true"><span><i></i>rien de coché</span><span><i class="part"></i>commencé</span><span><i class="full"></i>tout fait</span></p>';
 var nt=nextTask(c.id,S.day);
 if(nt){h+='<div class="nextcard">'+'<span class="nc-pic">'+picto(pictoName(nt)||"Devoir",64)+'</span><div class="nc-txt"><span class="kicker acc">'+(S.day===TODAY?"Prochaine mission":"Première mission")+(nt.over?"":" · "+esc(nt.t))+'</span><h2>'+esc(nt.l)+'</h2>'+(nt.d?'<p>'+esc(nt.d)+'</p>':'')+'</div><button class="cta" data-focus="'+esc(keyOf(nt))+'">Commencer</button></div>';}
 else if(full)h+='<div class="boom"><span>JOURNÉE BOUCLÉE</span><small>Une journée de plus pour tenir ta semaine.</small></div>';
 var nd0=addDays(S.day,1),due0=dueFor(c.id,nd0),ev0=evalsFor(c.id).filter(function(e){return e[0]>=S.day;})[0],sm0=mentorFor(c.id),td0=tipOfDay(c);
 if(ev0||due0.length||sm0||td0||activeGoals(c.id).length){h+='<div class="m-alerts">';
  if(ev0){var dd0=dDiff(ev0[0],S.day);h+='<div class="m-ev"><b>'+(dd0===0?"Épreuve aujourd’hui":dd0===1?"Épreuve demain":"Épreuve dans "+dd0+" jours")+'</b><span>'+esc(ev0[1])+'</span></div>';}
  if(due0.length)h+='<details class="m-due"><summary>Pour demain : '+due0.length+' chose'+(due0.length>1?"s":"")+' à rendre</summary><ul class="dots">'+due0.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul></details>';
  if(sm0)h+=mentorCard(sm0,true);
  activeGoals(c.id).slice(0,1).forEach(function(n){h+=goalHtml(n,true);});
  if(td0)h+=tipDayCard(td0,true);
  h+='</div>';}
 var pend=pendingExtras(c.id,S.day);
 if(pend.length)h+='<section class="card pending"><h2>Ajouté par les parents</h2><p class="det">Ces missions seront placées dans ta journée à la prochaine synchronisation (7h ou 18h).</p><ul class="dots">'+pend.map(function(e){return '<li>'+esc((e.subject?e.subject+" : ":"")+e.text)+'</li>';}).join("")+'</ul></section>';
 h+=renderEdt(c,S.day);
 h+='<section class="card pathcard"><div class="pc-head"><h2>Le chemin du jour</h2><span>'+p.n+' sur '+p.t+'</span></div>'+(S.diffMissing&&!DEMO?'<p class="msg err">Les notes de difficulté ne sont pas encore enregistrées : un parent doit exécuter le bloc SQL « v0.9.0 » dans Supabase.</p>':'')+(lsGet("kizuna-hint-check")?'':'<p class="hint">Touche le <b>rond</b> quand une mission est faite. Touche son <b>nom</b> pour l’ouvrir en grand. <button class="linkbtn" data-act="hint-ok">Compris</button></p>')+'<ol class="path">';
 var all=blocksOf(c.id,S.day);var bl=all.filter(function(b){return !b.over;});var over=all.filter(function(b){return b.over;});
 var nk=nt?keyOf(nt):null;
 bl.forEach(function(b){h+=stepHtml(b,nk);});
 h+='</ol>';
 if(over.length){h+='<div class="overbox"><h3>Pas de place avant le coucher</h3><p>Trop de travail pour ce jour-là : voyez avec un parent pour le faire plus tôt, le matin ou en version courte.</p><ol class="path">';over.forEach(function(b){h+=stepHtml(b,nk);});h+='</ol></div>';}
 h+='</section></section>'+renderSide(c,plan)+'</div>';
 return h;
}
function stepHtml(b,nk){
 var task=isTask(b),done=task&&isDoneB(b),now=task&&keyOf(b)===nk;
 var pn=pictoName(b);
 if(!task)return '<li class="step calm"><span class="node-col"><span class="dot"></span></span><div class="st-txt"><span class="st-t">'+esc(b.t)+'</span><span class="st-l">'+esc(b.l)+'</span></div></li>';
 var node;
 if(b.k==="rel")node='<span class="node rel'+(done?" done":"")+'">'+(done?'':'<span class="np">'+svgPic(pn)+'</span>')+'</span>';
 else node='<span class="node-wrap"><input type="checkbox" class="chk node'+(now?" now":"")+(S.pop===b.id?" pop":"")+'" data-id="'+esc(b.id)+'" aria-label="Fait : '+esc(b.l)+'"'+(done?" checked":"")+'>'+(done?'':'<span class="np" aria-hidden="true">'+svgPic(pn)+'</span>')+(done&&S.diff[b.id]?diffBadge(S.diff[b.id]):'')+'</span>';
 var h='<li class="step'+(done?" done":"")+(now?" now":"")+(b.k==="loi"?" loi":"")+'"><span class="node-col">'+node+'</span><div class="st-txt">';
 h+=(now?'<span class="st-t acc">En cours · '+esc(b.over?"sans horaire":b.t)+'</span>':'<span class="st-t">'+esc(b.over?"Sans horaire":b.t)+'</span>');
 h+='<button class="st-l link" data-focus="'+esc(keyOf(b))+'">'+esc(b.l)+'</button>';
 if(b.d)h+='<span class="st-d">'+esc(b.d)+'</span>';
 if(b.k==="rel"&&b.rel)h+=renderRel(b.rel);
 if(done&&METH_KINDS[b.k]&&S.methOpen===b.id&&S.rate!==b.id)h+=methRow(b.id);
 else if(done&&METH_KINDS[b.k]&&S.meth[b.id]&&S.rate!==b.id)h+='<button class="linkbtn diff-link" data-mopen="'+esc(b.id)+'">Méthode : '+esc(methSummary(b.id))+' · modifier</button>';
 else if(done&&METH_KINDS[b.k]&&S.rate!==b.id)h+='<button class="linkbtn diff-link" data-mopen="'+esc(b.id)+'">Dire comment j’ai travaillé</button>';
 if(done&&RATEABLE[b.k]){if(S.rate===b.id)h+=rateRow(b.id);else h+='<button class="linkbtn diff-link" data-rateopen="'+esc(b.id)+'">'+(S.diff[b.id]?"Difficulté "+S.diff[b.id]+"/5 · "+DIFF[S.diff[b.id]][0].toLowerCase()+" · modifier":"Noter la difficulté")+'</button>';}
 return h+'</div></li>';
}
function svgPic(name){return name&&PICTOS[name]?'<svg width="30" height="30" viewBox="0 0 48 48">'+PICTOS[name]+'</svg>':'';}
function renderRel(r){
 function row(lab,arr,code,empty){arr=subs(arr);if(!arr.length)return empty?'<div class="row"><em>'+lab+'</em><span class="none">'+empty+'</span></div>':"";var s='<div class="row"><em>'+lab+'</em>';arr.forEach(function(sub){var id=r.idp+"|"+code+"|"+sub;s+='<button class="chip" data-id="'+esc(id)+'" aria-pressed="'+(!!S.done[id])+'">'+esc(sub)+'</button>';});return s+'</div>';}
 return '<div class="rel">'+row("Du jour",r.today,"t")+row("De demain",r.tomorrow,"d","Pas de leçon à relire pour demain : profites-en pour avancer ou lire.")+'</div>';
}
function side(title,inner,cls){return '<section class="card side-card'+(cls?" "+cls:"")+'"><h2>'+title+'</h2>'+inner+'</section>';}
function renderSide(c,plan){
 var h='<aside class="side">';
 var p=mprog(c.id,S.day),w=weekProg(c.id,plan);
 var m=mentorFor(c.id);
 if(m)h+=mentorCard(m,false);
 var ag=activeGoals(c.id);
 if(ag.length)h+=side("Mon objectif",ag.slice(0,2).map(function(n){return goalHtml(n,true);}).join(""));
 var nd=addDays(S.day,1);var due=dueFor(c.id,nd);
 h+=side("Pour demain, "+esc(fmtDate(nd,{weekday:"long",day:"numeric"})),due.length?'<ul class="dots">'+due.map(function(x){return "<li>"+esc(x)+"</li>";}).join("")+'</ul>':'<p class="none">Rien de noté pour demain.</p>');
 var ev=evalsFor(c.id).filter(function(e){return e[0]>=S.day;});
 if(ev.length){var e=ev[0],d=dDiff(e[0],S.day);
  h+='<section class="card evalcard"><span class="kicker acc">'+esc(fmtDate(e[0],{weekday:"long",day:"numeric"}))+'</span><h2>'+(d===0?"Épreuve aujourd’hui":d===1?"Épreuve demain":"Épreuve dans "+d+" jours")+'</h2><p>'+esc(e[1])+'</p>'+(ev.length>1?'<a class="more" href="#'+esc(c.id)+'/semaine">'+(ev.length-1)+' autre'+(ev.length>2?"s":"")+' à venir</a>':'')+'</section>';}
 var td=tipOfDay(c);if(td)h+=tipDayCard(td,false);
 return h+'</aside>';
}
function renderWeek(c,plan){
 var wp=weekProg(c.id,plan);var h='<div class="narrow">'+banner(c,esc(plan.data.title),"Ma semaine","",'<div class="hero-ring">'+ring(wp.t?wp.n/wp.t:0,72,8,pct(wp)+"%",theme(c).acc,"rgba(255,255,255,.25)",theme(c).txt)+'</div>')+weeksNav();
 h+='<section class="card"><ol class="weeklist">';
 plan.data.days.forEach(function(d){var p=mprog(c.id,d.date);var sc=((plan.data.children[c.id]||{}).school||{})[d.date]||"";var ev=evalsFor(c.id).filter(function(e){return e[0]===d.date;});
  h+='<li><button class="wrow'+(d.date===TODAY?" is-today":"")+'" data-day="'+d.date+'" data-sec="jour">'+ring(p.t?p.n/p.t:0,52,6,p.t?p.n+"/"+p.t:"–")+'<span class="wr-txt"><b>'+esc(d.date===TODAY?"Aujourd’hui · "+d.long:d.long)+'</b><small>'+esc(sc)+'</small>'+(ev.length?'<small class="evtxt">Évaluation : '+esc(ev.map(function(e){return e[1];}).join(" ; "))+'</small>':'')+'</span><span class="chev" aria-hidden="true">›</span></button></li>';});
 h+='</ol></section>';
 var ev=evalsFor(c.id);
 h+=side("Évaluations à venir",ev.length?ev.map(function(e){var d=dDiff(e[0],TODAY);var lab=d<0?"passée":d===0?"aujourd’hui":d===1?"demain":"J-"+d;return '<div class="ev'+(d<0?" past":"")+'"><span>'+esc(e[1])+'<small>'+esc(fmtDate(e[0]))+'</small></span><b>'+lab+'</b></div>';}).join(""):'<p class="none">Aucune évaluation notée.</p>');
 var ids=ideasFor(c.id).filter(function(x){return !x.date||x.date>=addDays(TODAY,-1);});
 h+=side("Idées pour toi",(ids.length?ids.map(function(x){var id="idea|"+x.id;var k=(IDEA_KINDS.filter(function(z){return z[0]===x.kind;})[0]||["","Idée"])[1];
   return '<div class="xl">'+picto("Loisir",38)+'<span><small class="loi-t">'+esc(k)+(x.date?' · '+esc(fmtDate(x.date))+(x.time?' '+esc(x.time):''):'')+'</small><b>'+esc(x.title)+'</b>'+(x.detail?'<small>'+esc(x.detail)+'</small>':'')+(x.link?'<a href="'+esc(x.link)+'" rel="noopener" target="_blank">Lien</a>':'')+'</span><input type="checkbox" class="chk" data-id="'+esc(id)+'" aria-label="Fait : '+esc(x.title)+'"'+(S.done[id]?" checked":"")+'></div>';}).join(""):'<p class="none">Pas d’idée pour le moment.</p>')+kidIdeaBlock(c));
 return h+'</div>';
}
function renderLibrary(c){
 if(S.sheetFor){var sr=readingFor(c.id).filter(function(x){return String(x.id)===S.sheetFor;})[0];if(sr)return renderSheet(c,sr);S.sheetFor=null;}
 var bk=booksFor(c.id);
 var h='<div class="narrow">'+banner(c,"Bibliothèque de l’Académie","Ma bibliothèque","",'<div class="hero-num"><b>'+bk.length+'</b><small>livre'+(bk.length>1?"s":"")+'</small></div><div class="hero-num"><b>'+fmtN(pagesOf(bk))+'</b><small>pages</small></div>');
 readingFor(c.id).filter(function(r){return r.status!=="fini";}).forEach(function(r){h+=readingCard(c,r);});
 h+='<section class="card side-card">'+(S.rstartOpen?'<form class="f" id="rstartf" data-child="'+esc(c.id)+'"><h2>Je commence un livre</h2><p class="det">Ton carnet de lecture t’aidera à retenir l’histoire et à faire ta fiche.</p><label for="rs-title">Titre<input id="rs-title" type="text" required></label><div class="cols two"><label for="rs-author">Auteur (facultatif)<input id="rs-author" type="text"></label><label for="rs-pages">Pages (facultatif)<input id="rs-pages" type="number" min="1" max="5000" inputmode="numeric"></label></div><div class="btnrow"><button class="btn" type="submit">Ouvrir mon carnet</button><button class="btn sec" type="button" data-rstart="0">Annuler</button></div>'+msgHtml("read")+(S.readingMissing&&!DEMO?'<p class="msg err">Exécutez d’abord le bloc SQL « v0.18.0 » dans Supabase.</p>':'')+'</form>':'<button class="cta" type="button" data-rstart="1">Je commence un livre</button>')+'</section>';
 h+='<section class="card side-card">'+(S.bookOpen?bookForm(c.id):'<button class="cta sec-cta" type="button" data-act="book-open">J’ai fini un livre (sans carnet)</button>')+'</section>';
 h+='<section class="card side-card">'+(bk.length?'<ul class="books">'+bk.map(function(b){return '<li>'+picto("Lecture",40)+'<span><b>'+esc(b.title)+'</b>'+(b.author?' · '+esc(b.author):'')+'<small>'+(b.pages?fmtN(+b.pages)+' pages · ':'')+(b.finished?esc(fmtDate(b.finished,{day:"numeric",month:"short",year:"numeric"})):'')+'</small>'+(function(){var rr=readingFor(c.id).filter(function(x){return String(x.book_id)===String(b.id);})[0];return rr?'<button class="btn sec mini" type="button" data-sheet="'+esc(rr.id)+'" data-sheetm="'+(sheetDone(rr)===5?"view":"edit")+'">Ma fiche de lecture · '+sheetDone(rr)+'/5</button>':'';})()+'</span><button class="linkbtn" data-delbook="'+esc(b.id)+'" aria-label="Retirer '+esc(b.title)+'">Retirer</button></li>';}).join("")+'</ul>':'<p class="none">Note ici chaque livre terminé, même pour le plaisir.</p>')+'</section>';
 return h+'</div>';
}
function renderStamps(c,plan){
 var st=stampsFor(c.id);
 var h='<div class="narrow">'+hero(c,plan||planOf(TODAY)||S.plans[S.plans.length-1]);
 h+=side("Mes tampons de l’Académie",st.length?st.map(function(x){return '<div class="stamp-row">'+stampHtml(46)+'<span><b>'+esc((x.title||"")+(x.note?" · "+x.note:""))+'</b>'+(x.message?'<small>« '+esc(x.message)+' »</small>':'')+'<small>'+esc(fmtDate(x.date||x.created_at.slice(0,10)))+'</small></span></div>';}).join(""):'<p class="none">Ton premier tampon arrivera après une bonne note préparée avec tes révisions.</p>');
 var kn=notesFor(c.id,true);
 var gl=activeGoals(c.id);
 if(gl.length)h+=side("Mes objectifs",gl.map(function(n){return goalHtml(n);}).join(""));
 h+=side("Ce que pensent mes professeurs",kn.length?kn.map(kidNoteHtml).join(""):'<p class="none">Quand tes professeurs donnent des nouvelles, tes parents peuvent les partager ici.</p>');
 h+=side("Comment monter de niveau",'<ul class="dots"><li>Un niveau toutes les 40 missions cochées.</li><li>« Jours de suite » : au moins 80 % de la journée faite.</li><li>Lecteur : 15 lectures ou 3 livres. Stratège : 10 révisions. Pilier de la maison : 15 tâches.</li><li>Un tampon : une bonne note préparée avec tes révisions.</li></ul>');
 return h+'</div>';
}
function renderFocus(c){
 var tasks=tasksOf(c.id,S.day);var i=-1;tasks.forEach(function(b,j){if(keyOf(b)===S.focus)i=j;});
 if(i<0){S.focus=null;return "";}
 var b=tasks[i],done=isDoneB(b),n=tasks.filter(isDoneB).length;
 var h='<div class="focus-bg" data-fclose="1"></div><div class="focus" role="dialog" aria-modal="true" aria-labelledby="f-title"><header><button class="fx" data-fclose="1" aria-label="Fermer">×</button><span class="fbar"><i style="width:'+Math.round(100*n/tasks.length)+'%"></i></span><b>'+(i+1)+'/'+tasks.length+'</b></header>';
 h+='<div class="fbody">'+picto(pictoName(b)||"Devoir",84)+'<span class="kicker acc">'+(KINDS[b.k]?esc(KINDS[b.k][0]):"Mission")+(b.over?"":" · "+esc(b.t))+'</span><h2 id="f-title">'+esc(b.l)+'</h2>'+(b.d?'<p>'+esc(b.d)+'</p>':'');
 if(b.k==="rel"&&b.rel)h+=renderRel(b.rel)+'<p class="st-d">Touche chaque matière quand elle est relue.</p>';
 var lrm=b.k==="rev"?lastRevMethods(c.id):[];
 if(lrm.length>=2&&lrm.every(function(x){return x.v.m.length&&x.v.m.every(function(k){return k==="relu";});}))h+='<div class="tipbox coach"><b>Coup de pouce</b><span>Tes dernières révisions : seulement relire le cours. Cette fois, essaie de te faire interroger ou de refaire des exercices sans la correction : c’est plus efficace pour retenir.</span></div>';
 var ft=tipFor(c.id,b.k==="lec"?"lec":b.k==="app"?"app":b.k==="rev"?"rev":b.k==="dev"?"dev":"x",(new Date(TODAY+"T12:00:00").getDate())+i);
 if(ft)h+='<div class="tipbox ctx"><span class="tip-src">'+esc(tipSrcLabel(ft))+'</span><b>'+esc(ft.title)+'</b><span>'+esc(ft.body)+'</span></div>';
 if(b.k==="rev")h+='<div class="tipbox">'+stampHtml(34,"努")+'<span>Une épreuve bien préparée, un vrai effort ? Ton mentor peut te remettre le sceau de l’effort.</span></div>';
 else if(b.k==="dev")h+='<div class="tipbox">'+stampHtml(34)+'<span>Bloqué ? Note ta question pour la poser au professeur.</span></div>';
 h+='</div><footer>';
 if(S.methFocus===b.id&&done)h+=methRow(b.id,"Valider et continuer");
 else if(b.k==="rel")h+='<button class="cta" data-fnext="1">'+(done?"Suivante":"Continuer")+'</button>';
 else if(done)h+=(RATEABLE[b.k]?rateRow(b.id,S.diff[b.id]?"Difficulté notée : tu peux la changer":"C’était comment ?"):'')+'<button class="cta sec" data-fundo="'+esc(b.id)+'">Pas encore fait</button><button class="cta" data-fnext="1">Suivante</button>';
 else if(RATEABLE[b.k])h+='<div class="raterow fdone" role="group" aria-label="C’est fait : difficulté"><span class="rr-q">C’est fait ! C’était comment ?</span><div class="rr-btns">'+[1,2,3,4,5].map(function(n){var d=DIFF[n];return '<button class="rr" data-fdone="'+esc(b.id)+'" data-n="'+n+'" style="--dc:'+d[1]+';--dt:'+d[2]+'"><b>'+n+'</b><small>'+d[0]+'</small></button>';}).join("")+'</div></div><button class="cta" data-fdone="'+esc(b.id)+'">C’est fait (sans noter)</button>';
 else h+='<button class="cta" data-fdone="'+esc(b.id)+'">C’est fait</button>';
 return h+'<button class="linkbtn" data-fclose="1">Plus tard</button></footer></div>';
}
function msgHtml(k){var m=S.msg[k];return m?'<p class="msg'+(m.e?" err":"")+'">'+esc(m.t)+'</p>':"";}
function kidOptions(withAll){return children().map(function(c){return '<option value="'+esc(c.id)+'">'+esc(c.name)+'</option>';}).join("")+(withAll?'<option value="tous">Tous</option>':'');}
var PTABS=[["semaine","Semaine","Avancement"],["enfants","Enfants","Loisir"],["retours","Retours et conseils","Prof"],["actions","Actions","Devoir"]];
function pTab(){var s=(location.hash||"").replace("#","").split("/");return s[0]==="parents"&&["enfants","retours","actions"].indexOf(s[1])>=0?s[1]:"semaine";}
function pTabsNav(cur){var pend=S.ideas.filter(function(x){return x.status==="proposee";}).length;
 return '<nav class="ptabs" aria-label="Sections de la Vue parents">'+PTABS.map(function(t){var n=t[0]==="enfants"?pend:t[0]==="semaine"?planAlerts().now.length:0;return '<a class="ptab" href="#parents'+(t[0]==="semaine"?"":"/"+t[0])+'"'+(t[0]===cur?' aria-current="page"':'')+'>'+picto(t[2],26)+'<span>'+esc(t[1])+'</span>'+(n?'<b class="pbadge" aria-label="'+n+(t[0]==="semaine"?' à vérifier':' à valider')+'">'+n+'</b>':'')+'</a>';}).join("")+'</nav>';}
var MOIS=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
function alertDate(n,p){var s=(n[0]+" "+n[1]).toLowerCase(),re=/(\d{1,2})(?:er)? (janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/g,m,best=null;
 var y0=+p.data.days[0].date.slice(0,4),m0=+p.data.days[0].date.slice(5,7);
 while((m=re.exec(s))){var mo=MOIS.indexOf(m[2])+1,y=y0+(mo<m0-6?1:0),d=y+"-"+(mo<10?"0":"")+mo+"-"+(+m[1]<10?"0":"")+(+m[1]);if(!best||d>best)best=d;}
 return best;}
function planAlerts(){var out=[],seen={};
 S.plans.forEach(function(p){var days=p.data&&p.data.days;if(!days||!days.length)return;var last=days[days.length-1].date;if(last<addDays(TODAY,-21))return;
  (p.data.notes||[]).forEach(function(n){var k=n[0]+"|"+n[1];if(seen[k])return;seen[k]=1;out.push({t:n[0],x:n[1],d:alertDate(n,p)||last});});});
 return {now:out.filter(function(a){return a.d>=TODAY;}).sort(function(a,b){return a.d<b.d?-1:1;}),past:out.filter(function(a){return a.d<TODAY;}).sort(function(a,b){return a.d<b.d?1:-1;})};}
function alertItem(a){return '<li><b>'+esc(a.t)+'</b><span>'+esc(a.x)+'</span></li>';}
function renderAlerts(){var al=planAlerts();if(!al.now.length&&!al.past.length)return "";
 var h='<section class="card alerts-card'+(al.now.length?"":" calm")+'"><div class="ftitle">'+picto("Difficile",36)+'<h2>'+(al.now.length?'À vérifier <small class="cnt">('+al.now.length+')</small>':'Aucune alerte en cours')+'</h2></div>';
 if(al.now.length)h+='<p class="det">Ce que le planning n’a pas pu placer ou trouve anormal : à régler avec l’enfant, ou à signaler au professeur. Les enfants ne voient pas ces alertes.</p><ul class="alist">'+al.now.map(alertItem).join("")+'</ul>';
 if(al.past.length)h+='<details class="ahist" data-more="ahist"'+(S.open&&S.open.ahist?" open":"")+'><summary>Historique : '+al.past.length+' alerte'+(al.past.length>1?"s":"")+' passée'+(al.past.length>1?"s":"")+'</summary><ul class="alist">'+al.past.map(alertItem).join("")+'</ul></details>';
 return h+'</section>';}
function goForm(id){if(pTab()!=="actions"){S.afterRender=id;location.hash="#parents/actions";return;}render();var el=document.getElementById(id);if(el)(el.closest("details")||el).scrollIntoView({block:"start"});}
function renderSealsParents(){
 var h='<section class="card seals-card"><div class="ftitle">'+stampHtml(36,"努")+'<h2>Sceaux et messages du mentor</h2></div><p class="det">Pour corriger ou retirer un sceau ou un message déjà donné. « Modifier » ouvre le formulaire dans l’onglet Actions.</p>';
 function srow(x){return '<div class="xl"><span><span class="xl-h"><b>'+esc((x.title||"")+(x.note?" · "+x.note:""))+'</b></span>'+(x.message?'<small>« '+esc(x.message)+' »</small>':'')+'<small>'+esc(fmtDate(x.date||x.created_at.slice(0,10)))+'</small></span><span class="nr-btns"><button class="btn sec mini" data-editstamp="'+esc(x.id)+'">Modifier</button><button class="btn sec mini'+(S.confirmDel==="s"+x.id?" danger":"")+'" data-delstamp="'+esc(x.id)+'">'+(S.confirmDel==="s"+x.id?"Confirmer la suppression":"Supprimer")+'</button></span></div>';}
 h+='<h3 class="sub-h">Sceaux</h3>';
 var any=false;
 children().forEach(function(c){var st=stampsFor(c.id);if(!st.length)return;any=true;
  h+='<div class="nk"><h4>'+esc(c.name)+' <small class="cnt">('+st.length+')</small></h4>'+st.slice(0,3).map(srow).join("")+(st.length>3?'<details class="more-notes"'+(S.open&&S.open["sk-"+c.id]?" open":"")+' data-more="sk-'+esc(c.id)+'"><summary>Voir les '+(st.length-3)+' autres</summary>'+st.slice(3).map(srow).join("")+'</details>':'')+'</div>';});
 if(!any)h+='<p class="none">Aucun sceau donné pour le moment.</p>';
 var ms=S.sensei.slice().sort(function(a,b){return a.created_at<b.created_at?1:-1;});
 function mrow(m){var c=child(m.child);return '<div class="xl"><span><span class="xl-h"><b>'+esc(c?c.name:"Toute la promotion")+'</b> · '+esc(fmtDate(m.created_at.slice(0,10)))+'</span><small>'+esc(m.text)+'</small></span><span class="nr-btns"><button class="btn sec mini" data-editmsg="'+esc(m.id)+'">Modifier</button><button class="btn sec mini'+(S.confirmDel==="m"+m.id?" danger":"")+'" data-delmsg="'+esc(m.id)+'">'+(S.confirmDel==="m"+m.id?"Confirmer la suppression":"Supprimer")+'</button></span></div>';}
 h+='<h3 class="sub-h">Messages du mentor</h3>'+(ms.length?ms.slice(0,3).map(mrow).join("")+(ms.length>3?'<details class="more-notes"'+(S.open&&S.open["mm"]?" open":"")+' data-more="mm"><summary>Voir les '+(ms.length-3)+' autres</summary>'+ms.slice(3).map(mrow).join("")+'</details>':''):'<p class="none">Aucun message pour le moment.</p>');
 return h+'</section>';
}
function renderParents(noFam){
 var h="";var tp=THEMES[themeName(null)];var tab=noFam?"semaine":pTab();
 if(!noFam)h+=pTabsNav(tab);
 if(noFam){
  h+='<div class="card warn"><h2>Il manque les réglages de la famille</h2><p>Importez le fichier d’historique (réglages, semaines déjà faites et coches).</p></div>';
 } else if(tab==="semaine"){
  var plan=planOf(S.day);
  var tot={n:0,t:0};children().forEach(function(c){var w=weekProg(c.id,plan);tot.n+=w.n;tot.t+=w.t;});
  var evc=0;children().forEach(function(c){evc+=evalsFor(c.id).filter(function(e){return e[0]>=TODAY&&dDiff(e[0],TODAY)<=7;}).length;});
  h+='<section class="hero" style="background-color:'+tp.bg+';color:'+tp.txt+'"><div class="hero-id"><div><span class="over">Bureau du sensei</span><h1>'+esc(plan?plan.data.title.replace(/^Du /,"Semaine du "):"Semaine")+'</h1></div></div><div class="hero-stats parents"><div><b>'+pct(tot)+' %</b><small>de la semaine</small></div><div><b style="color:'+tp.acc+'">'+evc+'</b><small>évaluations à 7 jours</small></div><div><b>'+S.stamps.length+'</b><small>tampons</small></div></div></section>';
  h+=renderAlerts();
  var wdn=new Date(TODAY+"T12:00:00").getDay();
  h+='<div class="bilan-cta'+(wdn===0||wdn===6?" hot":"")+'"><span>'+(wdn===0?"C’est dimanche : le bilan de la semaine est prêt.":wdn===6?"Demain, c’est le bilan de la semaine.":"Où en est la semaine ?")+'</span><a class="btn mini" href="#parents/bilan">Bilan de la semaine</a></div>';
  var pendN=S.ideas.filter(function(x){return x.status==="proposee";}).length;
  if(pendN)h+='<a class="palert" href="#parents/enfants">'+picto("Loisir",28)+'<span><b>'+pendN+' idée'+(pendN>1?"s":"")+' proposée'+(pendN>1?"s":"")+'</b> par les enfants attend'+(pendN>1?"ent":"")+' votre réponse</span><span class="chev" aria-hidden="true">›</span></a>';
  h+=lockOn()?'<div class="lockhint"><button class="btn sec mini lockbtn" type="button" data-act="lock-now">Verrouiller l’espace parents</button></div>':'<div class="lockhint nocode"><span>Pas encore de code parent pour protéger cet espace.</span><a class="btn sec mini" href="#parametres">Créer le code</a></div>';
  h+='<div class="kidcards">'+children().map(function(c){var t=theme(c),mp=mprog(c.id,TODAY),w=weekProg(c.id,plan),ev=evalsFor(c.id).filter(function(e){return e[0]>=TODAY;})[0];
   return '<button class="kidcard" data-go="'+esc(c.id)+'" data-day="'+TODAY+'" style="--child:'+t.bg+'">'+ring(mp.t?mp.n/mp.t:0,58,7,mp.t?mp.n+"/"+mp.t:"–")+'<span class="kc-txt"><b>'+esc(c.name)+'</b><small>Aujourd’hui : '+(mp.t?(mp.t-mp.n?(mp.t-mp.n)+" mission"+(mp.t-mp.n>1?"s":"")+" à faire":"tout est fait"):"rien de prévu")+' · semaine '+pct(w)+' %</small>'+(ev?'<small class="evtxt">'+esc(fmtDate(ev[0]))+' : '+esc(ev[1])+'</small>':'')+(hardOf(c.id,plan).length?'<small class="hardtxt">'+hardOf(c.id,plan).length+' mission'+(hardOf(c.id,plan).length>1?"s":"")+' notée'+(hardOf(c.id,plan).length>1?"s":"")+' difficile'+(hardOf(c.id,plan).length>1?"s":"")+' cette semaine</small>':'')+'</span><span class="chev" aria-hidden="true">›</span></button>';}).join("")+'</div>';
  h+=weeksNav();
  if(plan){
   var days=plan.data.days;
   h+='<section class="card ovcard"><div class="ftitle">'+picto("Avancement",36)+'<h2>Avancement de la semaine</h2></div><div class="ovwrap"><table class="ov"><thead><tr><th></th>';
   days.forEach(function(d){h+='<th>'+esc(d.short)+' '+d.num+'</th>';});
   h+='<th>Semaine</th></tr></thead><tbody>';
   children().forEach(function(c){var t=theme(c);h+='<tr style="--child:'+t.bg+'"><td class="n"><i></i>'+esc(c.name)+'</td>';
    days.forEach(function(d){var p=prog(c.id,d.date);h+='<td><button class="cell'+(p.t&&p.n===p.t?" full":"")+'" data-go="'+esc(c.id)+'" data-day="'+d.date+'" aria-label="'+esc(c.name)+', '+esc(d.long)+'"><i class="bar"><i style="width:'+pct(p)+'%"></i></i><small>'+p.n+'/'+p.t+'</small></button></td>';});
    h+='<td><b>'+pct(weekProg(c.id,plan))+' %</b></td></tr>';});
   h+='</tbody></table></div></section>';
   var hardAll=children().map(function(c){return [c,hardOf(c.id,plan)];}).filter(function(x){return x[1].length;});
   h+='<section class="card hardcard"><div class="ftitle">'+picto("Difficile",36)+'<h2>Points difficiles de la semaine</h2></div>'+(hardAll.length?hardAll.map(function(x){return '<div class="hard-kid"><b>'+esc(x[0].name)+'</b><ul>'+x[1].map(function(m){return '<li>'+diffBadge(m.n)+'<span>'+esc(m.l)+'<small>'+esc(fmtDate(m.date))+' · '+DIFF[m.n][0]+'</small></span></li>';}).join("")+'</ul></div>';}).join(""):'<p class="none">Aucune mission notée 4 ou 5 cette semaine. Les enfants notent la difficulté quand ils cochent un devoir, une leçon, une révision ou une lecture.</p>')+(S.diffMissing&&!DEMO?'<p class="msg err">Exécutez le bloc SQL « v0.9.0 » dans Supabase pour enregistrer les notes.</p>':'')+parentTipFor("diff",weekNum())+'</section>';
   var msAll=children().map(function(c){return [c,methStats(c.id,plan)];}).filter(function(x){return x[1];});
   h+='<section class="card methcard"><div class="ftitle">'+picto("Methode",36)+'<h2>Méthodes de travail de la semaine</h2></div>'+(msAll.length?msAll.map(function(x){var st=x[1];var arr=Object.keys(st.cnt).sort(function(a,b){return st.cnt[b]-st.cnt[a];});
    return '<div class="mk"><b>'+esc(x[0].name)+'</b><small>'+st.tot+' révision'+(st.tot>1?"s":"")+'/leçon'+(st.tot>1?"s":"")+' décrite'+(st.tot>1?"s":"")+(st.mins?' · '+st.mins+' min au total':'')+'</small><div class="m-bars">'+arr.map(function(k){return '<span class="mbar"><i style="width:'+Math.round(100*st.cnt[k]/st.tot)+'%"></i><em>'+esc(methLabel(k))+' · '+st.cnt[k]+'</em></span>';}).join("")+'</div>'+(arr.length===1&&arr[0]==="relu"?'<p class="det">Uniquement « relu le cours » : l’encourager à se faire interroger ou à refaire des exercices.</p>':'')+'</div>';}).join(""):'<p class="none">Les enfants décrivent leur méthode après une révision ou une leçon.</p>')+(S.methMissing&&!DEMO?'<p class="msg err">Exécutez le bloc SQL « v0.11.0 » pour enregistrer les méthodes.</p>':'')+parentTipFor("meth",weekNum())+'</section>';
  }
 }
 h+='<div class="cols">';
 if(tab!=="semaine"){}
 else if(S.sync&&S.sync.status==="mfa"&&S.sync.details){
  h+='<div class="card warn"><h2>Question de sécurité EcoleDirecte</h2><p>Double-cliquez sur « Synchro planning » sur le PC : la question s’affiche dans la fenêtre, tapez le numéro de la bonne réponse.</p></div>';
 } else if(S.sync&&S.sync.status==="error"){
  h+='<div class="card warn"><h2>La dernière synchronisation a échoué</h2><p>'+esc(S.sync.message||"")+'</p></div>';
 }
 if(!noFam&&tab==="enfants"){
  var pendI=S.ideas.filter(function(x){return x.status==="proposee";});
  h+='<section class="card"><div class="ftitle">'+picto("Loisir",36)+'<h2>Idées proposées</h2></div>'+(pendI.length?'<div class="pend-ideas"><p class="ki-title">À valider ('+pendI.length+')</p>'+pendI.map(function(x){var c=child(x.proposed_by||x.child);var k=(IDEA_KINDS.filter(function(z){return z[0]===x.kind;})[0]||["","Idée"])[1];
   return '<div class="pi-row"><span><b>'+esc(x.title)+'</b><small>Proposée par '+esc(c?c.name:"un enfant")+' · '+esc(k)+(x.detail?' · '+esc(x.detail):'')+(x.date?' · souhaitée le '+esc(fmtDate(x.date)):'')+'</small></span><div class="pi-act"><label class="pi-date">Date<input type="date" data-idate="'+esc(x.id)+'" value="'+esc(x.date||"")+'"></label><button class="btn mini" data-ideaok="'+esc(x.id)+'">Accepter</button><button class="btn sec mini" data-ideano="'+esc(x.id)+'">Refuser</button></div></div>';}).join("")+'</div>':'')+(S.ideas.filter(ideaOk).length?S.ideas.filter(ideaOk).map(function(x){var c=child(x.child);return '<div class="xl"><span><b>'+esc(c?c.name:"Tous")+'</b> · '+esc(x.title)+(x.date?' · '+esc(fmtDate(x.date)):'')+(S.done["idea|"+x.id]?' · fait':'')+'</span><button class="btn sec" data-delidea="'+esc(x.id)+'">Supprimer</button></div>';}).join(""):'<p class="none">Aucune idée pour le moment.</p>')+'</section>';
  h+='<section class="card"><div class="ftitle">'+picto("Lecture",44)+'<h2>Bibliothèque des enfants</h2></div>'+children().map(function(c){var bk=booksFor(c.id);var sum='<b>'+esc(c.name)+'</b><small>'+bk.length+' livre'+(bk.length>1?"s":"")+' · '+fmtN(pagesOf(bk))+' pages</small>';
   var rp=readingParents(c);
   if(!bk.length&&!rp)return '<div class="xl"><span>'+sum+'</span></div>';
   return '<details class="libkid"><summary><span>'+sum+(readingFor(c.id).filter(function(r){return r.status!=="fini";}).length?'<small>· lecture en cours</small>':'')+'</span><span class="lk-more">Voir les livres</span></summary>'+rp+'<ul class="books">'+bk.map(function(b){return '<li><span><b>'+esc(b.title)+'</b>'+(b.author?' · '+esc(b.author):'')+'<small>'+(b.pages?fmtN(+b.pages)+' pages · ':'')+(b.finished?'fini le '+esc(fmtDate(b.finished,{day:"numeric",month:"long"})):'')+'</small></span></li>';}).join("")+'</ul><a class="linkbtn" href="#'+esc(c.id)+'/livres">Ouvrir la bibliothèque de '+esc(c.name)+'</a></details>';}).join("")+'</section>';
  // liste des ajouts
  var up=S.extras.filter(function(e){return e.due>=TODAY;});
  h+='<section class="card"><div class="ftitle">'+picto("Devoir",36)+'<h2>Missions ajoutées à la main</h2></div>'+(up.length?'<p>Date affichée : jour de <b>rendu</b>.</p><button class="btn sec wrapbtn" type="button" id="shift-extras">Dates « à faire » ? Tout décaler d’un jour</button>'+msgHtml("shift"):'')+(up.length?'<div class="scrollbox" tabindex="0" role="region" aria-label="Liste des missions ajoutées ('+up.length+')">'+up.map(function(e){var c=child(e.child);return '<div class="xl"><span><span class="xl-h"><b>'+esc(c?c.name:"Tous")+'</b> · à rendre le '+esc(fmtDate(e.due))+'</span><small>'+esc((e.subject?e.subject+" : ":"")+e.text)+'</small></span><button class="btn sec mini" data-del="'+esc(e.id)+'">Supprimer</button></div>';}).join("")+'</div>'+(up.length>5?'<p class="det">'+up.length+' missions : faites défiler la liste.</p>':''):'<p class="none">Aucune pour le moment.</p>')+'</section>';
  h+=renderSealsParents();
 }
 if(!noFam&&tab==="retours"){
  h+=renderNotesParents();
  h+=renderParentTips();
  h+=renderTipsParents();
 }
 if(!noFam&&tab==="actions"){
  h+='<p class="acts-intro">Touchez une action pour ouvrir son formulaire.</p><div class="acts big">';
  // tampon
  var evOpts=[];children().forEach(function(c){evalsFor(c.id).forEach(function(e){if(e[0]<=addDays(TODAY,1))evOpts.push([c.id,e[1]+" ("+fmtDate(e[0])+")"]);});});
  h+=noteForm();
  h+=tipForm();
  var es=S.editStamp?S.stamps.filter(function(x){return String(x.id)===String(S.editStamp);})[0]||null:null;
  h+='<form class="card f stamp-card" id="stampf"><div class="ftitle">'+stampHtml(52,"努")+'<h2>'+(es?"Modifier le sceau":"Donner un sceau")+'</h2></div><p>Un vrai effort, une épreuve bien préparée ? L’enfant reçoit le sceau de l’effort dans « Mon parcours ».</p>';
  h+='<label for="s-child">Enfant<select id="s-child">'+kidOptions(false).replace(es?'value="'+esc(es.child)+'"':'@@','value="'+esc(es?es.child:"")+'" selected')+'</select></label>';
  h+='<label for="s-title">Pour quoi<input id="s-title" type="text" list="s-evals" required placeholder="ex. SVT : la digestion" value="'+esc(es?es.title||"":"")+'"><datalist id="s-evals">'+evOpts.map(function(o){return '<option value="'+esc(o[1])+'">';}).join("")+'</datalist></label>';
  h+='<div class="cols two"><label for="s-note">Note (facultatif)<input id="s-note" type="text" placeholder="17/20" value="'+esc(es?es.note||"":"")+'"></label><label for="s-date">Date<input id="s-date" type="date" value="'+esc(es?(es.date||es.created_at.slice(0,10)):TODAY)+'"></label></div>';
  h+='<label for="s-msg">Message<input id="s-msg" type="text" placeholder="Tes révisions ont payé !" value="'+esc(es?es.message||"":"")+'"></label>';
  h+='<div class="btnrow"><button class="btn stamp-btn" type="submit">'+(es?"Enregistrer les modifications":"Remettre le sceau")+'</button>'+(es?'<button class="btn sec" type="button" data-act="stamp-cancel">Annuler</button>':'')+'</div>'+msgHtml("stamp")+(S.stampsMissing?'<p class="msg err">Exécutez d’abord le bloc SQL de la version 0.3.0 dans Supabase.</p>':'')+'</form>';
  // mot du sensei
  var em=S.editSensei?S.sensei.filter(function(x){return String(x.id)===String(S.editSensei);})[0]||null:null;
  h+='<form class="card f sensei-card" id="senseif"><h2>'+(em?"Modifier le message":"Message du mentor")+'</h2><p>Affiché 4 jours dans la journée de l’enfant (« Pour toi », ou « Pour toute la promotion »), puis gardé dans « Mon parcours ».</p>';
  h+='<label for="m-child">Pour<select id="m-child">'+(em?kidOptions(true).replace(/ selected/g,"").replace('value="'+esc(em.child)+'"','value="'+esc(em.child)+'" selected'):kidOptions(true))+'</select></label>';
  h+='<label for="m-text">Message<textarea id="m-text" required placeholder="Ta fiche est propre. Ce soir, fais-toi interroger : dix questions.">'+esc(em?em.text:"")+'</textarea></label>';
  h+='<div class="btnrow"><button class="btn" type="submit">'+(em?"Enregistrer les modifications":"Publier")+'</button>'+(em?'<button class="btn sec" type="button" data-act="sensei-cancel">Annuler</button>':'')+'</div>'+msgHtml("sensei")+'</form>';
  // ajouter un devoir
  var nd=addDays(TODAY,1);
  h+='<form class="card f" id="addhw"><div class="ftitle">'+picto("Devoir",44)+'<h2>Ajouter une mission</h2></div><p>Pour un devoir ponctuel absent d’EcoleDirecte. Placé dans le planning à la prochaine synchronisation.</p>';
  h+='<label for="x-child">Enfant<select id="x-child">'+kidOptions(true)+'</select></label>';
  h+='<div class="cols two"><label for="x-due">Date<input id="x-due" type="date" value="'+nd+'" required></label><label for="x-sem">Cette date est<select id="x-sem"><option value="faire">le jour où le faire</option><option value="rendre">le jour où le rendre</option></select></label></div>';
  h+='<label for="x-subj">Matière<input id="x-subj" type="text" placeholder="ex. Français"></label>';
  h+='<label for="x-text">Consigne<textarea id="x-text" required placeholder="ex. Lire 20 pages et faire un résumé de 10 lignes"></textarea></label>';
  h+='<label for="x-kind">Type<select id="x-kind"><option value="dev">Devoir à faire</option><option value="app">Leçon à apprendre</option><option value="lec">Lecture</option><option value="rev">Évaluation</option></select></label>';
  h+='<button class="btn" type="submit">Ajouter</button>'+msgHtml("addhw")+'</form>';
  // saisie rapide
  h+='<form class="card f wide" id="bulk"><div class="ftitle">'+picto("Apprendre",44)+'<h2>Saisie rapide des missions</h2></div><p>Collez la liste telle que vous la recevez : une ligne avec le prénom (ou « tous »), puis une ligne par date et une mission par ligne.</p>';
  h+='<label for="bulk-text">Missions<textarea id="bulk-text" spellcheck="true" style="min-height:200px" placeholder="Léa&#10;lundi 30/11 :&#10;  * lire 20 pages et faire un résumé de 10 lignes&#10;  * apprendre le vocabulaire&#10;&#10;Tom, Zoé&#10;samedi 05/12 : arabe, lecture + vocabulaire">'+esc(S.bulk.text)+'</textarea></label>';
  h+='<div class="cols three"><label for="bulk-child">Enfant si aucun prénom n’est écrit<select id="bulk-child"><option value="">—</option>'+kidOptions(true)+'</select></label><label for="bulk-subj">Matière par défaut<input id="bulk-subj" type="text" placeholder="ex. cours du soir"></label><label for="bulk-sem">Les dates indiquent<select id="bulk-sem"><option value="faire"'+(S.bulk.sem!=="rendre"?" selected":"")+'>le jour où le faire</option><option value="rendre"'+(S.bulk.sem==="rendre"?" selected":"")+'>le jour où le rendre</option></select></label></div>';
  h+='<button class="btn sec" type="submit">Voir l’aperçu</button>';
  if(S.bulk.items){
   if(!S.bulk.items.length)h+='<p class="msg err">Aucune mission reconnue : vérifiez qu’il y a un prénom et des dates (ex. « lundi 30/11 »).</p>';
   else{
    h+='<div class="ovwrap"><table class="ov" style="min-width:640px"><thead><tr><th>Garder</th><th>Enfant</th><th>'+(S.bulk.sem==="faire"?"À faire le":"À rendre le")+'</th><th style="text-align:left">Mission</th><th>Type</th></tr></thead><tbody>';
    S.bulk.items.forEach(function(it,i){var c=child(it.child);h+='<tr><td><input type="checkbox" class="bulk-keep" data-i="'+i+'" checked aria-label="Garder"></td><td>'+esc(c?c.name:"Tous")+'</td><td>'+esc(fmtDate(it.doDay||it.due))+'</td><td style="text-align:left">'+esc((it.subject?it.subject+" : ":"")+it.text)+'</td><td><select class="bulk-kind" data-i="'+i+'" aria-label="Type">'+[["dev","Devoir"],["app","À apprendre"],["lec","Lecture"],["rev","Évaluation"]].map(function(k){return '<option value="'+k[0]+'"'+(k[0]===it.kind?" selected":"")+'>'+k[1]+'</option>';}).join("")+'</select></td></tr>';});
    h+='</tbody></table></div><button class="btn" type="button" id="bulk-save">Enregistrer '+S.bulk.items.length+' mission'+(S.bulk.items.length>1?"s":"")+'</button>';
   }
  }
  h+=msgHtml("bulk")+'</form>';
  // idées
  h+='<form class="card f" id="idea"><div class="ftitle">'+picto("Loisir",44)+'<h2>Idée de loisir ou de sortie</h2></div><p>Lecture plaisir, sortie, défi construction, échecs… Affichée dans l’onglet de l’enfant, et dans sa journée si elle est datée.</p>';
  h+='<label for="i-child">Pour<select id="i-child">'+kidOptions(true)+'</select></label>';
  h+='<label for="i-kind">Type<select id="i-kind">'+IDEA_KINDS.map(function(k){return '<option value="'+k[0]+'">'+k[1]+'</option>';}).join("")+'</select></label>';
  h+='<label for="i-title">Idée<input id="i-title" type="text" required placeholder="ex. Lire « Le Petit Prince »"></label>';
  h+='<label for="i-detail">Détail (facultatif)<input id="i-detail" type="text"></label>';
  h+='<label for="i-link">Lien (facultatif)<input id="i-link" type="url" placeholder="https://…"></label>';
  h+='<div class="cols two"><label for="i-date">Date (facultatif)<input id="i-date" type="date"></label><label for="i-time">Heure (facultatif)<input id="i-time" type="time"></label></div>';
  h+='<button class="btn" type="submit">Ajouter l’idée</button>'+msgHtml("idea")+'</form>';
  h+='<a class="act-tile" href="#parametres"><span class="pic gearpic">'+GEAR+'</span><span>Paramètres<small class="fdesc">Code parent, couleurs, sauvegarde</small></span><b class="fplus" aria-hidden="true">›</b></a></div>';
 }
 if(noFam)h+=renderSettings(true);
 else if(pTab()!=="actions")h+='<a class="setlink" href="#parametres">'+GEAR+'<span>Paramètres : couleurs de héros, import d’historique, réglages avancés</span></a>';
 return h+'</div>';
}
function renderSettings(noFam){
 var h='<div class="narrow"><section class="hero" style="background-color:#3A4250;color:#fff"><div class="hero-id"><div><span class="over">Réservé aux parents</span><h1>Paramètres</h1></div></div></section><p class="acts-intro set-intro">Touchez une rubrique pour l’ouvrir.</p><div class="cols setfolds">';
 if(!noFam){
  h+=lockForm();
  h+='<form class="card f" id="themesf"><h2>Couleurs de héros</h2><p>Chaque profil choisit sa couleur.</p>';
  children().forEach(function(c){h+='<label for="th-'+esc(c.id)+'">'+esc(c.name)+'<select id="th-'+esc(c.id)+'" data-theme-for="'+esc(c.id)+'">'+Object.keys(THEMES).map(function(n){return '<option'+(n===themeName(c)?" selected":"")+'>'+n+'</option>';}).join("")+'</select></label>';});
  h+='<label for="th-parents">Parents<select id="th-parents" data-theme-for="__parents">'+Object.keys(THEMES).map(function(n){return '<option'+(n===themeName(null)?" selected":"")+'>'+n+'</option>';}).join("")+'</select></label>';
  h+='<button class="btn" type="submit">Enregistrer les couleurs</button>'+msgHtml("themes")+'</form>';
 }
 h+='<section class="card" id="setinstall"><h2>Installer sur un téléphone</h2>'+(S.installEvt?'<p>Ce téléphone peut installer l’Académie comme une appli.</p><button class="btn" type="button" data-act="install">Installer l’appli</button>':S.standalone?'<p class="msg">L’Académie est déjà installée sur cet appareil.</p>':'')+'<p><b>iPhone (Safari ou Brave)</b> : bouton Partager, puis « Sur l’écran d’accueil ».</p><p><b>Android (Brave ou Chrome)</b> : menu ⋮, puis « Installer l’application » ou « Ajouter à l’écran d’accueil », puis « Installer ».</p><p><b>Ordinateur (Brave ou Chrome)</b> : icône d’installation à droite de la barre d’adresse.</p><p class="det">Le mot de passe familial est demandé une seule fois par appareil.</p></section>';
 h+='<section class="card" id="setbackup"><h2>Sauvegarde</h2><p>Un seul fichier avec toutes les données de l’Académie : réglages, semaines, coches, missions ajoutées, idées, tampons, livres, retours des professeurs, conseils. À garder sur un ordinateur ou un espace privé, <b>jamais sur GitHub</b>. Conseillé une fois par trimestre.</p><button class="btn" type="button" data-act="backup">Télécharger une sauvegarde</button>'+msgHtml("backup")+'</section>';
 h+='<form class="card f" id="import"><h2>Restaurer ou importer</h2><p>Fichier de sauvegarde ou d’historique (JSON). Les données du fichier sont ajoutées ou remplacées ; rien n’est supprimé.</p><label for="imp-file">Fichier<input id="imp-file" type="file" accept="application/json,.json" required></label><button class="btn" type="submit">Importer</button>'+msgHtml("import")+'</form>';
 if(!noFam&&!DEMO){
  h+='<form class="card f wide" id="settings"><h2>Réglages (avancé)</h2><p>Enfants, activités, heures de coucher, tâches récurrentes. Format JSON : modifiez avec précaution.</p><label for="set-json">Réglages<textarea id="set-json" spellcheck="false" style="min-height:220px;font-family:ui-monospace,monospace;font-size:.8rem">'+esc(JSON.stringify(S.fam,null,2))+'</textarea></label><button class="btn" type="submit">Enregistrer les réglages</button>'+msgHtml("settings")+'</form>';
 }
 return h+'</div></div>';
}
function renderTips(plan){
 var h='<section class="hero" style="background-color:#0D3B45;color:#FFFFFF"><div class="hero-id"><div><span class="over">Conseils de l’Académie</span><h1>Bien apprendre, bien s’organiser</h1></div></div></section>';
 h+='<nav class="tipfilter" aria-label="Filtrer les conseils">'+[["tous","Tous"]].concat(MOMENTS).map(function(m){return '<button class="wk" data-tipf="'+m[0]+'" aria-pressed="'+(S.tipFilter===m[0])+'">'+m[1]+'</button>';}).join("")+'</nav>';
 var list=allTips(null).filter(function(t){return S.tipFilter==="tous"||t.moments.indexOf(S.tipFilter)>=0;});
 h+='<p class="acts-intro tips-count">'+list.length+' conseil'+(list.length>1?"s":"")+' · touchez un titre pour le lire.</p><div class="tips-grid folded">'+list.map(function(t){return '<details class="tip src-'+esc(t.src)+'"><summary><span class="tip-src">'+esc(tipSrcLabel(t))+(t.subject?' · '+esc(t.subject):'')+'</span><h3>'+esc(t.title)+'</h3></summary><p>'+esc(t.body)+'</p></details>';}).join("")+'</div>';
 return h;
}

/* ------------------------------------------------------------ saisie rapide */
var JOURS=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
function fold(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();}
function guessKind(t){var f=fold(t);
 if(/\b(evaluation|controle|ds|qcm|interro|interrogation|test|devoir surveille)\b/.test(f))return "rev";
 if(/(vocabulaire|sourate|reciter|par c(oe|œ)ur|apprendre)/.test(f)&&!/exercice|rediger|ecrire|resume/.test(f))return "app";
 if(/\b(lire|lecture)\b/.test(f)&&!/exercice|\bex\b/.test(f))return "lec";
 if(/(apprendre|par c(oe|œ)ur|reciter|vocabulaire|lecon|\bcours\b)/.test(f)&&!/exercice|faire|rediger|ecrire/.test(f))return "app";
 return "dev";}
function parseDateIn(line){
 var f=fold(line),m=/(\d{1,2})[\/.\-](\d{1,2})(?:[\/.\-](\d{2,4}))?/.exec(f);
 var today=new Date(TODAY+"T12:00:00");
 if(m){var d=+m[1],mo=+m[2],y=m[3]?(+m[3]<100?2000+(+m[3]):+m[3]):today.getFullYear();
  if(d<1||d>31||mo<1||mo>12)return null;
  var dt=new Date(y,mo-1,d,12);if(!m[3]&&dt<new Date(today.getTime()-60*864e5))dt=new Date(y+1,mo-1,d,12);
  return {date:iso(dt),idx:m.index,end:m.index+m[0].length};}
 for(var i=0;i<7;i++){var r=new RegExp("^\\W*"+JOURS[i]+"\\b");var mm=r.exec(f);
  if(mm){var dd=new Date(today.getTime());do{dd.setDate(dd.getDate()+1);}while(dd.getDay()!==i);return {date:iso(dd),idx:mm.index,end:mm.index+mm[0].length};}}
 return null;}
function parseBulk(text,defChild,defSubj){
 var kids=children(),items=[],cur=defChild?[defChild]:[],due=null,subj=null,subjIndent=-1;
 text.split(/\r?\n/).forEach(function(raw){
  if(!raw.trim())return;
  var indent=raw.match(/^\s*/)[0].replace(/\t/g,"    ").length;
  var line=raw.trim().replace(/^[*\-•·–]+\s*/,"");
  var f=fold(line);
  var dates=(f.match(/\d{1,2}[\/.\-]\d{1,2}/g)||[]).length;
  if(dates>=2)return;
  var dt=parseDateIn(line);
  if(!dt){
   var found=kids.filter(function(c){return new RegExp("\\b"+fold(c.name)+"\\b").test(f);}).map(function(c){return c.id;});
   if(/\btous\b/.test(f)&&line.length<40)found=["tous"];
   if(found.length&&line.length<80&&!/:\s*\S/.test(line)){cur=found;due=null;subj=null;return;}
  }
  if(dt){due=dt.date;subj=null;subjIndent=-1;line=line.slice(0,dt.idx)+line.slice(dt.end);line=line.replace(/^[^:]*:\s*/,"").trim();if(!line)return;}
  if(!due||!cur.length)return;
  if(subj!==null&&indent<=subjIndent){subj=null;subjIndent=-1;}
  if(/:\s*$/.test(line)){subj=line.replace(/:\s*$/,"").trim().replace(/^devoirs?\s+((de|du|d['’])\s*)?/i,"");subjIndent=indent;return;}
  line.split(/\s;\s/).forEach(function(part){
   part=part.trim().replace(/^[*\-•·–]+\s*/,"");if(!part)return;
   var s2=subj||defSubj||"",m=/^([^:]{2,30}?)\s*:\s+(.+)$/.exec(part);
   if(m&&!/\d/.test(m[1])){s2=m[1].trim();part=m[2].trim();}
   cur.forEach(function(cid){items.push({child:cid,due:due,subject:s2,text:part,kind:guessKind(s2+" "+part)});});
  });
 });
 return items;}

/* ------------------------------------------------------------ actions */
function bindForms(){
 bindReading();
 var f;
 if((f=document.getElementById("addhw")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var dd=val("x-due");var row={child:val("x-child"),due:val("x-sem")==="faire"?addDays(dd,1):dd,subject:val("x-subj")||null,text:val("x-text"),kind:val("x-kind")};
  if(DEMO){row.id="demo-"+Date.now();S.extras.push(row);flash("addhw","Ajouté (démo).");return;}
  sb.from("extras").insert(row).select().then(function(r){if(r.error)flash("addhw","Erreur : "+r.error.message,true);else{S.extras.push(r.data[0]);flash("addhw","Devoir ajouté.");}});
 });
 if((f=document.getElementById("mfa")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var chosen=val("mfa-a");
  sb.from("mfa_answers").upsert({question:S.sync.details.question,answer:chosen}).then(function(r){flash("mfa",r.error?"Erreur : "+r.error.message:"Réponse enregistrée : « "+chosen+" ».",!!r.error);});
 });
 if((f=document.getElementById("settings")))f.addEventListener("submit",function(e){
  e.preventDefault();var v;
  try{v=JSON.parse(val("set-json"));}catch(err){flash("settings","JSON invalide : "+err.message,true);return;}
  if(!v.children||!v.children.length){flash("settings","Il faut au moins un enfant dans « children ».",true);return;}
  sb.from("settings").upsert({key:"famille",value:v,updated_at:new Date().toISOString()}).then(function(r){if(r.error)flash("settings","Erreur : "+r.error.message,true);else{S.fam=v;flash("settings","Réglages enregistrés. Ils servent dès la prochaine synchronisation.");}});
 });
 if((f=document.getElementById("import")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var file=document.getElementById("imp-file").files[0];if(!file)return;
  file.text().then(function(txt){
   var d;try{d=JSON.parse(txt);}catch(err){flash("import","Fichier illisible.",true);return;}
   if(DEMO){flash("import","Import indisponible en mode démo.",true);return;}
   var jobs=[];
   if(d.settings)Object.keys(d.settings).forEach(function(k){jobs.push(sb.from("settings").upsert({key:k,value:d.settings[k]}));});
   if(d.plans&&d.plans.length)jobs.push(sb.from("plans").upsert(d.plans));
   var ids=Object.keys(d.checks||{});
   var tb=d.tables||{};
   if(!(tb.checks&&tb.checks.length))for(var i=0;i<ids.length;i+=400)jobs.push(sb.from("checks").upsert(ids.slice(i,i+400).map(function(id){return {id:id,done:true};})));
   Object.keys(tb).forEach(function(t){if(BK_TABLES.indexOf(t)<0)return;var rows=tb[t]||[];for(var j=0;j<rows.length;j+=400)jobs.push(sb.from(t).upsert(rows.slice(j,j+400)));});
   Promise.all(jobs).then(function(rs){var bad=rs.filter(function(r){return r.error;})[0];if(bad)flash("import","Erreur : "+bad.error.message,true);else{flash("import","Import terminé.");loadAll();}});
  });
 });
 if((f=document.getElementById("bulk"))){
  var ta=document.getElementById("bulk-text");ta.addEventListener("input",function(){S.bulk.text=ta.value;});
  f.addEventListener("submit",function(e){e.preventDefault();S.bulk.text=ta.value;S.bulk.sem=val("bulk-sem");S.bulk.items=parseBulk(ta.value,val("bulk-child"),val("bulk-subj"));if(S.bulk.sem==="faire")S.bulk.items.forEach(function(it){it.due=addDays(it.due,1);it.doDay=addDays(it.due,-1);});render();var p=document.getElementById("bulk");if(p)p.scrollIntoView({block:"start"});});
  var sv=document.getElementById("bulk-save");
  if(sv)sv.addEventListener("click",function(){
   var rows=S.bulk.items.map(function(it,i){var k=document.querySelector('.bulk-keep[data-i="'+i+'"]');var t=document.querySelector('.bulk-kind[data-i="'+i+'"]');return k&&k.checked?{child:it.child,due:it.due,subject:it.subject||null,text:it.text,kind:t?t.value:it.kind}:null;}).filter(Boolean);
   if(!rows.length){flash("bulk","Aucun devoir coché.",true);return;}
   var done=function(data){S.extras=S.extras.concat(data);S.bulk={text:"",items:null,sem:S.bulk.sem};flash("bulk",rows.length+" devoir"+(rows.length>1?"s":"")+" enregistré"+(rows.length>1?"s":"")+". Ils seront placés dans le planning à la prochaine synchronisation.");};
   if(DEMO){done(rows.map(function(r,i){r.id="demo-"+Date.now()+i;return r;}));return;}
   sb.from("extras").insert(rows).select().then(function(r){if(r.error)flash("bulk","Erreur : "+r.error.message,true);else done(r.data);});
  });
 }
 var shb=document.getElementById("shift-extras");
 if(shb)shb.addEventListener("click",function(){
  if(!shb.dataset.ok){shb.dataset.ok="1";shb.textContent="Confirmer : décaler "+S.extras.filter(function(e){return e.due>=TODAY;}).length+" devoirs d’un jour";return;}
  var up=S.extras.filter(function(e){return e.due>=TODAY;});
  if(DEMO){up.forEach(function(e){e.due=addDays(e.due,1);});flash("shift","Dates décalées (démo).");return;}
  Promise.all(up.map(function(e){return sb.from("extras").update({due:addDays(e.due,1)}).eq("id",e.id);})).then(function(rs){
   var bad=rs.filter(function(r){return r.error;})[0];
   if(bad)flash("shift","Erreur : "+bad.error.message,true);else{up.forEach(function(e){e.due=addDays(e.due,1);});flash("shift","C’est corrigé : relancez « Synchro planning » sur le PC pour mettre le planning à jour.");}
  });
 });
 if((f=document.getElementById("kidideaf")))f.addEventListener("submit",function(e){
  e.preventDefault();var cid=e.currentTarget.getAttribute("data-child");
  var row={child:cid,proposed_by:cid,status:"proposee",kind:val("ki-kind"),title:val("ki-title"),detail:val("ki-detail")||null,date:val("ki-date")||null};
  var ok=function(x){S.ideas.push(x);S.ideaOpen=false;flash("global","Idée envoyée à tes parents !");};
  if(DEMO){row.id="demo-"+Date.now();ok(row);return;}
  sb.from("ideas").insert(row).select().then(function(r){if(r.error)flash("kidea",/status|proposed_by/.test(r.error.message)?"Il manque une mise à jour côté parents (bloc SQL « v0.11.0 »).":"Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 if((f=document.getElementById("idea")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var tm=val("i-time");var row={child:val("i-child"),kind:val("i-kind"),title:val("i-title"),detail:val("i-detail")||null,link:val("i-link")||null,date:val("i-date")||null,time:tm?tm.replace(":","h"):null};
  if(DEMO){row.id="demo-"+Date.now();S.ideas.push(row);flash("idea","Idée ajoutée (démo).");return;}
  sb.from("ideas").insert(row).select().then(function(r){if(r.error)flash("idea","Erreur : "+r.error.message,true);else{S.ideas.push(r.data[0]);flash("idea","Idée ajoutée.");}});
 });
 if((f=document.getElementById("bookf")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var pgs=parseInt(val("b-pages"),10);
  var row={child:e.currentTarget.getAttribute("data-child"),title:val("b-title"),author:val("b-author")||null,pages:pgs>0?pgs:null,finished:val("b-date")||TODAY};
  var ok=function(x){S.books.push(x);S.bookOpen=false;flash("global","Bravo ! « "+x.title+" » est dans ta bibliothèque.");};
  if(DEMO){row.id="demo-"+Date.now();ok(row);return;}
  sb.from("books").insert(row).select().then(function(r){if(r.error)flash("book","Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 if((f=document.getElementById("tipf")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var forP=val("t-child")==="parents";var moms=[].slice.call(document.querySelectorAll(forP?".t-pc:checked":".t-mom:checked")).map(function(x){return x.value;});
  var row={title:val("t-title"),body:val("t-body"),source_type:val("t-src"),source:val("t-from")||null,subject:val("t-subj")||null,moments:(moms.length?moms:["general"]).join(","),child:val("t-child")||"tous",active:true};
  var edit=S.editTip;
  var ok=function(x){if(edit)S.tips=S.tips.map(function(t){return String(t.id)===String(edit)?x:t;});else S.tips.unshift(x);S.editTip=null;S.tipDraft=null;S.open=S.open||{};S.open.tipf=false;flash("global",edit?"Conseil modifié.":"Conseil ajouté.");};
  if(DEMO){row.id=edit||("demo-"+Date.now());ok(row);return;}
  var q=edit?sb.from("tips").update(row).eq("id",edit).select():sb.from("tips").insert(row).select();
  q.then(function(r){if(r.error)flash("tip","Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 var tch=document.getElementById("t-child");if(tch)tch.addEventListener("change",function(){var p=tch.value==="parents";document.getElementById("t-moms").hidden=p;document.getElementById("t-pctx").hidden=!p;});
 if((f=document.getElementById("notef")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var row={child:val("n-child"),date:val("n-date")||TODAY,source:val("n-src"),subject:val("n-subj")||null,teacher:val("n-teacher")||null,tone:val("n-tone"),original:val("n-orig")||null,
   kid_strengths:val("n-good")||null,kid_expect:val("n-expect")||null,kid_next:val("n-next")||null,goal:val("n-goal")||null,shared:document.getElementById("n-shared").checked,updated_at:new Date().toISOString()};
  var go=document.getElementById("n-goalon");row.goal_active=go?go.checked:true;
  if(!row.original&&!row.kid_strengths&&!row.kid_expect){flash("note","Écrivez au moins le message d’origine ou une phrase pour l’enfant.",true);return;}
  var edit=S.editNote;
  var ok=function(x){if(edit)S.notes=S.notes.map(function(n){return String(n.id)===String(edit)?x:n;});else S.notes.unshift(x);S.editNote=null;S.open=S.open||{};S.open.notef=false;flash("global",edit?"Retour modifié.":"Retour enregistré.");};
  if(DEMO){row.id=edit||("demo-"+Date.now());ok(row);return;}
  var q=edit?sb.from("teacher_notes").update(row).eq("id",edit).select():sb.from("teacher_notes").insert(row).select();
  q.then(function(r){if(r.error)flash("note","Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 if((f=document.getElementById("stampf")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var row={child:val("s-child"),title:val("s-title"),note:val("s-note")||null,message:val("s-msg")||null,date:val("s-date")||TODAY};
  var ed=S.editStamp;
  var ok=function(x){if(ed)S.stamps=S.stamps.map(function(y){return String(y.id)===String(ed)?x:y;});else S.stamps.push(x);S.editStamp=null;S.open=S.open||{};S.open.stampf=false;flash("stamp",ed?"Sceau modifié.":"Sceau remis à "+(child(x.child)||{}).name+" !");};
  if(DEMO){var old=ed?S.stamps.filter(function(y){return String(y.id)===String(ed);})[0]||{}:{};row.id=ed||("demo-"+Date.now());row.created_at=old.created_at||new Date().toISOString();ok(row);return;}
  (ed?sb.from("stamps").update(row).eq("id",ed).select():sb.from("stamps").insert(row).select()).then(function(r){if(r.error)flash("stamp","Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 if((f=document.getElementById("senseif")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var row={child:val("m-child"),text:val("m-text")};
  var ed=S.editSensei;
  var ok=function(x){if(ed)S.sensei=S.sensei.map(function(y){return String(y.id)===String(ed)?x:y;});else S.sensei.push(x);S.editSensei=null;S.open=S.open||{};S.open.senseif=false;flash("sensei",ed?"Message modifié.":"Message publié.");};
  if(DEMO){var old=ed?S.sensei.filter(function(y){return String(y.id)===String(ed);})[0]||{}:{};row.id=ed||("demo-"+Date.now());row.created_at=old.created_at||new Date().toISOString();ok(row);return;}
  (ed?sb.from("sensei_messages").update(row).eq("id",ed).select():sb.from("sensei_messages").insert(row).select()).then(function(r){if(r.error)flash("sensei","Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 if((f=document.getElementById("unlockf")))f.addEventListener("submit",function(e){
  e.preventDefault();var c=val("u-code");var keep=document.getElementById("u-keep").checked;
  sha(S.lock.s+":"+c).then(function(hh){
   if(hh===S.lock.h){S.lockFails=0;ssSet("kizuna-unlock",hh);if(keep)lsSet("kizuna-unlock",hh);render();window.scrollTo(0,0);}
   else{S.lockFails=(S.lockFails||0)+1;if(S.lockFails>=5){S.lockFails=0;S.lockUntil=Date.now()+30000;setTimeout(render,30500);render();}else flash("unlock","Code incorrect.",true);}
  }).catch(function(er){flash("unlock",er.message,true);});
 });
 if((f=document.getElementById("lockf")))f.addEventListener("submit",function(e){
  e.preventDefault();var c=val("l-code"),c2=val("l-code2");
  if(!/^[0-9]{4,8}$/.test(c)){flash("lock","Le code doit faire 4 à 8 chiffres.",true);return;}
  if(c!==c2){flash("lock","Les deux codes ne sont pas identiques.",true);return;}
  var was=lockOn(),keep=lockOn()&&lsGet("kizuna-unlock")===S.lock.h;var salt=newSalt();
  sha(salt+":"+c).then(function(hh){var v={h:hh,s:salt,at:TODAY};
   saveLock(v,function(){ssSet("kizuna-unlock",hh);if(keep)lsSet("kizuna-unlock",hh);flash("lock",was?"Code changé. Les autres appareils le demanderont à la prochaine ouverture.":"Code activé. Notez-le : il sera demandé pour ouvrir la Vue parents et les Paramètres.");});
  }).catch(function(er){flash("lock",er.message,true);});
 });
 if((f=document.getElementById("themesf")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var v=JSON.parse(JSON.stringify(S.fam));
  document.querySelectorAll("[data-theme-for]").forEach(function(sl){var id=sl.getAttribute("data-theme-for");if(id==="__parents")v.parents_theme=sl.value;else v.children.forEach(function(c){if(c.id===id)c.theme=sl.value;});});
  if(DEMO){S.fam=v;flash("themes","Couleurs appliquées (démo).");return;}
  sb.from("settings").upsert({key:"famille",value:v,updated_at:new Date().toISOString()}).then(function(r){if(r.error)flash("themes","Erreur : "+r.error.message,true);else{S.fam=v;flash("themes","Couleurs enregistrées.");}});
 });
 var sel=document.getElementById("oldweek");
 if(sel)sel.addEventListener("change",function(){if(sel.value!=="")pickWeek(+sel.value);});
}
function val(id){return (document.getElementById(id).value||"").trim();}
function pickWeek(idx){var p=S.plans[idx];if(!p)return;var has=p.data.days.some(function(d){return d.date===TODAY;});setDay(has?TODAY:(p.data.days[1]||p.data.days[0]).date);}

root.addEventListener("click",function(e){
 var hc=e.target.closest&&e.target.closest(".home-card");if(hc&&S.plans){S.day=defaultDay();saveDay(S.day);}
 var t=e.target.closest("[data-ropen],[data-rstart],[data-rdel],[data-rdrop],[data-rfinish],[data-sheet],[data-sheetclose],[data-sheetmode],[data-tipf],[data-edittip],[data-deltip],[data-note2tip],[data-mopen],[data-mtog],[data-mmin],[data-msave],[data-mskip],[data-ideaok],[data-ideano],[data-editnote],[data-delnote],[data-editstamp],[data-delstamp],[data-editmsg],[data-delmsg],[data-rate],[data-rateopen],[data-focus],[data-fclose],[data-fdone],[data-fundo],[data-fnext],[data-cancel],[data-uncancel],[data-delbook],[data-view],[data-day],[data-id],[data-go],[data-week],[data-del],[data-act],[data-delidea]");if(!t)return;
 if(t&&readingClick(t))return;
 if(t.hasAttribute("data-delidea")){var di=t.getAttribute("data-delidea");var aft=function(){S.ideas=S.ideas.filter(function(x){return String(x.id)!==di;});render();};
  if(DEMO)aft();else sb.from("ideas").delete().eq("id",di).then(function(r){if(!r.error)aft();});return;}
 if(t.matches("input.chk")){setDone(t.getAttribute("data-id"),t.checked);return;}
 if(t.hasAttribute("data-delbook")){var bid=t.getAttribute("data-delbook");if(!t.dataset.ok){t.dataset.ok="1";t.textContent="Confirmer";return;}
  var aftb=function(){S.books=S.books.filter(function(x){return String(x.id)!==bid;});render();};
  if(DEMO)aftb();else sb.from("books").delete().eq("id",bid).then(function(r){if(!r.error)aftb();});return;}
 if(t.getAttribute("data-act")==="book-open"){S.bookOpen=true;render();var bi=document.getElementById("b-title");if(bi)bi.focus();return;}
 if(t.hasAttribute("data-ideaok")||t.hasAttribute("data-ideano")){var okI=t.hasAttribute("data-ideaok"),iid=t.getAttribute(okI?"data-ideaok":"data-ideano");
  var din=document.querySelector('[data-idate="'+iid+'"]');var upd=okI?{status:"ok",date:din&&din.value?din.value:null}:{status:"non"};
  var aft=function(){S.ideas=S.ideas.map(function(x){if(String(x.id)===iid){for(var k in upd)x[k]=upd[k];}return x;});flash("global",okI?"Idée acceptée : elle apparaît chez l’enfant.":"Idée refusée.");};
  if(DEMO)aft();else sb.from("ideas").update(upd).eq("id",iid).then(function(r){if(r.error)flash("global","Erreur : "+r.error.message,true);else aft();});return;}
 if(t.hasAttribute("data-editstamp")){S.editStamp=t.getAttribute("data-editstamp");S.open=S.open||{};S.open.stampf=true;goForm("stampf");return;}
 if(t.hasAttribute("data-editmsg")){S.editSensei=t.getAttribute("data-editmsg");S.open=S.open||{};S.open.senseif=true;goForm("senseif");return;}
 if(t.hasAttribute("data-delstamp")||t.hasAttribute("data-delmsg")){var isSt=t.hasAttribute("data-delstamp"),did=t.getAttribute(isSt?"data-delstamp":"data-delmsg");var ck=(isSt?"s":"m")+did;if(S.confirmDel!==ck){S.confirmDel=ck;render();return;}S.confirmDel=null;
  var aftd=function(){if(isSt){S.stamps=S.stamps.filter(function(x){return String(x.id)!==did;});if(String(S.editStamp)===did)S.editStamp=null;}else{S.sensei=S.sensei.filter(function(x){return String(x.id)!==did;});if(String(S.editSensei)===did)S.editSensei=null;}render();};
  if(DEMO)aftd();else sb.from(isSt?"stamps":"sensei_messages").delete().eq("id",did).then(function(r){if(r.error)flash("global","Erreur : "+r.error.message,true);else aftd();});return;}
 if(t.hasAttribute("data-editnote")){S.editNote=t.getAttribute("data-editnote");S.open=S.open||{};S.open.notef=true;goForm("notef");return;}
 if(t.hasAttribute("data-delnote")){var nid=t.getAttribute("data-delnote");if(!t.dataset.ok){t.dataset.ok="1";t.textContent="Confirmer";return;}
  var aftn=function(){S.notes=S.notes.filter(function(n){return String(n.id)!==nid;});if(String(S.editNote)===nid)S.editNote=null;render();};
  if(DEMO)aftn();else sb.from("teacher_notes").delete().eq("id",nid).then(function(r){if(!r.error)aftn();});return;}
 if(t.hasAttribute("data-rate")){var rid=t.getAttribute("data-rate"),rn=+t.getAttribute("data-n");if(rn)setDiff(rid,rn);S.rate=null;var cvr=child(curView()),bkr=cvr&&blockById(cvr.id,rid);if(bkr&&METH_KINDS[bkr.k]&&!S.meth[rid]&&!S.focus)S.methOpen=rid;render();return;}
 if(t.hasAttribute("data-tipf")){S.tipFilter=t.getAttribute("data-tipf");render();return;}
 if(t.hasAttribute("data-edittip")){S.editTip=t.getAttribute("data-edittip");S.tipDraft=null;goForm("tipf");return;}
 if(t.hasAttribute("data-note2tip")){var n2=S.notes.filter(function(n){return String(n.id)===t.getAttribute("data-note2tip");})[0];if(!n2)return;
  S.editTip=null;S.tipDraft={title:n2.goal||"Conseil de "+(n2.teacher||"professeur"),body:n2.kid_expect||n2.original||"",source_type:"prof",source:n2.teacher||"",subject:n2.subject||"",moments:"general",child:n2.child};goForm("tipf");return;}
 if(t.hasAttribute("data-deltip")){var tid=t.getAttribute("data-deltip");if(!t.dataset.ok){t.dataset.ok="1";t.textContent="Confirmer";return;}
  var aftt=function(){S.tips=S.tips.filter(function(x){return String(x.id)!==tid;});render();};
  if(DEMO)aftt();else sb.from("tips").delete().eq("id",tid).then(function(r){if(!r.error)aftt();});return;}
 if(t.hasAttribute("data-mopen")){S.methOpen=t.getAttribute("data-mopen");render();return;}
 if(t.hasAttribute("data-mtog")||t.hasAttribute("data-mmin")){var row=t.closest("[data-mfor]");if(!row)return;
  if(t.hasAttribute("data-mmin")){row.querySelectorAll("[data-mmin]").forEach(function(x){if(x!==t)x.setAttribute("aria-pressed","false");});}
  t.setAttribute("aria-pressed",t.getAttribute("aria-pressed")==="true"?"false":"true");return;}
 if(t.hasAttribute("data-msave")||t.hasAttribute("data-mskip")){var mid=t.getAttribute(t.hasAttribute("data-msave")?"data-msave":"data-mskip");
  if(t.hasAttribute("data-msave")){var mrow=t.closest("[data-mfor]");var ms=[].slice.call(mrow.querySelectorAll('[data-mtog][aria-pressed="true"]')).map(function(x){return x.getAttribute("data-mtog");});var mm=mrow.querySelector('[data-mmin][aria-pressed="true"]');
   if(ms.length||mm)saveMeth(mid,{m:ms,min:mm?+mm.getAttribute("data-mmin"):null});}
  S.methOpen=null;
  if(S.focus&&S.methFocus===mid){S.methFocus=null;var fc2=child(curView());var nx2=fc2?nextTask(fc2.id,S.day):null;S.focus=nx2?keyOf(nx2):null;if(!nx2)S.msg.global={t:"Journée bouclée ! Tout est fait pour aujourd’hui.",e:false};}
  render();return;}
 if(t.hasAttribute("data-rateopen")){S.rate=t.getAttribute("data-rateopen");render();return;}
 if(t.hasAttribute("data-focus")){S.focus=t.getAttribute("data-focus");render();return;}
 if(t.hasAttribute("data-fclose")){var fk=S.focus;S.focus=null;render();var back=document.querySelector('[data-focus="'+(fk||"").replace(/"/g,'\\"')+'"]');if(back)back.focus();return;}
 if(t.hasAttribute("data-fundo")){setDone(t.getAttribute("data-fundo"),false);return;}
 if(t.hasAttribute("data-fdone")||t.hasAttribute("data-fnext")){
  var fc=child(curView());if(t.hasAttribute("data-fdone")){S.done[t.getAttribute("data-fdone")]=1;var fn=+t.getAttribute("data-n")||0;if(fn){S.diff[t.getAttribute("data-fdone")]=fn;var fid=t.getAttribute("data-fdone");setTimeout(function(){setDiff(fid,fn);},400);}
   var fbk=fc&&blockById(fc.id,t.getAttribute("data-fdone"));if(fbk&&METH_KINDS[fbk.k]){S.methFocus=fbk.id;setDone(fbk.id,true);return;}}
  var nx=fc?nextTask(fc.id,S.day):null;
  if(t.hasAttribute("data-fnext")&&nx&&keyOf(nx)===S.focus){var tl=tasksOf(fc.id,S.day),ix=-1;tl.forEach(function(x,j){if(keyOf(x)===S.focus)ix=j;});nx=tl.slice(ix+1).filter(function(x){return !isDoneB(x);})[0]||null;}
  S.focus=nx?keyOf(nx):null;
  if(t.hasAttribute("data-fdone")){if(!nx)S.msg.global={t:"Journée bouclée ! Tout est fait pour aujourd’hui.",e:false};setDone(t.getAttribute("data-fdone"),true);}else render();
  return;}
 if(t.hasAttribute("data-cancel")){var cc=t.getAttribute("data-child"),cd=t.getAttribute("data-date");var l=lessonsOf(cc,cd)[+t.getAttribute("data-cancel")];if(!l)return;
  var row={child:cc,date:cd,subject:l.m,start:l.s,reason:"prof absent"};
  var okc=function(x){S.cancels.push(x);flash("global",l.m+" du "+fmtDate(cd)+" annulé. Le planning sera recalculé à la prochaine synchronisation (ou double-cliquez sur « Synchro planning » sur le PC).");};
  if(DEMO){row.id="demo-"+Date.now();okc(row);return;}
  sb.from("cancellations").insert(row).select().then(function(r){if(r.error)flash("global","Erreur : "+r.error.message,true);else okc(r.data[0]);});return;}
 if(t.hasAttribute("data-uncancel")){var uid=t.getAttribute("data-uncancel");var aftu=function(){S.cancels=S.cancels.filter(function(x){return String(x.id)!==uid;});render();};
  if(DEMO)aftu();else sb.from("cancellations").delete().eq("id",uid).then(function(r){if(!r.error)aftu();});return;}
 if(t.getAttribute("data-act")==="print"){S.printing=true;render();setTimeout(function(){window.print();S.printing=false;render();},50);return;}
 if(t.getAttribute("data-act")==="tour"){tourStart(tourKey());return;}
 if(t.getAttribute("data-act")==="backup"){doBackup();return;}
 if(t.getAttribute("data-act")==="lock-now"){relock();location.hash="#accueil";return;}
 if(t.getAttribute("data-act")==="lock-off"){if(!t.dataset.ok){t.dataset.ok="1";t.textContent="Confirmer : retirer le code";return;}saveLock(null,function(){relock();flash("lock","Code retiré : la Vue parents est de nouveau ouverte à tous.");});return;}
 if(t.getAttribute("data-act")==="install"){var ev=S.installEvt;if(ev){ev.prompt();ev.userChoice.then(function(){S.installEvt=null;render();});}return;}
 if(t.getAttribute("data-act")==="kidea-open"){S.ideaOpen=true;render();var kt=document.getElementById("ki-title");if(kt)kt.focus();return;}
 if(t.getAttribute("data-act")==="kidea-close"){S.ideaOpen=false;render();return;}
 if(t.getAttribute("data-act")==="tip-cancel"){S.editTip=null;S.tipDraft=null;S.open=S.open||{};S.open.tipf=false;render();return;}
 if(t.getAttribute("data-act")==="stamp-cancel"){S.editStamp=null;S.open=S.open||{};S.open.stampf=false;render();return;}
 if(t.getAttribute("data-act")==="sensei-cancel"){S.editSensei=null;S.open=S.open||{};S.open.senseif=false;render();return;}
 if(t.getAttribute("data-act")==="note-cancel"){S.editNote=null;S.open=S.open||{};S.open.notef=false;render();return;}
 if(t.getAttribute("data-act")==="hint-ok"){lsSet("kizuna-hint-check","1");render();return;}
 if(t.getAttribute("data-act")==="book-close"){S.bookOpen=false;render();var ob=document.querySelector('[data-act="book-open"]');if(ob)ob.focus();return;}
 if(t.getAttribute("data-act")==="books-all"){S.bookAll=true;render();return;}
 if(t.hasAttribute("data-act")){sb.auth.signOut().then(function(){location.reload();});return;}
 if(t.hasAttribute("data-del")){var id=t.getAttribute("data-del");
  var after=function(){S.extras=S.extras.filter(function(x){return String(x.id)!==id;});render();};
  if(DEMO)after();else sb.from("extras").delete().eq("id",id).then(function(r){if(!r.error)after();});return;}
 if(t.hasAttribute("data-week")){pickWeek(+t.getAttribute("data-week"));return;}
 if(t.hasAttribute("data-go")){S.day=t.getAttribute("data-day");location.hash=t.getAttribute("data-go");return;}
 if(t.hasAttribute("data-view")){S.pmenu=false;var nv=t.getAttribute("data-view");if((location.hash||"").replace("#","")===nv)render();else location.hash=nv;return;}
 if(t.hasAttribute("data-day")){if(t.hasAttribute("data-sec")){var cv=curView();S.day=t.getAttribute("data-day");saveDay(S.day);location.hash=cv;return;}setDay(t.getAttribute("data-day"));return;}
 if(t.hasAttribute("data-id")){var i=t.getAttribute("data-id");setDone(i,!S.done[i]);}
});
root.addEventListener("toggle",function(e){if(e.target.hasAttribute&&e.target.hasAttribute("data-rl")){S.rlOpen=S.rlOpen||{};S.rlOpen[e.target.getAttribute("data-rl")]=e.target.open;}if(e.target.hasAttribute&&e.target.hasAttribute("data-fold")){S.open=S.open||{};S.open[e.target.getAttribute("data-fold")]=e.target.open;}if(e.target.classList&&e.target.classList.contains("pmenu"))S.pmenu=e.target.open;if(e.target.classList&&e.target.classList.contains("edt"))S.edtOpen=e.target.open;},true);
 try{S.standalone=window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;}catch(e){}
window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();S.installEvt=e;if(curView()==="parametres")softRender();});
window.addEventListener("appinstalled",function(){S.installEvt=null;S.standalone=true;flash("global","L’Académie est installée : retrouvez l’icône 絆 sur l’écran d’accueil.");});
root.addEventListener("keydown",function(e){
 if(e.key==="Tab"&&S.focus){var dlg=document.querySelector(".focus");if(dlg){var fs=[].slice.call(dlg.querySelectorAll('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')).filter(function(x){return !x.disabled&&x.offsetParent!==null;});
  if(fs.length){var f0=fs[0],fl=fs[fs.length-1];if(!dlg.contains(document.activeElement)){e.preventDefault();f0.focus();return;}if(e.shiftKey&&document.activeElement===f0){e.preventDefault();fl.focus();return;}if(!e.shiftKey&&document.activeElement===fl){e.preventDefault();f0.focus();return;}}}}
 if(e.key==="Escape"&&S.focus){var fk=S.focus;S.focus=null;render();var back=document.querySelector('[data-focus="'+(fk||"").replace(/"/g,'\\"')+'"]');if(back)back.focus();return;}if(e.key==="Escape"&&S.bookOpen&&e.target.closest&&e.target.closest("#bookf")){S.bookOpen=false;render();var ob=document.querySelector('[data-act="book-open"]');if(ob)ob.focus();}});
window.addEventListener("hashchange",function(){S.pmenu=false;S.sheetFor=null;S.rstartOpen=false;S.ideaOpen=false;var hv=(location.hash||"").replace("#","").split("/")[0];if(hv&&hv!=="parametres"&&hv!=="conseils")lsSet("kizuna-view",hv);S.bookOpen=false;S.focus=null;render();var ar=S.afterRender&&document.getElementById(S.afterRender);S.afterRender=null;if(ar)(ar.closest("details")||ar).scrollIntoView({block:"start"});else window.scrollTo(0,0);});
document.addEventListener("toggle",function(e){var d=e.target;if(d&&d.getAttribute&&d.getAttribute("data-more")){S.open=S.open||{};S.open[d.getAttribute("data-more")]=d.open;}},true);

/* ------------------------------------------------------------ démarrage */
if(DEMO){loadAll();}
else if(!window.supabase){if(!goOffline())renderError("La bibliothèque Supabase n’a pas pu se charger. Vérifiez la connexion internet.");}
else{
 sb=window.supabase.createClient(CFG.SUPABASE_URL,CFG.SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true}});
 sb.auth.getSession().then(function(r){if(r.data&&r.data.session)loadAll();else if(!navigator.onLine&&goOffline())return;else renderLogin();}).catch(function(){if(!goOffline())renderLogin();});
}
if("serviceWorker" in navigator&&!/localhost|127\.0\.0\.1/.test(location.hostname)||("serviceWorker" in navigator&&/[?&]sw=1/.test(location.search))){try{navigator.serviceWorker.register(location.pathname.indexOf("/preview/")>=0?"../sw.js":"sw.js").catch(function(){});}catch(e){}}
})();
