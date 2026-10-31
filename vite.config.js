import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* BASE_PATH is set by the GitHub Pages workflow (e.g. "/tacony-smoke/").
   Leave it unset for Netlify, Vercel or a custom domain. */
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
