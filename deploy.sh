# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://panduola666.github.io
# git push -f git@github.com:panduola666/panduola666.github.io.git main

# if you are deploying to https://panduola666.github.io/hexschool_vue3
git push -f https://github.com/tanukili/2023-js-week0-viewpoint main:gh-pages

cd -