# odin-template
Creating a template for future Odin Project repo's to give me a quicker start. Hopefully this works!

## Webpack Packages
- html-webpack-plugin
- style-loader
- css-loader
- html-loader
- webpack-dev-server

## Webpack Scripts
- "build" runs npx webpack
- "dev" runs the webpack dev server, connect at localhost:8080, ctrl-c to stop
- "deploy" pushes the dist files to github pages "gh-pages" branch
- "setup" builds out my folder structure, installs packages and runs npm init

## Structure
- /src contains /css, /font, /img and /js.
- Each of those contains a /wip folder that is .gitignore'd

### Setup GitHub Pages Sub-Branch
1. git branch gh-pages
2. git checkout gh-pages && git merge main --no-edit
3. npx webpack
4. git add dist -f && git commit -m "deployment commit"
5. webpack run deploy
6. git checkout main