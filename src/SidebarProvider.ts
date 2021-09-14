import * as vscode from "vscode";
import { getNonce } from "./getNonce";
import { ThemeEditorPanel } from "./ThemeEditorPanel";
import { ThemeSettingsManager } from "./ThemeSettingsManager";

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true, // Allow scripts in the webview
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage(async (data) => {
      switch (data.type) {
        case "selected-theme": {
          ThemeEditorPanel.createOrShow(this._extensionUri, data.value);
          break;
        }
        case "getSavedThemeSettings": {
          const savedSettings = await ThemeSettingsManager.getSettings();
          // To webview sidebar
          webviewView.webview.postMessage({
            type: "saved-settings",
            value: savedSettings,
          });
          break;
        }
        case "popToRemove": {
          const answer = await vscode.window.showInformationMessage(
            `Are you sure you want to remove this setting: ${data.value}?`,
            "Yes",
            "No"
          );
          if (answer === "Yes") {
            let savedSettings: object | any =
              await ThemeSettingsManager.getSettings();
            delete savedSettings[data.value];
            await ThemeSettingsManager.setSettings(savedSettings);
            ThemeEditorPanel.kill();
            // To webview sidebar
            webviewView.webview.postMessage({
              type: "delete",
              value: data.value,
            });
            ThemeEditorPanel.createOrShow(this._extensionUri, undefined);
          }
          break;
        }
        case "closeThemeEditor": {
          // ThemeEditorPanel.kill();
          break;
        }
        case "loadThemeEditor": {
          ThemeEditorPanel.createOrShow(this._extensionUri, undefined);
          break;
        }
        case "onInfo": {
          if (!data.value) {
            return;
          }
          vscode.window.showInformationMessage(data.value);
          break;
        }
        case "onError": {
          if (!data.value) {
            return;
          }
          vscode.window.showErrorMessage(data.value);
          break;
        }
      }
    });
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    /** Default CSS */
    const styleResetUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "reset.css")
    );
    const styleVSCodeUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css")
    );

    /** And the uri we use to load this script in the webview */
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "compiled/Sidebar.js")
    );
    const styleMainUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "compiled/Sidebar.css")
    );
    const customStyles = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "sidebar.css")
    );

    /** Use a nonce to only allow a specific script to be run. */
    const nonce = getNonce();

    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
        -->
        <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${webview.cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${customStyles}" rel="stylesheet">
				<link href="${styleResetUri}" rel="stylesheet">
				<link href="${styleVSCodeUri}" rel="stylesheet">
        <link href="${styleMainUri}" rel="stylesheet">
        <script nonce="${nonce}">
            const vscodeApi = acquireVsCodeApi(); // making VS Code APIs available to webviews.
        </script>
			</head>
            <body style="padding: 0;">
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
  }
}
