import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // SADECE bu

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: vercel(), // SSR + API için otomatik ayar
});
