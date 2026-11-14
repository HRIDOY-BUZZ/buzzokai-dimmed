const vscode = require('vscode');

function selectTheme(theme) {
    const configuration = vscode.workspace.getConfiguration();
    const target = configuration.inspect('workbench.colorTheme')?.workspaceValue !== undefined
        ? vscode.ConfigurationTarget.Workspace
        : vscode.ConfigurationTarget.Global;

    return configuration.update('workbench.colorTheme', theme, target);
}

function activate(context) {
    let mono = vscode.commands.registerCommand('buzzokai.mono', () => selectTheme('Buzzokai Mono Dark')),
        monoGreen = vscode.commands.registerCommand('buzzokai.monoGreen', () => selectTheme('Buzzokai Mono Green')),
        reversed = vscode.commands.registerCommand('buzzokai.reversed', () => selectTheme('Buzzokai Reversed Dark')),
        github = vscode.commands.registerCommand('buzzokai.github', () => selectTheme('Buzzokai GitHub Dark')),
        material = vscode.commands.registerCommand('buzzokai.material', () => selectTheme('Buzzokai Material Dark')),
        materialBlue = vscode.commands.registerCommand('buzzokai.materialBlue', () => selectTheme('Buzzokai Material Blue')),
        liquidBlue = vscode.commands.registerCommand('buzzokai.shopifyBlue', () => selectTheme('Buzzokai Liquid Blue')),
        hydrogenGreen = vscode.commands.registerCommand('buzzokai.shopifyGreen', () => selectTheme('Buzzokai Hydrogen Green'));
    context.subscriptions.push(mono, monoGreen, reversed, github, material, materialBlue, liquidBlue, hydrogenGreen);
}
function deactivate() {}
module.exports = {activate,deactivate};
