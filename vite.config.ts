import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Employee_Assistance_System/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

