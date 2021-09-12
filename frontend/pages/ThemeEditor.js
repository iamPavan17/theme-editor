import App from "../components/ThemeEditor.svelte";
import { convertToHumanForm, formatStylings } from "../pages/helpers";

const app = new App({
  target: document.body,
  props: { convertToHumanForm, formatStylings },
});

export default app;
