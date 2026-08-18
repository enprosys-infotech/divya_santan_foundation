import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    // Must be before react() to generate routeTree.gen.ts before React transforms
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    // Replaces vite-tsconfig-paths plugin — native Vite tsconfig path resolution
    tsconfigPaths: true,
  },
  build: {
    outDir: "dist",
  },
});
