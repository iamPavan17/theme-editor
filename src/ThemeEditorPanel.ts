import * as vscode from "vscode";
import { getNonce } from "./getNonce";
import { ThemeSettingsManager } from "./ThemeSettingsManager";

export class ThemeEditorPanel {
  /**
   * Track the currently panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: ThemeEditorPanel | undefined;

  public static readonly viewType = "theme-editor-panel";

  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;
  private _selectedTheme: string | undefined;
  private _disposables: vscode.Disposable[] = [];

  public static createOrShow(
    extensionUri: vscode.Uri,
    selectedTheme: string | undefined
  ) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    // If we already have a panel, show it.
    if (ThemeEditorPanel.currentPanel) {
      ThemeEditorPanel.currentPanel._panel.reveal(column);
      ThemeEditorPanel.currentPanel._selectedTheme = selectedTheme;
      ThemeEditorPanel.currentPanel._update();
      return;
    }

    // Otherwise, create a new panel.
    const panel = vscode.window.createWebviewPanel(
      ThemeEditorPanel.viewType,
      "ThemeEditor",
      column || vscode.ViewColumn.One,
      {
        // Enable javascript in the webview
        enableScripts: true,

        // And restrict the webview to only loading content from our extension's `media` directory.
        localResourceRoots: [
          vscode.Uri.joinPath(extensionUri, "media"),
          vscode.Uri.joinPath(extensionUri, "out/compiled"),
        ],
      }
    );

    ThemeEditorPanel.currentPanel = new ThemeEditorPanel(
      panel,
      extensionUri,
      selectedTheme
    );
  }

  public static kill() {
    ThemeEditorPanel.currentPanel?.dispose();
    ThemeEditorPanel.currentPanel = undefined;
  }

  public static revive(
    panel: vscode.WebviewPanel,
    extensionUri: vscode.Uri,
    selectedTheme: string | undefined
  ) {
    ThemeEditorPanel.currentPanel = new ThemeEditorPanel(
      panel,
      extensionUri,
      selectedTheme
    );
  }

  private constructor(
    panel: vscode.WebviewPanel,
    extensionUri: vscode.Uri,
    selectedTheme: string | undefined
  ) {
    this._panel = panel;
    this._extensionUri = extensionUri;
    this._selectedTheme = selectedTheme;

    // Set the webview's initial html content
    this._update();

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programatically
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // // Handle messages from the webview
    // this._panel.webview.onDidReceiveMessage(
    //   (message) => {
    //     switch (message.command) {
    //       case "alert":
    //         vscode.window.showErrorMessage(message.text);
    //         return;
    //     }
    //   },
    //   null,
    //   this._disposables
    // );
  }

  public dispose() {
    ThemeEditorPanel.currentPanel = undefined;

    // Closing side bar once the theme editor tab is closed
    vscode.commands.executeCommand("workbench.action.closeSidebar");

    this._panel.dispose(); // Clean up our resources

    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  private async _update() {
    const webview = this._panel.webview;

    this._panel.webview.html = this._getHtmlForWebview(webview);
    webview.onDidReceiveMessage(async (data) => {
      switch (data.type) {
        case "saveExisting": {
          let savedSettings: any = await ThemeSettingsManager.getSettings();
          savedSettings[data.savedTheme] = data.value;
          await ThemeSettingsManager.setSettings(savedSettings);
          vscode.window.showInformationMessage("Theme saved successfully!");
          break;
        }
        case "setTitle": {
          // Setting the title of the panel when the usr selects any saved theme settings.
          if (data.value) {
            this._panel.title = data.value;
          } else {
            this._panel.title = "ThemeEditor";
          }
          break;
        }
        case "getSelectedTheme": {
          if (data.value) {
            let savedSettings: any = await ThemeSettingsManager.getSettings();
            webview.postMessage({
              type: "selectedTheme",
              value: savedSettings[data.value],
            });
          }
          break;
        }
        case "apply": {
          // Updating the theme
          await vscode.workspace
            .getConfiguration()
            .update(
              "workbench.colorCustomizations",
              data.value,
              vscode.ConfigurationTarget.Global
            );
          vscode.window.showInformationMessage("Theme updated successfully!");
          break;
        }
        case "save": {
          // Saving the theme
          const savedSettings: any = await ThemeSettingsManager.getSettings();
          const settingsName = await vscode.window.showInputBox({
            prompt: "Settings name",
            title: "Save Settings",
            validateInput: (value: string): string | undefined => {
              if (savedSettings && Object.keys(savedSettings).includes(value)) {
                return "The given settings name already exists";
              }
              if (value.length < 3) {
                return "Minimum of 3 characters required";
              } else {
                return undefined;
              }
            },
          });

          if (settingsName) {
            const newSettings = {
              [settingsName]: data.value,
            };

            let savedSettings = await ThemeSettingsManager.getSettings();
            if (savedSettings) {
              Object.assign(newSettings, savedSettings);
            }
            await ThemeSettingsManager.setSettings(newSettings);
            vscode.window.showInformationMessage(
              "Theme saved successfully, Please click on a reload to see the newly saved settings!"
            );
          }
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

  private _getHtmlForWebview(webview: vscode.Webview) {
    // Default CSS
    const styleResetPath = vscode.Uri.joinPath(
      this._extensionUri,
      "media",
      "reset.css"
    );
    const stylesPathMainPath = vscode.Uri.joinPath(
      this._extensionUri,
      "media",
      "vscode.css"
    );

    // And the uri we use to load this script in the webview
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "compiled/ThemeEditor.js")
    );
    const styleMainUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "compiled/ThemeEditor.css")
    );

    // Uri to load styles into webview
    const stylesResetUri = webview.asWebviewUri(styleResetPath);
    const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);
    const customStyles = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "editor.css")
    );

    // Use a nonce to only allow specific scripts to be run
    const nonce = getNonce();

    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
        -->
        <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${
          webview.cspSource
        }; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${customStyles}" rel="stylesheet">
				<link href="${stylesResetUri}" rel="stylesheet">
				<link href="${stylesMainUri}" rel="stylesheet">
        <link href="${styleMainUri}" rel="stylesheet">
        <script nonce="${nonce}">
            const vscodeApi = acquireVsCodeApi(); // making VS Code APIs available to webviews.
            const selectedTheme = ${JSON.stringify(this._selectedTheme)}
        </script>
			</head>
      <body>
			</body>
      <script src="${scriptUri}" nonce="${nonce}"></script>
			</html>`;
  }
}
