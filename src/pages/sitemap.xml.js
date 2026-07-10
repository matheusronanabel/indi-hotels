export const prerender = true;

import { SITE } from '../data/site.js';
import { SERVICE_ORDER } from '../data/services.js';

const routes = [
  '/',
  '/services',
  ...SERVICE_ORDER.map((s) => `/services/${s}`),
  '/how-we-work',
  '/results',
  '/about',
  '/contact',
];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const urls = routes
    .map((r) => {
      const loc = new URL(r, SITE.url).href;
      const priority = r === '/' ? '1.0' : r === '/contact' ? '0.9' : '0.8';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
