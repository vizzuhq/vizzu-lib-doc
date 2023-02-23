const TypeDoc = require("typedoc");
const path = require("node:path");

const repoPath = path.join(__dirname, "..", "..", "..");
const mkdocsPath = path.join(repoPath, "tools", "mkdocs");
const genPath = path.join(mkdocsPath, "reference");
const vizzuLibPath = path.join(repoPath, "vizzu-lib");
const vizzuLibExamplePath = path.join(vizzuLibPath, "example", "lib");

function reference() {
  const app = new TypeDoc.Application();

  app.options.addReader(new TypeDoc.TSConfigReader());

  app.bootstrap({
    plugin: ["typedoc-plugin-markdown", "typedoc-plugin-rename-defaults"],
    entryPoints: [
      path.join(vizzuLibExamplePath, "vizzu.d.ts"),
      path.join(vizzuLibExamplePath, "presets.d.ts"),
    ],
    entryPointStrategy: "expand",
    tsconfig: path.join(genPath, "tsconfig.json"),
    name: "Vizzu",
    hideInPageTOC: true,
    disableSources: true,
    readme: path.join(vizzuLibPath, "docs", "reference.md"),
  });

  const project = app.convert();

  if (project) {
    const outputDir = path.join(genPath, "tmp");
    return app.generateDocs(project, outputDir);
  }
}

reference();
