import App from "../components/ThemeEditor.svelte";
import { convertToHumanForm } from "../pages/helpers";

const app = new App({
  target: document.body,
  props: { convertToHumanForm },
});

export default app;
