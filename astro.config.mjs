// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mandalapersonala.ro',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    // stilurile pentru imaginile responsive le scriem noi, în global.css
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // fișierele de font foarte mici (doar ă, ș, ț…) intră direct în CSS; cele mari rămân separate și se preîncarcă
      assetsInlineLimit: (file, content) => (file.endsWith('.woff2') ? content.length < 8192 : undefined),
    },
  },
});
