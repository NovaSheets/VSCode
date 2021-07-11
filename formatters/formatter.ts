import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('NovaSheets formatter activated')
    const formatter = vscode.languages.registerDocumentFormattingEditProvider('novasheets', {
        provideDocumentFormattingEdits(document) {
            const output = document.getText()

                // Variable declarations
                .replace(/@var\s+([^|=]+)\s*(=\s*)?/g, (_, name, eq) => '@var ' + name.trim() + (eq ? ' = ' : ''))
                .replace(/(?<!\n)\s*@endvar/g, '\n@endvar')

                // Variable substitutions
                .replace(/\$\( */g, '$( ')
                // .replace(/(?<!^)(?<=^|(?:\$\(|\))[^()]+) *\)/gm, ' )')
                .replace(/(?<!^ *) *\| *(?!\|)/gm, ' | ')
                .replace(/\$\(\s*([^$()|]+)\s*\)/g, '$($1)')
                .replace(/(?<=\|)(.*?) *=\s*/g, '$1 = ')

                // Parser constants
                .replace(/@const\s+([A-Z]+)\s+(true|false|\d+)/g, '@const $1 $2')

                // CSS
                .replace(/ *{/g, ' {')
                .replace(/(?<=[{(][^})]*)([a-z-]+)\s*:(?!\/\/) +/g, '$1: ')
                .replace(/\s*; *(?!})/g, '; ')
                .replace(/!\s*important/g, '!important')

                // General cleanup
                .replace(/ +$/gm, '')

            const startOfDocument = document.lineAt(0).range.start;
            const endOfDocument = document.lineAt(document.lineCount - 1).range.end;
            const documentRange = new vscode.Range(startOfDocument, endOfDocument);
            const replacement = vscode.TextEdit.replace(documentRange, output);
            return [replacement];
        }
    });
    context.subscriptions.push(formatter);
}
