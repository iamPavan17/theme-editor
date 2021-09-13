import App from "../components/ThemeEditor.svelte";
import { convertToHumanForm, formatStylings } from "../pages/helpers";
import { defaultThemeSettings } from "./constants";

const app = new App({
  target: document.body,
  props: { convertToHumanForm, formatStylings, defaultThemeSettings },
});

export default app;
