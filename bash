npm run deploy
#!/bin/bash

# Script de deploy para GitHub Pages
npm run build

cd build || exit

git init
git add .
git commit -m "Deploy"

git push --force git@github.com:Toniakbanares/JaquesRD-.git main:gh-pages

cd -
