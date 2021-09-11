import App from "../components/ThemeEditor.svelte";
import { convertHumanForm } from "../pages/helpers";

const app = new App({
  target: document.body,
  props: { convertHumanForm },
});

export default app;
