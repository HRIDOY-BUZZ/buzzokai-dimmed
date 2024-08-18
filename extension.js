const vscode = require('vscode');

function activate(context) {
    let mono = vscode.commands.registerCommand('buzzokai.mono', function () {
        vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Mono Dimmed', true);
    });

    let reversed = vscode.commands.registerCommand('buzzokai.reversed', function () {
        vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Reversed Dimmed', true);
    });

    let github = vscode.commands.registerCommand('buzzokai.github', function () {
        vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai GitHub Dimmed', true);
    });

    let material = vscode.commands.registerCommand('buzzokai.material', function () {
        vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Material Dimmed', true);
    });

    context.subscriptions.push(mono, reversed, github, material);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
