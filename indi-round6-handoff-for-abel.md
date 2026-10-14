# Indi — Round 6 Update (Full Handoff for Abel)

**For:** Abel — hand to **Claude Code** as the task spec.
**Site:** indihotels.com.au

> Complete round-6 bundle. The **Hotel Groups page** is a separate new deliverable — full copy in `indi-hotel-groups-page-copy-deck.md`. Reference builds: `indi-contact-page.html`, `indi-homepage-card-treatments.html`.
>
> Global rules still apply: **owners/properties** (never "client"); **custom channel positioning** (never "parity"); no anti-OTA/chain language; no disclaimers in body copy; no guaranteed numbers; inner-page testimonials are one-line pull-quotes linking to Our Work.

---

## 1. CTA strategy (site-wide) — apply first

Vary CTAs by visitor readiness. **Two real destinations** (Free Discovery, Contact), varied wording so it never feels repetitive. No scheduler yet, so no live "Book a call".

| Page / section | Button label | Destination |
|---|---|---|
| Header (persistent) | Start your free discovery | Free Discovery |
| Homepage hero | Start your free discovery + *See how we work →* | Free Discovery |
| Homepage closing band | Start your free discovery | Free Discovery |
| How We Work (end) | Start your free discovery | Free Discovery |
| Distribution (end) | Talk to us about distribution | Contact |
| Revenue Management (end) | Talk to us about revenue | Contact |
| Digital Marketing (end) | Talk to us about your marketing | Contact |
| Projects (end) | Enquire about a project | Contact |
| Our Work / case studies (end) | Start your free discovery | Free Discovery |
| About (end) | Get in touch | Contact |
| Hotel Groups (hero + close) | Start your free discovery | Free Discovery |
| Contact page | *(form)* + "prefer a proper look? Start your free discovery →" | — |

**Logic:** Free Discovery for warm, high-intent moments (hero, closing bands, after proof, group evaluators). Contact — worded per context — for exploratory capability pages and the specific Projects enquiry.

**Future upgrade:** when a scheduling tool (Calendly/Cal.com) is added, switch the four "Talk to us…" Contact CTAs to **"Book a call"** pointing at the calendar.

---

## 2. Homepage

### 2.1 "The opportunity" cards — make them less dull
- **Blue icons** in a soft **sky (`#EEF4FE`) rounded tile** on each card.
- **Subtle hover lift** — slight raise + border shifts to `--blue` on hover.
- Reference mock: `indi-homepage-card-treatments.html`.

### 2.2 "What we do" — Projects card
Projects is a **standalone, non-contract** service, so it should look like a different kind of thing.
- **Same title size** as the other three, with **its own icon**.
- **Differentiate by colour:** Projects card gets a **sand (`--sand-1`) or soft-blue fill**; the three services stay white. Tells the story: three ongoing services + one one-off option.

### 2.3 Testimonials (carry-over — confirm live)
- Remove David Pratt (sold Southgate).
- 3-up pull-quotes: Andrew Macdonald, Lawrence Heasman ("General Manager, Hobart City Apartments"), Michael Stephens. Link out to Our Work.

---

## 3. Service pages

### 3.1 Revenue Management
- **Delete** the disclaimer paragraph ("No group can honestly promise you a number…").
- **Add a one-line pull-quote at the bottom:**
  > "The knowledge they've shared has shaped how we run the whole business."
  > **Michael Stephens** · Owner · Albany Motel & Apartments — *Read what owners say →*
- Reciprocal cross-link to Digital Marketing.
- End CTA: **"Talk to us about revenue"** → Contact.

### 3.2 Digital Marketing
- Keep the three light additions already briefed (lead-in, connective line, cross-link).
- **Add a one-line pull-quote at the bottom:**
  > "The website Indi provided is brilliant. It delivers two bookings for every OTA booking."
  > **Lawrence Heasman** · General Manager, Hobart City Apartments — *Read what owners say →*
- **Next capability link → Projects.** (Chain: Distribution → Revenue Management → Digital Marketing → Projects.)
- End CTA: **"Talk to us about your marketing"** → Contact.

---

## 4. Our Work page

### 4.1 Case-study intro line
*"Built around the strategy and, where an owner has shared one, their own words."*
→ **"Built around the strategy, and the owners' own words."**

### 4.2 "A closer look" heading
*"Three properties, priced with intent."* → **"A closer look at three partnerships."**

### 4.3 "Who we work with"
- Replace *"never as owned collections"* → **"A few of the independent properties that choose Indi."**
- **Add a 12th property: The Clifton Motel, Bunbury WA.** `[Sonny to supply URL + confirm consent.]`

### 4.4 Hobart case study — finalise
- **Title:** Smarter pricing, stronger rate.
- **Meta:** Hobart City Apartments · Hobart, Tasmania
- **Stat:** +11.3% · RevPAR growth · FY 2025/26 — percentage only.
- **Lede:** none.
- **Quote — add, verbatim, do not edit:**
  > "Indi Hotels provided exceptional service and support from day one. Opening a new hotel is always a challenging time, so I was delighted that Indi Hotels were able to come on board pre-opening. They did everything that was asked and promised, plus a lot more on top. The website Indi Hotels provided is brilliant. It currently delivers two bookings for every OTA booking, keeping commissions at a minimum in these challenging times. I can't recommend Indi Hotels highly enough, so if you need a break from a hotel chain or help with your own independent business, then you'd better call Indi Hotels!"
  > **Lawrence Heasman** · General Manager, Hobart City Apartments
- **Do not name the pricing tool** (RoomPriceGenie).

All three case studies (uniform set):
| Property | Title | Stat |
|---|---|---|
| Albany Motel & Apartments | A new owner's first full year, with Indi behind the commercials. | +16.1% |
| Hobart City Apartments | Smarter pricing, stronger rate. | +11.3% |
| Hotel Nelson | An experienced owner, still finding upside. | +8.2% |

---

## 5. Contact page — redesign

Replace the current basic page. Reference build: `indi-contact-page.html`. Full Ascend brand.

- **Hero band** (sand): eyebrow "Contact", heading **"Let's talk about your property."**, sub-line about replying personally.
- **Two columns:** form left, contact rail right.
- **Form:** name + property, email + phone (optional), message. Focus states in `--blue`. Soft cross-link: "Prefer a proper look at your commercials? Start your free discovery →". **Wire the form; submissions to revenue@indihotels.com.au + notification; spam protection.**
- **Right rail "Get in touch" card:** email + landline only. **Do NOT publish any mobile/WhatsApp number** — the sitewide floating WhatsApp button handles that.
- **"Two offices" feature card** (dark `--ink`): eyebrow "Two offices", heading "On the ground, around the clock."
  - **Sunshine Coast** `[Headquarters tag]` — 10 Thomas St, Noosaville QLD 4566, Australia
  - **Bali** — Jl. Kayu Aya No.10, Seminyak, Kuta, Badung, Bali, Indonesia
  - **No description lines** under the addresses.
  - **Small map thumbnail under each**, lightly desaturated, linking to Google Maps.
- **Map build note:** reference file uses placeholder static maps with approximate pins. Generate proper static maps (Google Static Maps or Mapbox) at exact coordinates, keep the desaturated treatment, and **verify both pins land on the correct addresses.** A clean screenshot per location is an acceptable no-API alternative.

---

## 6. Hotel Groups page — NEW

Full copy in `indi-hotel-groups-page-copy-deck.md`. Summary:

- **New top-level nav item: "Hotel Groups."**
- Persuasion-led sales page for multi-property owners. Sections: hero → the case ("Scale the commercial expertise, not the overheads") → what a group gets → **why Indi** (cheaper than in-house, deeper than an agency, sees across the portfolio) → how it works → proof (Lawrence Heasman as the group voice) → closing CTA.
- **No named client.** Open to any group. (A Deltine Capital case study can be added later with consent.)
- Consider a homepage entry point: *"Own more than one property? →"* linking here.

---

## 7. Carry-over — confirm these are actually live

- [ ] Homepage: David Pratt removed; 3-up pull-quotes in
- [ ] Homepage: 4th Projects card; duplicate Projects link under "How it works" removed
- [ ] Cards: "without the chaos" / "leave on the table" removed
- [ ] `og-image` is PNG/JPG (meta references `og-image.png` — confirm the file exists)
- [ ] Title/OG: "and tech" dropped
- [ ] Dead space below hero CTAs tightened
- [ ] Global language: client → owners/properties; proof/results retired; no body-copy disclaimers

---

## 8. Checklist (this round)

- [ ] CTA map applied site-wide (§1)
- [ ] Homepage opportunity cards: blue icons in sky tiles + hover lift
- [ ] Homepage Projects card: distinct fill, same title size, own icon
- [ ] Revenue Management: Michael pull-quote + delete disclaimer + cross-link + Contact CTA
- [ ] Digital Marketing: Lawrence pull-quote + next-capability → Projects + Contact CTA
- [ ] Our Work: intro line; "A closer look at three partnerships"; "who we work with" line; add 12th property
- [ ] Hobart case study finalised (quote, title, no tool name, no lede)
- [ ] Contact page rebuilt (§5), no mobile number, offices + maps
- [ ] Hotel Groups page built from its copy deck; added to nav

---

## 9. Still open (Sonny to supply)

- The Clifton Motel URL + consent; photography for case studies + site-wide
- Portfolio/group pricing model (the Groups page will drive group enquiries)
- Live direct-booking counter (replaces the removed group snapshot)
- Confirm Hobart FY comparison has a clean prior-year baseline (pre-opening engagement)
- Visual-enrichment ideas (bar-motif system, editorial data, scroll motion) — discussed, not yet briefed
