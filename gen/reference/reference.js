const TypeDoc = require("typedoc");

function reference()
{
    const app = new TypeDoc.Application();

    app.options.addReader(new TypeDoc.TSConfigReader());

    app.bootstrap({
        plugin: ["./gen/reference/default-rename.js"],
        entryPoints: ["vizzu-lib/src/apps/weblib/js-api/vizzu.d.ts", "vizzu-lib/src/apps/weblib/js-api/presets.d.ts"],
        entryPointStrategy: 'expand',
        tsconfig: "gen/reference/tsconfig.json",
        readme: "vizzu-lib/docs/content/reference/reference.md",
        name: "Vizzu",
    });

    const project = app.convert();

    if (project) {
        const outputDir = "docs/test/reference";
        return app.generateDocs(project, outputDir);
    }
}

exports.reference = reference;
