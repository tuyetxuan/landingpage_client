import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

import {fileURLToPath} from "url";

import {defineConfig} from "vite";
import eslint from "vite-plugin-eslint";
import {nodePolyfills} from "vite-plugin-node-polyfills";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [
		tailwindcss(),
		react(),
		eslint(),
		nodePolyfills({
			include: ["path"],
			exclude: ["http"],
			globals: {
				Buffer: true,
				global: true,
				process: true,
			},
			overrides: {
				fs: "memfs",
			},
			protocolImports: true,
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@routes": path.resolve(__dirname, "./src/routes"),
			"@apis": path.resolve(__dirname, "./src/apis"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@configs": path.resolve(__dirname, "./src/configs"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@layouts": path.resolve(__dirname, "./src/layouts"),
			"@slices": path.resolve(__dirname, "./src/redux/slices"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@images": path.resolve(__dirname, "./src/assets/images"),
			"@icons": path.resolve(__dirname, "./src/assets/icons"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@services": path.resolve(__dirname, "./src/services"),
			"@redux": path.resolve(__dirname, "./src/redux"),
		},
	},
	server: {
		port: 7001,
		open: true,
		proxy: {
			"/api": {
				target: "http://localhost:7000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
