# Indi — Round 4 Update (Handoff for Abel)

**For:** Abel — hand to **Claude Code** as the task spec.
**Site:** indihotels.com.au (currently olive-grouse-166420.hostingersite.com)

> **Round 3 landed well.** Fraunces, Inter, no mono, the deeper blue and the new hero are all in and the brand reads correctly. This round is refinement plus a few round-3 items that didn't make it.
>
> Apply **Section 1 (global rules) first** — they cascade across every page — then work through the rest.

---

## 1. Global language rules (apply site-wide first)

### 1.1 Retire the word "client"
We don't have clients. We have relationships, some of them twenty years old. This is a positioning point, not a style preference.

- **"owners"** when you mean people
- **"properties"** when you mean assets
- **"the owners and properties we work with"** when you need both
- **Never "client" or "clients"** anywhere in Indi's own copy.

### 1.2 Retire the words "proof" and "results" as claims
Both point at outcomes, which makes them read as a guarantee. Point at **people** instead.

- Testimonial sections → **"In their words"**
- Property showcase → **"Who we work with"**
- Case study sections → **"A closer look"**
- Never use "proof" as a section heading or in body copy.

### 1.3 No disclaimers in body copy
Announcing what we *won't* promise is defensive and reads as weakness. Confident businesses simply don't over-claim.

- **Delete** any sentence that says a number can't be promised, that we won't pretend otherwise, etc.
- **Do not replace with a softer disclaimer.** Just remove it and close the gap.
- Caveats belong **only** in small captions attached to specific data (see §5.4). Nowhere else.

### 1.4 Testimonials on inner pages: snippets only
A full testimonial stops a page dead.

- **Capability pages** (Distribution, Revenue Management, Digital Marketing, Projects): a **one-line pull-quote only**, plus a link out.
- **Full testimonials appear only** on the Our Work page and in case studies.
- Pull-quotes: Fraunces italic on `--sand`, attribution in Inter, then **"Read what owners say →"** linking to the Our Work page.

### 1.5 Owner quotes remain verbatim
Owner quotes are exempt from the chain/OTA tone rules and may say "Indi Hotels". **Do not sanitise, soften or tidy them.** Snippets must be exact excerpts, not paraphrases.

---

## 2. Outstanding from Round 3 (not yet done)

- [ ] **Revenue Management card** (homepage + service page): remove *"...capturing revenue your fixed rates leave on the table."*
      → **"Best-practice pricing, rate plans and segmentation that move with demand, so you capture more of it."**
- [ ] **Electronic Distribution card**: remove *"...without the chaos."*
      → **"Your channels and OTAs set up and optimised, connected cleanly to your systems, so you're visible everywhere that matters."**
- [ ] **`og-image.svg` → PNG or JPG, 1200 × 630.** SVG does not render on Facebook, LinkedIn, X or iMessage. Links currently look broken when shared. Update `og:image` and `twitter:image`.
- [ ] **Site title and OG tags:** drop "and tech".
      Current: *"Indi · The commercial team and tech behind independent hotels."*
      → **"Indi · The commercial team behind independent hotels."**

---

## 3. Hero and header fixes

- [ ] **Hyphen break:** "high-performing" is splitting across lines ("high-" / "performing") and looks broken at display size. Use a non-breaking hyphen (U+2011) or `hyphens: none` plus a controlled line break so it stays intact.
- [ ] **Logo blue ≠ button blue.** The mark's tall bar renders noticeably lighter than the button. Confirm the **new logo asset** (`#0E4FB0`) is actually installed. The mark and the primary button must be the same blue.
- [ ] **Hamburger button:** the solid blue square is the loudest element in the header and competes with the mark. Change to a ghost/outline button, or the icon in ink. The logo should lead.
- [ ] **Dead space:** still present, now between the hero CTAs and "The opportunity". Tighten it.

---

## 4. Homepage

### 4.1 "What we do" — add a fourth Projects card

**Revised section intro:**
> Indi brings your distribution, revenue management and marketing under one roof, coordinated, not stitched together. And when you need just one thing done, we take on standalone projects too.

**New fourth card:**
> **Projects**
> A new website, GDS activation, a PMS setup or dynamic pricing. One-off, fixed scope, delivered by the same expert team.
> *Explore →* → `/services/projects`

**Build notes:**
- **Style the Projects card as visually secondary** (lighter fill or a ghost border). The first three are ongoing services; Projects is a different way to buy, not a fourth service line. A 2×2 grid of four identical cards would misrepresent it.
- The section intro now mentions projects, so **remove the "Need just one thing done? See Projects" link** under *How it works*. Keep one, not both.

### 4.2 Testimonials section

**Remove David Pratt entirely** (homepage **and** the Our Work page). He has sold Southgate Motel, so the attribution is no longer accurate.

Replace with a **3-up of short pull-quotes** — exact excerpts from the verbatim originals:

> "I love being independent, but with the support of Indi Hotels in the background."
> **Andrew Macdonald** · Owner · Hotel Nelson

> "The website Indi Hotels provided is brilliant. It currently delivers two bookings for every OTA booking."
> **Lawrence Heasman** · Group GM · City Apartment Hotel Group

> "I couldn't have asked for a better partner than Indi."
> **Michael Stephens** · Owner · Albany Motel & Apartments

- Heading stays: **In their words** / **Owners, talking about Indi.**
- Link out: **Read what owners say →** → Our Work page.
- **Prefer a 3-up grid on desktop** over a slider. A slider hides two thirds of the content behind an interaction most visitors never make. Slider on mobile is fine.
- Fraunces italic on `--sand`, attribution in Inter.

---

## 5. Our Work page (formerly "Results")

### 5.1 Rename
- Nav item and page name: **"Our Work"** (replaces "Results").
- Keep a **301 redirect** from `/results` to the new URL.

### 5.2 Page hero (remove the old "proof" framing)
> **Heading:** The owners and properties we work with.
> **Sub-line:** Independent owners across Australia trust Indi with their commercials. Here's who they are, and what they say.

### 5.3 Sections
1. **In their words** — the full testimonials (Andrew, Lawrence, Michael)
2. **Who we work with** — the property showcase
3. **A closer look** — the three case studies

### 5.4 Remove the monthly group snapshot
Delete the "This month across the properties we work with" section entirely. A live counter will be integrated later.

---

## 6. Case studies (revisions to the existing spec)

Keep: the headline, the lede, the property name and location, the photos, the quote, the CTA.

**Changes:**

- [ ] **Delete the "Partnered with Indi since…" line** from the meta on all three. Meta is now just: **Property name · Location**.
- [ ] **Stat label:** "Financial year 2025/26 compared with 2024/25" → **"RevPAR growth, YoY"**.
- [ ] **Remove the dollar movement entirely** ($146.20 → $169.74, etc). **The percentage only.**
- [ ] **Recompose the stat block.** With the dollar figures gone it's just a large number and a short label, so the current two-column layout with a hairline divider will look sparse. Use a single left-aligned (or centred) figure with "RevPAR growth, YoY" beneath it. Simpler and stronger.

**Final stat blocks:**

| Property | Figure | Label |
|---|---|---|
| Albany Motel & Apartments | **+16.1%** | RevPAR growth, YoY |
| Hobart City Apartments | **+11.3%** | RevPAR growth, YoY |
| Hotel Nelson | **+8.2%** | RevPAR growth, YoY |

**Caption (unchanged, stays under the stat):**
> Full financial year. Every property and market is different, and individual results vary.
*(Albany also keeps: "Results reflect the property's first full year working with Indi.")*

> **Data rule, restated:** RevPAR percentage only. **Never** publish room count, occupancy, ADR, rooms sold, total revenue, or the dollar RevPAR. Do not add metrics to these blocks, even if they look impressive.

**Michael Stephens has signed off on his edited quote.** Albany is cleared to publish.

---

## 7. Digital Marketing page

The page is good. Three light additions only, **do not rewrite it.**

**7.1 Lead-in above the existing intro:**
> Of everything that drives revenue, digital marketing is the most overlooked, and it's the lowest cost way to sell a room online. Every point of acquisition cost you remove goes straight to net profit.

**7.2 Connective line where the direct-booking material sits:**
> Revenue management sets the price. Digital marketing sells it. Run together, they give guests a real reason to book direct, and they protect the integrity of your direct rate so it isn't quietly undercut elsewhere.

**7.3 Cross-link at the foot of the page:**
> Works hand in hand with revenue management → `/services/revenue-management`

> **Note on tone:** "protect the integrity of your direct rate" is the standing phrase for this. **Do not** write "stamp out OTA undercutting" or similar. OTAs remain strategic partners and are never criticised.

---

## 8. Revenue Management page

- [ ] **Delete this paragraph entirely:**
      *"No group can honestly promise you a number, and we won't pretend otherwise. What we can promise is the discipline and expertise that gives your property the best shot at strong performance."*
      Do not replace it with a softer version (see §1.3). Remove and close the gap.
- [ ] Add a reciprocal cross-link to Digital Marketing, so the pairing reads as deliberate:
      > Works hand in hand with digital marketing → `/services/digital-marketing`
- [ ] Apply §1.4: any full testimonial on this page becomes a one-line pull-quote plus a link out.

---

## 9. Checklist

**Global**
- [ ] "client/clients" → owners / properties (§1.1)
- [ ] "proof" and "results" as claims → In their words / Who we work with / A closer look (§1.2)
- [ ] Remove all disclaimers from body copy (§1.3)
- [ ] Inner-page testimonials → one-line pull-quotes + link out (§1.4)

**Round 3 leftovers**
- [ ] Revenue Management card copy · Distribution card copy
- [ ] og-image → PNG/JPG 1200×630
- [ ] Drop "and tech" from title/OG

**Hero & header**
- [ ] Fix "high-performing" hyphen break
- [ ] Logo blue = button blue (`#0E4FB0`)
- [ ] Tone down the hamburger
- [ ] Tighten dead space below the hero CTAs

**Homepage**
- [ ] Fourth Projects card (secondary styling) + revised intro + remove duplicate Projects link
- [ ] Remove David Pratt; add 3-up pull-quotes (Andrew, Lawrence, Michael) + link out

**Our Work page**
- [ ] Rename from Results; 301 redirect
- [ ] New hero; new section headings
- [ ] Remove the monthly group snapshot

**Case studies**
- [ ] Remove "Partnered since"; label → "RevPAR growth, YoY"; remove dollar values; recompose the stat block

**Service pages**
- [ ] Digital Marketing: three additions (§7)
- [ ] Revenue Management: delete the disclaimer paragraph; add cross-link

---

## 10. Still open (Sonny to supply)

- Photography for the three case studies (2 images each)
- Real photography site-wide (see the imagery rules in the Ascend brand doc)
- Hotel Groups page (new workstream, not yet written)
- Live direct-booking counter (replaces the removed group snapshot, later)
