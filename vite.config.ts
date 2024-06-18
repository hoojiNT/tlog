import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
export default defineConfig({
  plugins: [react(), basicSsl(), TanStackRouterVite()],
  build: {
    outDir: "./docs",
  },
  base: "./",
});
