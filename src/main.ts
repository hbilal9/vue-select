import { createApp } from "vue";
import App from "./App.vue";
import vSelect from "./selectPlugin";

const app = createApp(App);
app.use(vSelect);
app.mount("#app");
