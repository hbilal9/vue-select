import { createApp } from "vue";
import App from "./App.vue";
import vSelect from "./selectPlugin";
// import vSelect from "@hbilal_9/vue-select";
// import "@hbilal_9/vue-select/dist/style.css";

const app = createApp(App);
app.use(vSelect);
app.mount("#app");
