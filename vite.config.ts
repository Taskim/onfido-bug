import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      // Somehow @vitejs/plugin-legacy@2.3.1 does not load browserlist config from .browserlistsconfig or package.json.
      // We are only interested in Chrome > 49 for Nepting EPTs.
      targets: ["Chrome >= 49"],
    }),
  ],
});
