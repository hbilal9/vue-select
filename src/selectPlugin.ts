import { App } from "vue";
import Select from "./Select.vue";

export default {
	install(app: App) {
		app.component("vSelect", Select);
	},
};

export { Select as vSelect };
