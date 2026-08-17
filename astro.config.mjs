// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this from a repository subpath, so `base` must be set or
// every absolute link 404s. A custom domain later means dropping `base` and
// pointing `site` at it — both are one line.
export default defineConfig({
  site: 'https://misomalcek.github.io',
  base: '/cyber-cv',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
