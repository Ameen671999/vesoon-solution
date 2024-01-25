import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vesoon-solution/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["three"],
    },
  },
  resolve: {
    dedupe: ["three"], // Deduplicate THREE.js instances
  },
});
