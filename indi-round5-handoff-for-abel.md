# Indi — Round 5 Update (Handoff for Abel)

**For:** Abel — hand to **Claude Code** as the task spec.
**Site:** indihotels.com.au

> Assumes Round 4 is applied (or being applied). This round is design warming plus Our Work / case-study refinements. Two small items here **override** things in Round 4, and are flagged as such.

---

## 1. Design — warm the site with sand (two tints, two jobs)

Bring subtle warmth across the site using a **new, paler structural sand**, while protecting the existing sand for human moments so it still means "people".

```css
--paper:  #FCFBF9;   /* base background — unchanged */
--sand-1: #FAF6EF;   /* NEW — structural warmth: hero, alternating sections, nav, footer */
--sand-2: #F3EBE3;   /* existing — human moments ONLY: testimonials, team, About, case-study quotes */
--sand-line: #E8DDD2;
```

**Apply, in priority order:**
1. **Alternating section backgrounds:** replace the cool grey/mist with `--sand-1`. (Biggest effect, smallest effort.)
2. **Hero, above the fold:** a faint `--sand-1` wash instead of cool white/grey.
3. **Footer:** `--sand-1`.
4. **Hamburger (optional):** `--sand-2` fill with **ink lines** (not sand lines — must stay legible and tappable).

**Do not:**
- Put sand on the **primary button** (stays azure) or on **functional icons** (stay ink/azure).
- Use `--sand-2` for structural areas — it must stay reserved for human moments, or it stops signalling anything.
- Tint text or borders sand at small sizes (contrast drops).

**Net effect:** warmer from the first screen, while testimonial/case-study quote blocks still stand apart.

---

## 2. Our Work page

**2.1 Remove the testimonials section at the top.**
Full owner quotes now live inside each case study, so a separate testimonial strip repeats the same words. Delete it.

**New page flow:** hero → **A closer look** (the three case studies, each with its own quote) → **Who we work with** (property showcase).

**2.2 Remove the data-rule sentence from the page.**
Delete: *"We publish RevPAR growth only, never room counts, occupancy, ADR or total revenue, so a property's numbers stay its own."*
That reasoning is for internal reference only and should never appear in body copy (no disclaimers in copy). The practice stays; the sentence goes.

---

## 3. Case studies — revisions

Applies to all three (Albany, Hobart, Nelson).

**3.1 Stat label — restore the financial year.**
> **Overrides Round 4.** The label is now: **"RevPAR growth · FY 2025/26"** (not "YoY").
Keep: RevPAR **percentage only**, no dollar values, no other metrics.

**3.2 Remove the description / lede from all three.**
Albany already has none. **Remove the lede paragraph from Hobart and Nelson** too, so all three are uniform.

**Uniform case-study structure (all three):**
`Eyebrow "Case study" → Title → Property · Location → Photos → Stat (+ caption) → Quote → CTA`
No lede. No "partnered since" line (already removed in Round 4).

**3.3 Titles** (these now carry the narrative alone):

| Property | Title |
|---|---|
| Albany Motel & Apartments | A new owner's first full year, with Indi behind the commercials. |
| Hobart City Apartments | **A stronger year, priced with intent.** *(reworded — see below)* |
| Hotel Nelson | An experienced owner, still finding upside. |

**3.4 Hobart — reworded, and do not publish the rooms-sold angle.**
- **Overrides Round 4.** New title: **"A stronger year, priced with intent."**
- **Do not** reference "more revenue from fewer rooms sold" anywhere in this case study. That phrasing invites questions about occupancy. The title alone carries the story; there is no lede.

**3.5 Final case-study content**

**Albany Motel & Apartments**
- Title: A new owner's first full year, with Indi behind the commercials.
- Meta: Albany Motel & Apartments · Albany, Western Australia
- Stat: **+16.1%** · RevPAR growth · FY 2025/26
- Caption: Full financial year. Results reflect the property's first full year working with Indi. Every property and market is different, and individual results vary.
- Quote (Michael Stephens — **signed off, cleared to publish**):
  > "As a new entrant to the accommodation sector in late 2024, I couldn't have asked for a better partner than Indi. Their wisdom doesn't stop at the revenue side, the team really knows the game, and the knowledge they've shared has shaped how we run the whole business. They're readily available whenever I need them, and I've genuinely loved working with and learning from them. For any owner, new or established, I can't recommend Indi highly enough."
  > **Michael Stephens** · Owner · Albany Motel & Apartments

**Hobart City Apartments**
- Title: A stronger year, priced with intent.
- Meta: Hobart City Apartments · Hobart, Tasmania
- Stat: **+11.3%** · RevPAR growth · FY 2025/26
- Caption: Full financial year. Every property and market is different, and individual results vary.
- Quote: none available — **omit the quote block** (do not ship a placeholder).

**Hotel Nelson**
- Title: An experienced owner, still finding upside.
- Meta: Hotel Nelson · Nelson Bay, New South Wales
- Stat: **+8.2%** · RevPAR growth · FY 2025/26
- Caption: Full financial year. Every property and market is different, and individual results vary.
- Quote (Andrew Macdonald — **verbatim, do not edit**):
  > "Having run an independent hotel for many years, it is very easy to lose touch with the latest strategies and technology out there. I love being independent, but with the support of Indi Hotels in the background. If you are a hotel owner, join Indi Hotels and forget the chain brands. You will pay less in OTA commissions, your hotel will receive more direct bookings, you will see growth in overall revenue, and all without the compliance headaches and costs associated with joining a hotel chain."
  > **Andrew Macdonald** · Owner · Hotel Nelson & Little Nel Cafe

---

## 4. Checklist

- [ ] Add `--sand-1` (#FAF6EF); apply to alternating sections, hero, footer (§1)
- [ ] Optional: hamburger `--sand-2` fill, ink lines
- [ ] Keep primary button azure and functional icons ink/azure
- [ ] Our Work: remove the top testimonials section
- [ ] Our Work: remove the "we publish RevPAR only…" sentence
- [ ] Case studies: stat label → "RevPAR growth · FY 2025/26"
- [ ] Case studies: remove ledes from Hobart and Nelson (match Albany)
- [ ] Hobart: retitle "A stronger year, priced with intent."; no rooms-sold reference
- [ ] Confirm all three case studies share the uniform structure (no lede, no "partnered since")

---

## 5. Still open (Sonny)

- Photography for the three case studies (2 each) and site-wide
- Hotel Groups page (new workstream)
- Live direct-booking counter (replaces the removed group snapshot)
