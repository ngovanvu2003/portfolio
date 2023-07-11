import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jquery from "vite-plugin-jquery";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    jquery({
      include: ["jquery"],
    }),
  ],
});
