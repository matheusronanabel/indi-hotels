# Indi — Case Studies (Handoff for Abel)

**For:** Abel — hand to **Claude Code** as the task spec.
**Site:** indihotels.com.au
**Scope:** build a reusable case-study component and populate it with three properties, on the **Results** page.

> **Prerequisites:** apply `indi-round3-handoff-for-abel.md` first (Fraunces + Inter, no mono, deeper blue `#0E4FB0`). These case studies use that type and colour system throughout.
>
> Reference builds are provided as working HTML: `indi-albany-case-study.html`, `indi-hobart-case-study.html`, `indi-hotel-nelson-case-study.html`. Build **one component** and pass content in, don't hand-code three copies.

---

## 1. 🔴 The data rule (read this first)

**Only ever publish RevPAR.** Never the room count, occupancy, ADR, rooms sold, or total revenue.

**Why this matters:** `RevPAR × rooms × days = revenue`. Publishing RevPAR *and* a room count lets anyone reverse-engineer the owner's turnover in one calculation. Removing the room count is what makes showing RevPAR safe.

RevPAR is also the right single metric on its own merits: it already absorbs both occupancy and rate, so nothing is lost by omitting them.

**Do not add extra metrics to these blocks, ever, even if they appear more impressive.**

---

## 2. The component

One reusable block, used three times. Structure, top to bottom:

| # | Element | Notes |
|---|---|---|
| 1 | **Eyebrow** | "Case study" — Inter 600, 12px, sentence case, `--blue` |
| 2 | **Headline** | Fraunces 500, ~34px desktop / 27px mobile |
| 3 | **Lede** | Inter, `--grey`, ~16px, max 58ch (optional — Albany has none) |
| 4 | **Meta line** | Property name (bold), location, partnership start. **No room count.** |
| 5 | **Photos** | Two placeholders, grid `1.6fr 1fr`, stacks on mobile |
| 6 | **Stat block** | `--mist` background, hairline top/bottom. Single hero stat. |
| 7 | **Quote** | Fraunces *italic* on `--sand`, attribution in Inter |
| 8 | **CTA row** | Primary "Start your free discovery" + ghost "See more results" |

### Stat block spec
- Label above: "Financial year 2025/26 compared with 2024/25" — Inter 600, 12px, `--blue`
- **Hero figure:** Fraunces 600, **88px desktop / 66px mobile**, `--blue`. The `%` sign at ~52px.
- Beside it, behind a hairline divider (stacks below on mobile):
  - "RevPAR growth" — Fraunces 500, 26px
  - The movement: `$before → $after`, arrow in `--blue`, the "after" figure in ink/600
- **Caption** below, 11.5px `--grey`.

### Photo placeholders
Dashed border, `--mist` fill, min-height 220px, icon + label. Swap for real images when supplied.
- Slot 1: landscape (exterior or a room, natural light)
- Slot 2: portrait or square (detail shot)

---

## 3. The three case studies

Order them on the Results page: **Albany → Hobart → Nelson.** This runs newcomer → expertise → veteran, and leads with the biggest number.

---

### 3.1 Albany Motel & Apartments

- **Headline:** A new owner's first full year, with Indi behind the commercials.
- **Lede:** *(none — the meta line and quote carry it)*
- **Meta:** **Albany Motel & Apartments** · Albany, Western Australia · Partnered with Indi since late 2024
- **Stat:** **+16.1%** · RevPAR growth · $146.20 → $169.74
- **Caption:** Full financial year. Results reflect the property's first full year working with Indi. Every property and market is different, and individual results vary.
- **Quote** ⚠️ *edited — see §5*:

> "As a new entrant to the accommodation sector in late 2024, I couldn't have asked for a better partner than Indi. Their wisdom doesn't stop at the revenue side, the team really knows the game, and the knowledge they've shared has shaped how we run the whole business. They're readily available whenever I need them, and I've genuinely loved working with and learning from them. For any owner, new or established, I can't recommend Indi highly enough."
> **Michael Stephens** · Owner · Albany Motel & Apartments

---

### 3.2 Hobart City Apartments

- **Headline:** More revenue, from fewer rooms sold.
- **Lede:** Chasing occupancy is the instinct. Pricing with intent is the discipline. At Hobart City Apartments, Indi priced each channel and each date deliberately rather than filling rooms at any price, and the property earned significantly more from a slightly smaller book of business.
- **Meta:** **Hobart City Apartments** · Hobart, Tasmania · Partnered with Indi since `[YEAR TO CONFIRM]`
- **Stat:** **+11.3%** · RevPAR growth · $157.73 → $175.59
- **Caption:** Full financial year. Every property and market is different, and individual results vary.
- **Quote:** `[NONE AVAILABLE]` — **omit the quote block entirely** rather than ship a placeholder or filler quote.

> **Alternative neutral headline** if the yield story is considered too revealing:
> Headline: "A strong year, priced with intent."
> Lede: "Indi positioned every channel and every date deliberately, so the property earned more from each room available."

---

### 3.3 Hotel Nelson

- **Headline:** An experienced owner, still finding upside.
- **Lede:** Andrew has run an independent hotel for many years and knows his market intimately. With Indi behind the commercials, both sides of the equation moved up together, more rooms sold *and* a stronger rate, which is the clearest sign that demand is being captured rather than discounted for.
- **Meta:** **Hotel Nelson** · Nelson Bay, New South Wales · Partnered with Indi since `[YEAR TO CONFIRM]`
- **Stat:** **+8.2%** · RevPAR growth · $180.49 → $195.21
- **Caption:** Full financial year. Every property and market is different, and individual results vary.
- **Photo slot 2 note:** could be Little Nel Cafe.
- **Quote** ✅ *verbatim — do not edit*:

> "Having run an independent hotel for many years, it is very easy to lose touch with the latest strategies and technology out there. I love being independent, but with the support of Indi Hotels in the background. If you are a hotel owner, join Indi Hotels and forget the chain brands. You will pay less in OTA commissions, your hotel will receive more direct bookings, you will see growth in overall revenue, and all without the compliance headaches and costs associated with joining a hotel chain."
> **Andrew Macdonald** · Owner · Hotel Nelson & Little Nel Cafe

---

## 4. Quote handling

- **Owner quotes are exempt** from the site's chain/OTA tone rules. Andrew's quote mentions chains and OTA commissions. **This is intentional. Do not sanitise, soften, or "tidy" it.**
- Quotes render in **Fraunces italic** on `--sand`, attribution in Inter.
- The word "Indi Hotels" appears inside verbatim quotes. That's correct — it's the owner speaking. Everywhere else in Indi's own copy, the brand is **Indi**.

---

## 5. ⚠️ Do not publish until Sonny confirms

- [ ] **Michael Stephens must approve the edited Albany quote.** It has been reworded (Sonny's name removed, dashes stripped). A reworded testimonial cannot be published under someone's name without their sign-off.
- [ ] **Consent from each owner** to name the property alongside a RevPAR figure.
- [ ] **Partnership start years** for Hobart and Hotel Nelson.
- [ ] **Photography** for all three (2 images each).
- [ ] **Hobart:** decide between the yield-story headline and the neutral alternative.

Build the component and leave clean placeholders for the above. Don't invent any of it.

---

## 6. Checklist

- [ ] Build one reusable case-study component (§2)
- [ ] Populate with Albany, Hobart, Nelson (§3), in that order on Results
- [ ] Single RevPAR stat only — **no room count, occupancy, ADR, or revenue** (§1)
- [ ] Quotes in Fraunces italic on `--sand`; Andrew's verbatim and unedited
- [ ] Hobart: no quote block until one is supplied
- [ ] Photo placeholders in place, ready to swap
- [ ] Mobile: stat stacks, photos stack, type scales down
