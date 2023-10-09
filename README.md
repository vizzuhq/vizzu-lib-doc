# Vizzu

## Documentation

This is the host repository of the Vizzu library documentation site, if you are
looking for the documentation, go to https://lib.vizzuhq.com/latest

In addition to the gh-pages, the showcases and some pictures are stored here.

## CI

To run CI steps, run the following commands:

```sh
git clone git@github.com:vizzuhq/vizzu-lib.git

cd vizzu-lib
git clone git@github.com:vizzuhq/vizzu-lib-doc.git

npm install
npx prettier --config .prettierrc -c vizzu-lib-doc/docs vizzu-lib-doc/.github
npx eslint --ext .js,.cjs,.mjs --config .eslintrc.cjs vizzu-lib-doc/docs
```
