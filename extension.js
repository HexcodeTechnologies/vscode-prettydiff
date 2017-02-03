var vscode = require('vscode');
var prettydiff = require("./libs/prettydiff")
var fs = require("fs")
function activate(context) {

    var vscodePrettydiff = vscode
        .commands
        .registerCommand('extension.prettyDiff', function () {
            var editor = vscode.window.activeTextEditor;
            if (!editor) {
                return; // No open text editor
            }

            var source = editor
                .document
                .getText()
            var args = {
                source: source,
                mode: "beautify",
                lang: "auto"
            }
            var output = prettydiff(args)
            var path = editor
                .document
                .uri
                .path
                console
                .log(path)
            fs.writeFile(path, output, (err) => {
                if (err) 
                    throw err;
                }
            );

        });

    context
        .subscriptions
        .push(vscodePrettydiff);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;