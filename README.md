## Vizzu library documentation site

This is the source repository of the documentation site, if you are looking
for the documentation, go to https://lib.vizzuhq.com/latest

### Building the documentation

Clone `vizzu-lib-doc`:

```shell
git clone git@github.com:vizzuhq/vizzu-lib-doc.git
cd vizzu-lib-doc
```

Clone `vizzu-lib` into `vizzu-lib-doc` and 

```shell
git clone git@github.com:vizzuhq/vizzu-lib.git
```

Run static code analysis over `vizzu-lib` documentation releated files:

```shell
cd vizzu-lib/tools/docs
make check
cd ../../..
```

Run static code analysis over `vizzu-lib-doc`:

```shell
make check
```

Create thumbnails and build the documentation:

```shell
make thumbnails
make doc
```

Note: If you want to use `Vizzu` with a version other than the latest released version,
you should set the url variables in `tools/mkdocs/modules/vizzu.py`.
