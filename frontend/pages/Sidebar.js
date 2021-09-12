import App from "../components/Sidebar.svelte";
import { formatSavedStylesForList } from "./helpers";

const app = new App({
  target: document.body,
  props: { formatSavedStylesForList },
});

export default app;
