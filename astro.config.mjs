import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://converter-epub.com',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Don't include the converter / tool pages in sitemap (only static + blog)
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/_astro/') &&
        !page.includes('/blog/zh/'),
    }),
  ],
});
