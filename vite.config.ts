import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Replaces vite-tsconfig-paths plugin — native Vite tsconfig path resolution
    tsconfigPaths: true,
  },
  build: {
    outDir: "dist",
  },
});
