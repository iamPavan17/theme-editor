import * as vscode from "vscode";
import { ThemeSettingsManager } from "./ThemeSettingsManager";
import { SidebarProvider } from "./SidebarProvider";

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
}

// this method is called when your extension is deactivated
export function deactivate() {}
