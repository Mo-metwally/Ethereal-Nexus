const vscode = require('vscode');

function activate(context) {
    const themeName = 'Ethereal Mist';
    const config = vscode.workspace.getConfiguration();
    const currentTheme = config.get('workbench.colorTheme');

    if (currentTheme !== themeName) {
        config.update('workbench.colorTheme', themeName, vscode.ConfigurationTarget.Global)
            .then(() => {
                vscode.window.showInformationMessage(`"${themeName}" theme is now activated!`);
            });
    }
}

function deactivate() { }

module.exports = { activate, deactivate };
