# Indi — Round 9 Update (Handoff for Abel)

**For:** Abel — hand to **Claude Code** as the task spec.
**Site:** indihotels.com.au — **Hotel Groups page**
**Scope:** combine Michael Jones' testimonial and the New Crossing Place case study into one featured block, and fix a dead link.

> Reference build: `indi-ncp-featured-case-study.html`. Current brand (Fraunces, Inter, deeper blue `#0E4FB0`, sand for human moments). RevPAR percentage only.

---

## 1. Combine the testimonial and case study into one featured block

Right now the Hotel Groups page has Michael's quote and the New Crossing Place case study as **two separate elements**. Combine them into a **single case-study block** with the quote inside it, matching the structure used for Albany, Hobart and Nelson.

**Structure (top to bottom):**
1. **Featured band** — a blue strip across the top reading "Featured · Hotel groups" (this is what makes it stand out near the top of the page).
2. **Eyebrow:** Case study
3. **Headline:** A strong first full year, in partnership from day one.
4. **Lede:** Indi partnered with New Crossing Place right from the start of the ownership, shaping the commercial strategy from the outset. Over the year that followed, that partnership delivered steady, meaningful RevPAR growth, a strong first full year for the property.
5. **Meta:** New Crossing Place Motel & Apartments · Seymour, Victoria
6. **Photos:** the two real images already uploaded (exterior at dusk as the hero, bedroom as the detail).
7. **Stat + quote in a shared two-column footer** (stacks on mobile):
   - **Left (stat, on `--mist`):** **+12.8%** · RevPAR growth · FY 2025/26. Caption: "Full financial year. Every property and market is different, and individual results vary."
   - **Right (quote, on `--sand-2`):** Michael's testimonial (below), Fraunces italic.
8. **CTA row:** Start your free discovery + See how we work.

**Featured treatment:** blue top band + a soft drop shadow to lift it off the page. Place it as the featured proof directly under the hero.

---

## 2. The quote (inside the block)

> "Indi has been a genuine partner from day one. Their support goes well beyond the usual services: the team's knowledge and hands-on approach have made a real difference to how we run our properties. They're always available when we need them, and the results speak for themselves. I'd recommend Indi to any owner or group looking for serious commercial support."
> **Michael Jones** · Chief Operating Officer, Deltine Capital Motel Investment Fund

- **Keep the full role line.** Michael is **COO of Deltine** — the attribution must make clear he is part of the Deltine leadership team, not a single-property manager.
- **Tone stays conservative:** the emphasis is on the partnership and Michael's goodwill, **not** the fund's investment performance. Do not add investor/returns framing.
- RevPAR **percentage only** — no room count, occupancy, ADR or revenue.

---

## 3. Fix the dead link

On the current page, the New Crossing Place secondary button reads "See who else we work with" and points to `#properties`, which does not exist on this page. **Point it to `/our-work`, or remove the button.** (The reference build uses "See how we work" instead, which also works.)

---

## 4. Checklist

- [ ] Merge Michael's quote + NCP case study into one featured block
- [ ] Featured band ("Featured · Hotel groups") + soft shadow, directly under the hero
- [ ] Stat + quote in a shared two-column footer (stacks on mobile)
- [ ] Keep Michael's full COO / Deltine role line
- [ ] RevPAR % only; conservative tone (partnership, not fund performance)
- [ ] Fix the dead `#properties` link → `/our-work` or remove

---

## 5. Still open (Sonny)

- Group pricing model
- Live direct-booking counter
- Team photos for Yudi & Yuka
