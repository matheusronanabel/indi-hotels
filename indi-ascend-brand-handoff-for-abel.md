# Indi — Brand Update: "Ascend" (Handoff for Abel)

**For:** Abel — designed to be handed to **Claude Code** as the task spec.
**What this is:** a full **visual rebrand** of the Indi site. The brand is now **Ascend**: a standalone geometric mark, an azure accent, and a modern sans typeface.

> **Important:** this **replaces the previous brand direction entirely** (the warm "Earth & Ocean" palette, the clay sun-over-horizon logo, and the Fraunces / Hanken Grotesk type). Remove all of it.
>
> **All site copy, tone rules and page structure from the previous content brief remain unchanged.** This is the visual layer only.

---

## 1. The single most important rule: the mark stands alone

**The logo is the mark. Nothing goes next to it. Ever.**

The mark is itself a letterform (three ascending bars, the tallest being an "i" with its dot). Placing a wordmark beside it creates competing letterforms and looks messy. So:

- ✅ Use the **mark on its own** in the header, footer, favicon, app icon and social avatar.
- ❌ **Never** place the word "Indi" (or any typeface) directly beside the mark as a lockup.
- ✅ Optional: a small **mono descriptor** (e.g. `COMMERCIAL HOTEL SERVICES`, IBM Plex Mono, uppercase, letter-spaced) may sit near the mark in the header — as a *label*, not a wordmark. Keep it visually separate (e.g. divided by a hairline or clear space).

### Because the logo no longer says the name, the copy must
The word **"Indi" must be unmissable in the landing page hero copy**, plus:
- `<title>` tag and meta description
- The footer
- The hero eyebrow / opening lines

This is non-negotiable — it's how visitors learn what the mark means.

---

## 2. Logo assets (provided)

All files are in `indi-logo-assets/`. **SVG is the source of truth** — use it wherever possible.

| File | Use |
|---|---|
| `indi-mark.svg` | **Primary.** Ink bars + azure tall bar. For light backgrounds. |
| `indi-mark-reversed.svg` | White bars + azure tall bar. For dark backgrounds (footer, dark sections). |
| `indi-mark-mono-ink.svg` | One-colour ink. For mono/print/stamp use. |
| `indi-mark-mono-white.svg` | One-colour white. For placing on azure or a photo scrim. |
| `indi-app-icon.svg` / `-512.png` / `-180.png` | Mark inside a rounded ink tile. App icon / social avatar / PWA. |
| `favicon.ico`, `favicon-32.png`, `favicon-16.png` | Favicon set. |
| `indi-mark-512/256/64.png` | Transparent PNGs if raster is needed. |

**Clear space:** at least the width of the tallest bar on all sides.
**Minimum size:** 20px.
**Never:** recolour outside the palette, reorder/resize the bars, add gradients or shadows, rotate, stretch, outline, or place on a busy photo without a solid backing or scrim.

---

## 3. Colour

Replace the entire previous palette with these tokens.

```css
/* Spine */
--ink:        #0E1116;  /* text, dark sections, the mark */
--paper:      #FCFBF9;  /* primary background — warmed, NOT pure white */
--mist:       #F4F6F9;  /* alt sections, cards, quiet fills */
--grey:       #6B7280;  /* secondary text, captions */
--line:       #E6E8EC;  /* borders, dividers */
--white:      #FFFFFF;

/* Primary accent */
--azure:      #1466E0;  /* buttons, links, key figures, the mark */
--azure-deep: #0E52BC;  /* hover / pressed */
--sky:        #EEF4FE;  /* soft azure wash — callouts, badges */

/* Warm thread — PEOPLE ONLY (see rule below) */
--clay:       #C0714B;  /* eyebrows/details on human moments */
--sand:       #F3EBE3;  /* testimonial / team / About backgrounds */
--sand-line:  #E8DDD2;
```

**Balance:** roughly 60% paper/white/mist · 30% ink · 10% azure · a sliver of clay/sand.

### The warm-thread rule (important — this is what stops us looking like software)
**Clay and sand appear ONLY where people appear:** testimonials, case studies, the team section, the About page, and photography of real properties.

**Never** use clay/sand on: buttons, CTAs, data/stats blocks, or product-style sections. Those stay azure and ink.

**Background must be `--paper` (#FCFBF9), not pure white.** The subtle warmth is deliberate; it keeps the site from feeling clinical.

**Accessibility:** ink-on-paper and white-on-ink/azure all pass AA. Azure is fine for buttons, links and large figures — do not use azure for long body copy. Clay is an accent, not small text.

---

## 4. Typography

Replace Fraunces / Hanken Grotesk entirely. Keep the site on a **modern sans**.

```css
--font-display: "Space Grotesk", system-ui, sans-serif;  /* 400–700 — headlines */
--font-body:    "Instrument Sans", system-ui, sans-serif; /* 400–700 — body, UI */
--font-mono:    "IBM Plex Mono", ui-monospace, monospace; /* 400–500 — labels, data */
```

All three are Google Fonts.

**Scale & usage**

| Role | Font | Size | Notes |
|---|---|---|---|
| Display / hero | Space Grotesk 600 | 44–72px | letter-spacing −0.03em, line-height ~1.05 |
| H1 | Space Grotesk 600 | 32–38px | letter-spacing −0.025em |
| H2 | Space Grotesk 600 | 24–28px | |
| H3 | Instrument Sans 600 | 18–20px | |
| Body | Instrument Sans 400 | 16–17px | line-height ~1.6 |
| Eyebrow / label | IBM Plex Mono 500 | 11–12px | uppercase, letter-spacing 0.16em, azure (or clay on human sections) |
| Data figure | Space Grotesk 600 | 34–46px | azure |

Sentence-case headlines. Australian English.

---

## 5. Components

- **Radii:** `--r-sm:8px · --r-md:12px · --r-lg:16px · --r-xl:20px · pill:100px`
- **Shadows:** keep them almost invisible. `--shadow-card: 0 1px 2px rgba(14,17,22,.05)` · `--shadow-btn: 0 8px 20px -10px rgba(20,102,224,.55)`. **No glows, no gradients.**
- **Buttons:**
  - Primary (the discovery CTA): **azure** fill, white text, radius 10px.
  - Secondary: **ink** fill, white text.
  - Tertiary: ghost — transparent, ink text, 1.5px `--line` border.
  - On dark sections: **white** fill, ink text.
- **Cards:** white on paper/mist, 1px `--line` border, `--r-lg`, the light card shadow.
- **Badges** (e.g. "Most popular" on the Monthly tier): `--sky` background, `--azure-deep` text, 1px `#D7E5FB` border, pill radius, IBM Plex Mono uppercase.

---

## 6. Imagery

This is the other half of "tech enabled, not tech." The design is precise, so the imagery must be warm and human.

- ✅ Real independent properties in natural light. Genuine team portraits. Texture, timber, coast, morning light. Fewer, better images with generous white space.
- ❌ No people at laptops, no offices, no dashboards or UI screenshots, no glossy stock lobbies.
- **Rule of thumb:** if an image would look at home on a SaaS website, it doesn't belong on ours. If it would look at home in a hospitality magazine, it probably does.
- Where a placeholder has no strong on-brand image available, **delete the slot and let white space carry the section.** Flag any you're unsure about.

---

## 7. Voice guardrails (unchanged, but they govern the design too)

- **Never** describe Indi as a platform, an OS, a stack, or software. We are a **technology-enabled service business**, run by real people.
- Never guarantee a RevPAR number.
- Never disparage hotel chains or OTAs — they are partners, not villains.
- Positive and confident; never imply the owner is doing a bad job.

---

## 8. Checklist

- [ ] Remove the old brand entirely (clay sun logo, Earth & Ocean palette, Fraunces/Hanken).
- [ ] Install the **standalone mark** in the header, footer, favicon and app icon. **No wordmark beside it, anywhere.**
- [ ] Ensure **"Indi" appears unmissably in the hero copy**, the `<title>`, the meta description and the footer.
- [ ] Apply the new colour tokens; background is `--paper`, not white.
- [ ] Apply the **warm-thread rule**: clay/sand only on testimonials, team, About, case studies.
- [ ] Swap fonts to Space Grotesk / Instrument Sans / IBM Plex Mono (Google Fonts).
- [ ] Update buttons, cards, badges and radii per §5.
- [ ] Review imagery per §6; delete weak placeholders rather than fill them.
- [ ] Test at mobile, and check the mark is legible at 20px.

---

## 9. Open items (Sonny to supply)

- Final photography (§6).
- Confirmation of the mono descriptor wording, if used beside the mark in the header.
