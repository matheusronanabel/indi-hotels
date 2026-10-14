# Indi — Brand Guidelines (Summary)

A condensed reference for the **Indi** brand as currently built on the site.
Source documents: `indi-ascend-brand-handoff-for-abel.md`, `color-palette-update.md`, `indi-logo-5b.md`, rounds 3–10 handoffs, and the implemented tokens in [global.css](src/styles/global.css).

> **Where docs disagree, this file follows the build.** The current brand is *Ascend* with the round-3+ refresh: **Fraunces + Inter** type and the **deeper blue `#0E4FB0`**. Superseded: the "Airy Blue" palette in `color-palette-update.md` (`#1466E0`, pure-white paper), the Space Grotesk / Instrument Sans / IBM Plex Mono type stack, and the wordmark lockup in `indi-logo-5b.md`.

---

## 1. Positioning & voice

- **Indi is a technology-enabled *service* business** — an expert commercial team of real people. **Never** call it a platform, an OS, a stack or software.
- Tagline: *The commercial team behind independent hotels.*
- Australian English. Sentence-case headlines.

**Guardrails**

- Never guarantee a RevPAR number — percentages only, and per round 10, no published figures where the handoff says so.
- Never disparage hotel chains or OTAs; they are partners.
- Confident and positive — never imply the owner is doing a bad job.

---

## 2. Logo — the mark stands alone

The mark is **three ascending bars** (distribution · revenue · marketing) rising to a beacon, together reading as a lowercase **i**.

**The single most important rule: nothing goes beside the mark.** No wordmark, ever — placing type next to it creates competing letterforms.

- ✅ Mark alone in header, footer, favicon, app icon, social avatar.
- ✅ Optional small **mono descriptor** near the mark in the header (e.g. `COMMERCIAL HOTEL SERVICES`) — a *label*, visually separated by a hairline or clear space, not a wordmark.
- ❌ Never a lockup with the word "Indi".

**Because the mark doesn't say the name, the copy must.** "Indi" appears unmissably in the hero copy, the `<title>`, the meta description and the footer. Non-negotiable.

**Variants** — [Logo.astro](src/components/Logo.astro) is the implementation; `public/indi-logo-assets/` holds the exported files (SVG is the source of truth).

| Variant | Bars | Tall bar + beacon | Use |
|---|---|---|---|
| `default` | Ink `#0E1116` | Azure `#0E4FB0` | Light backgrounds |
| `reversed` | White | Light azure `#3B7BE0` | Dark / ink sections, footer |
| `mono-ink` | Ink | Ink | Print, stamp, single-colour |
| `mono-white` | White | White | On azure or a photo scrim |

**Usage rules**

- **Clear space:** at least the width of the tallest bar on all sides.
- **Minimum size:** 20px — check legibility at that size on mobile.
- **Never:** recolour outside the palette, reorder or resize the bars, add gradients or shadows, rotate, stretch, outline, or place on a busy photo without a solid backing or scrim.

---

## 3. Colour

Neutrals do ~90% of the work; one blue carries every accent; warmth is a thread, not a theme.

```css
/* neutral spine */
--color-ink:        #0E1116;  /* text, dark sections, the mark */
--color-paper:      #FCFBF9;  /* primary background — warmed, NOT pure white */
--color-white:      #FFFFFF;
--color-mist-grey:  #F4F6F9;  /* alternating sections, cards, quiet fills */
--color-ash:        #ECEEF2;  /* subtle fills */
--color-grey:       #6B7280;  /* secondary text, captions */
--color-slate:      #4A4C50;  /* body text on light, softer than ink */
--color-line:       #E6E8EC;  /* borders, dividers */

/* signature — deeper blue only, no second accent hue */
--color-azure:      #0E4FB0;  /* CTAs, links, active states, key figures */
--color-azure-deep: #0A3C8A;  /* hover / pressed */
--color-sky:        #EAF1FB;  /* soft wash — callouts, badges */
--color-mist-line:  #D6E4F7;  /* borders on sky panels */

/* structural warmth — used broadly: hero, alternating sections, nav, footer */
--color-sand-1:     #FAF6EF;

/* warm thread — PEOPLE ONLY */
--color-clay:       #C0714B;  /* eyebrows/details on human moments */
--color-sand:       #F3EBE3;  /* testimonial / team / About backgrounds */
--color-sand-line:  #E8DDD2;
```

**Balance:** ~60% paper/white/mist · 30% ink · 10% azure · a sliver of clay/sand. Azure is punctuation — one strong colour moment per view, never large fields of it, never coloured body copy.

### The warm-thread rule

This is what stops the site looking like software.

- **Clay and sand appear only where people appear:** testimonials, case studies, team, About, and photography of real properties.
- **Never** clay/sand on buttons, CTAs, data/stats blocks or product-style sections — those stay azure and ink.
- Background is `--color-paper` (`#FCFBF9`), **not pure white**. The warmth is deliberate.

**Accessibility:** ink-on-paper and white-on-ink/azure pass AA. Keep readable copy at Ink or Slate; never lighter than Grey. Clay is an accent, not small text. Focus rings are a 2px azure outline at 3px offset.

---

## 4. Typography

```css
--font-disp: "Fraunces", Georgia, serif;      /* headlines */
--font-body: "Inter", system-ui, sans-serif;  /* body, UI, labels */
--font-mono: "Inter", system-ui, sans-serif;  /* aliased to Inter */
```

Both loaded from Google Fonts in [BaseLayout.astro](src/layouts/BaseLayout.astro#L30-L33). Base body is 17px / 1.62.

| Role | Font | Treatment |
|---|---|---|
| Display / hero | Fraunces 500 | `letter-spacing −0.015em`, `line-height 1.1` (`.display`) |
| Headings | Fraunces 500 | as `.display`, scaled down |
| Testimonial quotes | Fraunces italic 400 | `.serif-italic` — quotes only |
| Subhead / tagline | Inter 400 | `line-height 1.6` (`.subhead`) |
| Body | Inter 400 | 17px / 1.62 |
| Eyebrow / label | Inter 600, 12px | sentence case, no tracking, azure — or clay on human sections (`.eyebrow-clay`) |

---

## 5. Components

- **Radii:** `8px · 12px · 16px · 20px · 100px (pill)`. Buttons use 10px.
- **Shadows:** almost invisible. Cards `0 1px 2px rgba(14,17,22,.05)`; button hover `0 8px 20px -10px rgba(14,79,176,.55)`. **No glows, no gradients.**
- **Buttons** (`.btn`, Inter 600, 14.5px, 13/24px padding, −2px lift on hover):
  - `.btn-azure` — primary, azure fill, white text (the discovery CTA).
  - `.btn-ink` — secondary, ink fill, paper text.
  - `.btn-paper` — for use on dark sections.
  - `.btn-ghost` — transparent, ink text, `--color-line` border → ink on hover.
- **Text links** `.tlink` — ink, gap widens and colour turns azure on hover. `.under-accent` gives a 2px azure underline.
- **Cards** `.card` — white on paper/mist, 1px `--color-line`, 16px radius, light shadow. `.card-human` is the same with a `--color-sand-line` border for people-facing sections.
- **Badges** `.badge` — sky background, deep-azure text, `--color-mist-line` border, pill radius (e.g. "Most popular").
- **Washes:** `.tint-azure` (sky) anywhere; `.tint-sand` for human moments only.
- **Layout:** `.wrap` max 1120px; `.wrap-narrow` max 880px.
- **Motion:** AOS animations and smooth scroll are fully disabled under `prefers-reduced-motion`.

---

## 6. Imagery

The design is precise, so the imagery must be warm and human.

- ✅ Real independent properties in natural light, genuine team portraits, texture, timber, coast, morning light. Fewer, better images with generous white space.
- ❌ No people at laptops, offices, dashboards, UI screenshots or glossy stock lobbies.
- **Rule of thumb:** if it would look at home on a SaaS site, it doesn't belong; if it would look at home in a hospitality magazine, it probably does.
- Where no strong on-brand image exists, **delete the slot and let white space carry the section.**

---

*INDI · Brand summary · Ascend (round 3+ refresh) · indihotels.com.au*
