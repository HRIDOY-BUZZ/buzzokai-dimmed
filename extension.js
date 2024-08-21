const vscode = require('vscode');
function a(c) {
    let m = vscode.commands.registerCommand('buzzokai.mono', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Mono Dimmed', !0)),
        r = vscode.commands.registerCommand('buzzokai.reversed', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Reversed Dimmed', !0)),
        g = vscode.commands.registerCommand('buzzokai.github', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai GitHub Dimmed', !0)),
        d = vscode.commands.registerCommand('buzzokai.material', () => vscode.workspace.getConfiguration().update('workbench.colorTheme', 'Buzzokai Material Dimmed', !0));
    c.subscriptions.push(m, r, g, d);
}
function d() {}
module.exports = {a,d};