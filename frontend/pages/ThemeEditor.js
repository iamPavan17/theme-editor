import App from "../components/ThemeEditor.svelte";
import {
  convertToHumanForm,
  formatStylings,
  assignSelectThemeValues,
  resetToDefaultSettings,
} from "../pages/helpers";
import { defaultThemeSettings } from "./constants";

const app = new App({
  target: document.body,
  props: {
    convertToHumanForm,
    formatStylings,
    defaultThemeSettings,
    assignSelectThemeValues,
    resetToDefaultSettings,
  },
});

export default app;
