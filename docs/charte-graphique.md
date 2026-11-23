# Charte graphique — Académie Kizuna

Planches de référence (maquettes validées) : canevas « Identité visuelle du planning familial », planches 8 à 15.

## 1. Nom et ton

- **Nom** : Académie Kizuna. *Kizuna* (絆) = le lien, ce qui unit une équipe.
- **Accroche** : « Devoirs, missions et organisation ».
- **Affichage** : « ACADÉMIE KIZUNA » sur ordinateur (deux lignes : ACADÉMIE en petit, KIZUNA en grand) ;
  « KIZUNA » seul sur téléphone.
- **Vocabulaire** : un devoir est une **mission** ; le parent est le **sensei** ; la récompense est un **tampon** ;
  la fiche de l'enfant est sa **carte d'élève**.
- **Ton** : tutoiement pour les enfants, vouvoiement neutre dans les écrans parents ; phrases courtes ; encourager,
  ne jamais culpabiliser (une série qui s'arrête ne retire rien).
- Inspiration : l'univers manga (académies de héros), **sans** reprendre de nom, personnage ou visuel protégé.

## 2. Logo

- Kanji **絆** en **Dela Gothic One**, blanc, dans un cercle Lagon `#0E5E6F` à lignes de vitesse
  (rayons blancs à 16 % d'opacité), bordure corail `#FF6B4A` (épaisseur ≈ 1/14 du diamètre).
- Tailles : 40 px (bandeau), 72 px (accueil), 84 px (connexion).
- Icône d'appli : même dessin, fond Lagon plein (version « maskable », logo à 72 % du carré).
- Ne pas : changer la police du kanji, le déformer, l'utiliser sur un fond qui le fait disparaître.

## 3. Tampon de l'Académie

- Carré arrondi rouge `#C62E3A`, double filet intérieur (rouge puis blanc), légèrement tourné (−8°),
  kanji 絆 blanc en **Dela Gothic One** (toujours gras).
- Sur les cartes colorées : **contour blanc de 3 px et petite ombre** pour rester visible sur toutes les couleurs.

## 4. Typographie

| Usage | Police | Graisse |
|---|---|---|
| Titres, chiffres, noms sur les cartes | **Unbounded** | 800–900 (très gras sur les cartes) |
| Texte courant, formulaires | **Atkinson Hyperlegible** | 400 / 700 |
| Kanji 絆 | **Dela Gothic One** | 400 (police naturellement très grasse) |

**Ces trois polices ne doivent pas être changées.** Atkinson Hyperlegible a été choisie pour la lisibilité
(caractères bien distincts, zéro barré). Chargement : Google Fonts.

## 5. Couleurs

### 5.1 Couleurs de l'Académie
| Nom | Code | Usage |
|---|---|---|
| Bleu nuit | `#0D3B45` | texte principal, cartes sombres |
| Lagon | `#0E5E6F` | couleur de marque, logo |
| Corail | `#FF6B4A` | accent, bordure du logo, rangs |
| Corail foncé | `#B83E25` | texte corail **sur fond clair** (contraste suffisant) |
| Corail clair | `#FF8A6E` | texte corail **sur fond sombre** |
| Menthe grise | `#9CC9C2` | bordures de cases à cocher |
| Fond | `#F6F8F8` | fond de page |
| Lignes | `#DCE7E6` | séparateurs, bordures de cartes |
| Rouge tampon | `#C62E3A` | tampon |

### 5.2 Couleurs de héros (une par profil, au choix dans Paramètres)
| Nom | Fond | Accent | Texte |
|---|---|---|---|
| Lagon | `#0E5E6F` | `#FF6B4A` | blanc |
| Sakura | `#C2366C` | `#FFD166` | blanc |
| Améthyste | `#5B3FA8` | `#FF8FB1` | blanc |
| Jade | `#14806D` | `#9FF5E1` | blanc |
| Graphite (parents) | `#3A4250` | `#FF6B4A` | blanc |
| Ombre | `#16181D` | `#E9C46A` | blanc |
| Brasier | `#C62E3A` | `#FFC93C` | blanc |
| Émeraude | `#1E7A4E` | `#F2C94C` | blanc |
| Éclair | `#F2B705` | `#16181D` | `#2B2100` |

Règle pour une nouvelle couleur : contraste d'au moins **4,5:1** entre le texte et le fond
(vérifié avant ajout ; ex. Jade a été foncé à `#14806D` pour cette raison).

## 6. Éléments

- **Carte d'élève / carte de profil** : fond couleur de héros + lignes de vitesse
  (`repeating-conic-gradient`, rayons blancs à 12 %), coins arrondis 24–28 px ; bouclier du niveau
  (couleur d'accent, chiffre bleu nuit), nom en Unbounded 900.
- **Cartes** : blanc, coins 22–24 px, ombre douce ; carte d'action principale avec ombre « marche » (6 px, couleur des lignes).
- **Bouton d'action** : couleur de héros, texte blanc, coins 14 px, ombre « marche » de 5 px qui s'enfonce au clic.
- **Chemin du jour** : ronds de 56 px (48 px sur téléphone) reliés par un trait de 4 px ; étape en cours entourée
  de la couleur d'accent ; étape faite remplie de la couleur de héros avec une coche.
- **Pictogrammes « autocollants »** (série 2) : dessin coloré dans un carré blanc arrondi, contour bleu nuit
  et ombre décalée de 2 px. Jeu : Devoir, Réviser, Lecture, Apprendre, Relire, Sac, Corvée, Rangement, Sport,
  Loisir, Repas, Coucher. Tous à la même taille dans une liste.

## 7. Accessibilité

- Contraste du texte : 4,5:1 minimum (3:1 pour les grands titres gras).
- Zones à toucher : 44 × 44 px minimum.
- Contour de sélection clavier visible (3 px, couleur d'accent).
- Animations courtes et désactivées si le système demande « réduire les animations ».
- Ne jamais transmettre une information par la couleur seule (toujours un mot, un chiffre ou une icône).
