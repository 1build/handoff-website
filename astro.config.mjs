// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://handoff.ai',
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => {
        // Exclude internal/dev and legacy routes from sitemap
        const path = new URL(page).pathname;
        if (path.startsWith('/components') || path.startsWith('/astro-components')) return false;
        if (path.startsWith('/blogold')) return false;
        return true;
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        // Optional: set lastmod to build time so crawlers see fresh dates
        item.lastmod = item.lastmod ?? new Date().toISOString().split('T')[0];
        // Hint crawlers: blog posts change more often, main pages less
        if (path.startsWith('/blog/') && path !== '/blog/' && path !== '/blog') {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (path === '/') {
          item.changefreq = 'daily';
          item.priority = 1;
        } else {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
