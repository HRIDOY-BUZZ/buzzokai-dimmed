const vscode = require('vscode');
function activate(context) {
    let mono = vscode.commands.registerCommand('buzzokai.mono', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Mono Dimmed', true)),
        reversed = vscode.commands.registerCommand('buzzokai.reversed', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Reversed Dimmed', true)),
        github = vscode.commands.registerCommand('buzzokai.github', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai GitHub Dimmed', true)),
        material = vscode.commands.registerCommand('buzzokai.material', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Material Dimmed', true)),
        materialBlue = vscode.commands.registerCommand('buzzokai.materialBlue', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Material Blue', true)),
        shopifyBlue = vscode.commands.registerCommand('buzzokai.shopifyBlue', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Shopify Blue', true));
    context.subscriptions.push(mono, reversed, github, material, materialBlue, shopifyBlue);
}
function deactivate() {}
module.exports = {activate,deactivate};