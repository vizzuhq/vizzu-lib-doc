const { Converter } = require("typedoc")

exports.load = function({ application }) {
        application.converter.on(Converter.EVENT_CREATE_DECLARATION, (_context, reflection, node) => {
                if (!node || !node.name || reflection.name !== "default") return;

                reflection.name = node.name.getText();
        });
};
