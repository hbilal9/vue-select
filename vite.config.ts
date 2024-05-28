import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			// tsConfigFilePath: "./tsconfig.json",
			include: ["src/**/*.vue", "src/**/*.ts"],
			exclude: ["vite.config.ts", "main.ts"],
			// outputDir: "dist/types",
			insertTypesEntry: true,
			rollupTypes: true,
		}),
	],
	build: {
		cssCodeSplit: false,
		lib: {
			entry: "./src/selectPlugin.ts",
			formats: ["es", "cjs"],
			name: "vSelect",
			fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
