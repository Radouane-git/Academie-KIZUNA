# Recette automatique (mode démo)

Scripts Playwright qui déroulent la recette sur la famille fictive de la démo (`?demo`), sans toucher aux vraies données.
Ils servent avant chaque version importante, en complément de la liste `docs/recette.md`.

```bash
cd site && python3 -m http.server 8765 &      # le site en local
python3 tests/recette_mise_en_page.py         # 4 largeurs : débordements, bandeau sur une ligne, zones < 44 px, erreurs JS
python3 tests/recette_contrastes.py           # contraste du texte (4,5:1, ou 3:1 pour les grands titres)
python3 tests/recette_clavier.py              # contour visible à chaque élément atteint avec Tab
python3 tests/recette_parcours.py             # 20 parcours : Commencer, cocher, livres, tampon, mot du sensei, mission…
```

Chrome est attendu dans `/usr/bin/google-chrome` (à adapter). Les règles du planning se vérifient à part, en simulant
plusieurs semaines avec `scripts/demo_data.py` et `planner.build_week` (voir le skill du projet).
