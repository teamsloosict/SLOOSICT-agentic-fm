import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agentic-fm.com',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: '_assets',
  },
});
