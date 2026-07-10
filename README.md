# Indi — Website (indi-v2)

B2B commercial-services site for **Indi** — distribution, revenue management and digital marketing for independent hotels & motels in Australia. Static build, owner-facing, no guest booking. Built from the Indi style guide v2.0.

## Stack

- **Astro 5** (static output) + **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **AOS** (Animate On Scroll) for scroll reveals, with `prefers-reduced-motion` respected
- Inline SVG icons (Material-style) — no external icon-font dependency
- Fonts: Fraunces / Hanken Grotesk / IBM Plex Mono (Google Fonts)
- No CMS — content is static, edited in code

## Commands

```bash
npm install
npm run dev       # local dev at http://localhost:4321
npm run build     # static output to ./dist
npm run preview   # preview the built site
```

## Deploy (Hostinger)

1. `npm run build` → upload the contents of `dist/` to `public_html/` (via hPanel File Manager, FTP, or Git deploy).
2. `dist/.htaccess` is included — it forces HTTPS, sets caching/compression, and 301-redirects the old guest URLs.
3. Point `indihotels.com.au` at Hostinger **without touching existing email DNS / subdomains** (e.g. a client portal).
4. Enable SSL in hPanel.

## Before go-live — replace these placeholders

- **Audit form handler:** in `src/pages/contact.astro`, set the Web3Forms `access_key` (currently `REPLACE_WITH_WEB3FORMS_ACCESS_KEY`). Confirm the submission destination, who's notified, and any autoresponder. The form fails gracefully until the key is set.
- **`[TO SUPPLY]` content:** testimonials (with written consent), results figures, case studies, client logos/names, team bios + photos, real photography. Results & About pages are built as containers ready to receive these.
- **Analytics:** add GA4 (or preferred) snippet to `src/layouts/BaseLayout.astro`.
- **Logo artwork:** the SVG sun-over-horizon mark is built from the style guide concept (`src/components/Logo.astro`). Swap for final vector artwork if supplied.

## How to request content changes (no CMS)

Since there's no content-editing system, text/image edits are made in code:

- **Page copy** lives in each page file under `src/pages/`.
- **Shared content** (nav, services, tiers, journey, projects) lives in `src/data/site.js`.
- **Service-page content** (the three capability pages) lives in `src/data/services.js`.
- After any edit: `npm run build` and re-upload `dist/`.

To request a change, send the page + the exact new wording; it's a quick edit-build-deploy.

## SEO & AI-agent visibility

- Semantic HTML, per-page `<title>` / meta description / canonical, Open Graph + Twitter tags, alt text.
- **JSON-LD** structured data (`ProfessionalService` + `Service` + `WebPage`) in `src/components/Seo.astro`.
- `sitemap.xml`, `robots.txt` (explicitly welcomes major AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.).
- **`llms.txt`** + **`llms-full.txt`** — clean, structured summaries so AI agents can read the site without rendering JS. Generated from site data, so they stay in sync.
- Keyword focus (from research): hotel revenue management Australia, independent hotel distribution services, outsourced revenue management, direct bookings strategy, channel management, dynamic pricing.

## Pages

Home · Services (overview + Distribution / Revenue Management / Digital Marketing, shared template) · How We Work · Results · About · Contact/Audit · 404.

## Design notes (from the style guide — the visual source of truth)

- Monochrome spine (ink/paper/grey) does ~90% of the work; ocean/clay/teak/palm accents used sparingly — **one accent per view**, never large fields or body text.
- Ocean is the lead accent (key CTA). Clay appears as the occasional whisper (an underline, the favicon sun).
- Warmth comes from Fraunces + photography, not the palette.
