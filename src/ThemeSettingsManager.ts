import * as vscode from "vscode";

export class ThemeSettingsManager {
  static globalState: vscode.Memento;

  static setSettings(settings: object) {
    return this.globalState.update("savedSettings", settings);
  }

  static getSettings() {
    return this.globalState.get("savedSettings");
  }
}
