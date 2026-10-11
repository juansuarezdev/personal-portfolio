import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://juansuarezdev.github.io',
  base: '/personal-portfolio',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: true },
  },
});
