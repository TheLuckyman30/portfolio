import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@css": path.resolve(__dirname, "./src/css"),
      "@themes": path.resolve(__dirname, "./src/css/themes"),
      "@componentCss": path.resolve(__dirname, "./src/css/components"),
      "@commonUiCss": path.resolve(__dirname, "./src/css/components/common-ui"),
      "@sectionsCss": path.resolve(__dirname, "./src/css/sections"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
    },
  },
});
