import * as vscode from "vscode";
import { ThemeEditorPanel } from "./ThemeEditorPanel";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("theme-editor.helloWorld", () => {
      vscode.window.showInformationMessage("Hello World!");
      ThemeEditorPanel.createOrShow(context.extensionUri);
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
