import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "index.html", // Ensure this matches your deployment configuration
	},
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
});
