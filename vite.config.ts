import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio_2/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

