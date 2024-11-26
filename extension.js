const vscode = require('vscode');
function activate(context) {
    let mono = vscode.commands.registerCommand('buzzokai.mono', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Mono Dark', true)),
        monoGreen = vscode.commands.registerCommand('buzzokai.monoGreen', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Mono Green', true)),
        reversed = vscode.commands.registerCommand('buzzokai.reversed', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Reversed Dark', true)),
        github = vscode.commands.registerCommand('buzzokai.github', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai GitHub Dark', true)),
        material = vscode.commands.registerCommand('buzzokai.material', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Material Dark', true)),
        materialBlue = vscode.commands.registerCommand('buzzokai.materialBlue', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Material Blue', true)),
        shopifyBlue = vscode.commands.registerCommand('buzzokai.shopifyBlue', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Shopify Blue', true)),
        shopifyGreen = vscode.commands.registerCommand('buzzokai.shopifyGreen', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Shopify Green', true));
    context.subscriptions.push(mono, monoGreen, reversed, github, material, materialBlue, shopifyBlue, shopifyGreen);
}
function deactivate() {}
module.exports = {activate,deactivate};