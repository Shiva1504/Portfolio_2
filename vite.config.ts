import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    base: process.env.NODE_ENV === 'production' 
  ? '/Portfolio_2/' 
  : '/',
  build: {
    outDir: "dist", // Explicit output directory
    emptyOutDir: true, // Clear directory before build
    sourcemap: mode !== 'production', // Disable sourcemaps in production
  }
}));
