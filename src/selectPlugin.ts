import { App } from "vue";
import { Select } from "./components";

export default {
	install(app: App) {
		app.component("vSelect", Select);
	},
};

export { Select as vSelect };
