# Indi — Round 3 Update (Handoff for Abel)

**For:** Abel — hand to **Claude Code** as the task spec.
**Site:** indihotels.com.au (currently olive-grouse-166420.hostingersite.com)
**Scope:** typography change, hero redesign, deeper blue, plus four small fixes.

> **Supersedes** the typography and colour sections of `indi-ascend-brand-handoff-for-abel.md`. Everything else in that doc (standalone mark rule, warm-thread rule, imagery, voice) still stands.
>
> **Updated logo assets are attached** (`indi-logo-assets.zip`) — they use the new deeper blue. Replace the existing files.

---

## 1. Typography — remove the mono, switch the display face

The site currently reads as a **software product**, not a service business. Three things cause it: IBM Plex Mono (a coding font), Space Grotesk (a startup default), and an electric SaaS blue. We're fixing all three.

### 1.1 🔴 Remove IBM Plex Mono entirely

**This is the single most important change.** Every mono eyebrow, label, and caption — all-caps, letter-spaced — is the strongest "dev shop" signal on the page.

- **Delete IBM Plex Mono** from the font loading and from every rule that uses it.
- Replace all mono eyebrows/labels/captions with **Inter, 600 weight, sentence case, ~12px, normal letter-spacing**, in the accent blue.
  - Before: `COMMERCIAL SERVICES FOR INDEPENDENT HOTELS` (mono, uppercase, wide tracking)
  - After: **Commercial services for independent hotels** (Inter 600, sentence case, blue)
- Same for stat labels, card meta labels, and any numbered step captions.

### 1.2 New type stack

```css
--font-display: "Fraunces", Georgia, serif;        /* 300–600 — headlines, testimonial italics */
--font-body:    "Inter", system-ui, sans-serif;    /* 400–700 — body, UI, buttons, labels */
/* IBM Plex Mono: REMOVED. Space Grotesk: REMOVED. Instrument Sans: REMOVED. */
```

Both from Google Fonts:
`https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@400;500;600;700&display=swap`

### 1.3 Scale

| Role | Font | Size | Notes |
|---|---|---|---|
| Display / hero H1 | Fraunces 500 | 34px mobile / 52–64px desktop | letter-spacing −0.015em, line-height ~1.1 |
| H1 / H2 | Fraunces 500 | 28–36px | |
| H3 | Inter 600 | 18–20px | |
| Body | Inter 400 | 16–17px | line-height ~1.6 |
| Eyebrow / label | **Inter 600** | 12px | sentence case, blue, normal tracking |
| Buttons | Inter 600 | 15px | |
| Testimonial quote | **Fraunces italic 400** | 17–21px | |
| Data figure | Fraunces 600 | 34–46px | blue |

Sentence-case headlines. Australian English.

---

## 2. Colour — deeper blue

Move off the electric SaaS blue to a deeper, more considered one.

```css
--blue:        #0E4FB0;  /* was #1466E0 — primary: buttons, links, key figures, the mark */
--blue-deep:   #0A3C8A;  /* hover / pressed */
--blue-soft:   #EAF1FB;  /* soft wash — callouts, badges (was --sky #EEF4FE) */
```

Everything else in the palette is unchanged:
```css
--ink:#0E1116; --paper:#FCFBF9; --mist:#F7F8FA; --grey:#6B7280; --line:#E6E8EC; --white:#FFFFFF;
/* warm thread — PEOPLE ONLY */
--clay:#C0714B; --sand:#F3EBE3; --sand-line:#E8DDD2;
```

- **Update the logo** to the new assets (attached). The mark's blue bar is now `#0E4FB0`; the reversed version uses a lighter `#3B7BE0` so it reads on dark.
- Contrast against white improves from 5.24 to **7.60**, so it's more accessible as well as less SaaS.
- The **warm-thread rule still applies:** clay/sand only on testimonials, team, About, case studies. Never on buttons, data, or product-style sections.

---

## 3. Hero redesign — "Indi" must be unmissable

Two problems: roughly a third of the opening mobile screen is empty, and "Indi" only appears as the fifth word of a grey paragraph while the headline says "We'll" without saying who "we" is.

### 3.1 Kill the dead space
Remove the large top padding / min-height on the hero. **Content should begin ~24–32px below the nav on mobile.** The first screenful must be full, not empty.

### 3.2 New hero copy

> **Eyebrow (Inter 600, sentence case, blue):** Commercial services for independent hotels
>
> **H1 (Fraunces):** **Indi** is the commercial team behind high-performing independent hotels.
> *(Set the word "Indi" in the blue `--blue` — the rest in ink.)*
>
> **Subhead (Inter, grey):** You stay focused on your guests. We run your distribution, revenue management and digital marketing, growing your revenue and your direct bookings.
>
> **Primary button:** Start your free discovery
> **Secondary link:** See how we work →

Keep the subhead to **two lines on mobile** if possible. Three lines of grey text under a big headline is heavy on a phone.

**Optional trust line** under the CTAs (small, grey, Inter): *31 independent properties · Australia wide* `[Sonny to confirm the number, or omit]`

---

## 4. Residual copy fixes

Three bits of the old tone survived the last sweep. All violate the "never imply the owner is failing" rule.

1. **Revenue Management card** (homepage + service page)
   - Remove: *"...capturing revenue your fixed rates leave on the table."*
   - Replace: **"Best-practice pricing, rate plans and segmentation that move with demand, so you capture more of it."**

2. **Electronic Distribution card**
   - Remove: *"...without the chaos."*
   - Replace: **"Your channels and OTAs set up and optimised, connected cleanly to your systems, so you're visible everywhere that matters."**

3. Sweep once more for any remaining "leaving money on the table", "chaos", or similar deficit language.

---

## 5. Social share image

`og-image.svg` is an **SVG**. Facebook, LinkedIn, X and iMessage do **not** reliably render SVG share images — links currently look broken when shared.

- Export a **PNG or JPG** at **1200 × 630px**.
- Update `og:image` and `twitter:image` to point to it.
- Design: ink or paper background, the mark, and the words **"Indi — Commercial services for independent hotels"** in Fraunces. Keep it simple and legible as a thumbnail.

---

## 6. Add a second testimonial to the homepage

The homepage carries only David Pratt. Add **Lawrence Heasman** — it's the strongest quote we have because it names a concrete outcome in an owner's voice. Publish **verbatim** (owner quotes are exempt from the chain/OTA rules).

> "Indi Hotels provided exceptional service and support from day one. Opening a new hotel is always a challenging time, so I was delighted that Indi Hotels were able to come on board pre-opening. They did everything that was asked and promised, plus a lot more on top. The website Indi Hotels provided is brilliant. It currently delivers two bookings for every OTA booking, keeping commissions at a minimum in these challenging times. I can't recommend Indi Hotels highly enough, so if you need a break from a hotel chain or help with your own independent business, then you'd better call Indi Hotels!"
> **Lawrence Heasman, Group GM, City Apartment Hotel Group**

Set testimonial quotes in **Fraunces italic** on a **sand** background (`--sand`), attribution in Inter.

---

## 7. Checklist

- [ ] Remove **IBM Plex Mono** entirely; eyebrows/labels → Inter 600, sentence case, blue
- [ ] Remove Space Grotesk and Instrument Sans; install **Fraunces + Inter**
- [ ] Apply the new type scale (§1.3)
- [ ] Swap blue to **#0E4FB0** (+ `--blue-deep`, `--blue-soft`)
- [ ] Replace logo assets with the attached set (new blue)
- [ ] **Hero:** remove dead space; content starts ~24–32px under the nav
- [ ] **Hero H1:** "**Indi** is the commercial team behind high-performing independent hotels." ("Indi" in blue)
- [ ] Update hero subhead; keep it short on mobile
- [ ] Fix the Revenue Management and Distribution card copy (§4)
- [ ] Replace `og-image.svg` with a 1200×630 **PNG/JPG**
- [ ] Add the Heasman testimonial (verbatim, Fraunces italic on sand)
- [ ] Test on mobile: first screenful should be full, and the mark legible at 20px

---

## 8. Still open (not in this round)

- Hotel Groups page (new workstream)
- Monthly group snapshot on Results
- Real photography
- Case studies
