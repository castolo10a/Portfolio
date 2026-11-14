import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Mantiene compatibles las variables REACT_APP_* ya configuradas en .env y en Netlify.
  envPrefix: ["VITE_", "REACT_APP_"],
});
