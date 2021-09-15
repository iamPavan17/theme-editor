import * as vscode from "vscode";
import { ThemeSettingsManager } from "./ThemeSettingsManager";
import { SidebarProvider } from "./SidebarProvider";
// import { ThemeEditorPanel } from "./ThemeEditorPanel";

export function activate(context: vscode.ExtensionContext) {
  // defining global state
  ThemeSettingsManager.globalState = context.globalState;

  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "theme-editor-sidebar",
      sidebarProvider
    )
  );

  // context.subscriptions.push(
  //   vscode.commands.registerCommand("theme-editor.helloWorld", () => {
  //     vscode.window.showInformationMessage("Hello World!");
  //     ThemeEditorPanel.createOrShow(context.extensionUri, undefined);
  //   })
  // );
}

// this method is called when your extension is deactivated
export function deactivate() {}
