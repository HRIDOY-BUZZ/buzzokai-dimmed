const vscode = require('vscode');
function activate(context) {
    let mono = vscode.commands.registerCommand('buzzokai.mono', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Mono Dark', true)),
        monoGreen = vscode.commands.registerCommand('buzzokai.monoGreen', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Mono Green', true)),
        reversed = vscode.commands.registerCommand('buzzokai.reversed', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Reversed Dark', true)),
        github = vscode.commands.registerCommand('buzzokai.github', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai GitHub Dark', true)),
        material = vscode.commands.registerCommand('buzzokai.material', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Material Dark', true)),
        materialBlue = vscode.commands.registerCommand('buzzokai.materialBlue', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Material Blue', true)),
        liquidBlue = vscode.commands.registerCommand('buzzokai.liquidBlue', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Liquid Blue', true)),
        hydrogenGreen = vscode.commands.registerCommand('buzzokai.hydrogenGreen', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Hydrogen Green', true));
    context.subscriptions.push(mono, monoGreen, reversed, github, material, materialBlue, liquidBlue, hydrogenGreen);
}
function deactivate() {}
module.exports = {activate,deactivate};