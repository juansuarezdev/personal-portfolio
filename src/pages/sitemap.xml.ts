import type { APIRoute } from 'astro';
import { locales } from '../i18n/ui';
import { allWork, hasPage } from '../data/work';
import { url } from '../i18n/url';

const paths = ['/', '/cv/', ...allWork.filter(hasPage).map((w) => `/work/${w.slug}/`)];

export const GET: APIRoute = ({ site }) => {
  const abs = (lang: string, p: string) => new URL(url(`/${lang}${p}`), site).href;
  const body = paths
    .flatMap((p) =>
      locales.map((lang) => {
        const alts = [...locales, 'x-default']
          .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(l === 'x-default' ? 'en' : l, p)}" />`)
          .join('\n');
        return `  <url>\n    <loc>${abs(lang, p)}</loc>\n${alts}\n  </url>`;
      }),
    )
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
