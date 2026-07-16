// Case studies for the Our Work page. RevPAR growth (%) only, ever — never room
// count, occupancy, ADR or total revenue (see indi-case-studies-handoff-for-abel.md §1).
// Order on the page: Albany -> Hobart -> Nelson (newcomer -> expertise -> veteran).
// No ledes, uniform structure across all three (see indi-round5-handoff-for-abel.md §3.2).
//
// Michael Stephens has signed off on his edited Albany quote — Albany is cleared to publish.
// Andrew Macdonald's Nelson quote is verbatim — do not edit.
// Still open: photography for all three (placeholders shown instead).
export const CASE_STUDIES = [
  {
    slug: 'albany',
    headline: "A new owner's first full year, with Indi behind the commercials.",
    lede: null,
    property: 'Albany Motel & Apartments',
    location: 'Albany, Western Australia',
    photos: [
      { label: 'Property photo, hero', note: 'Landscape. Exterior or a room, natural light.' },
      { label: 'Property photo, detail', note: 'Portrait or square.' },
    ],
    stat: {
      pct: '+16.1',
      label: 'RevPAR growth · FY 2025/26',
      caption:
        "Full financial year. Every property and market is different, and individual results vary.",
    },
    // Edited (Sonny's name removed, dashes stripped) — signed off by Michael Stephens.
    quote: {
      text:
        "As a new entrant to the accommodation sector in late 2024, I couldn't have asked for a better partner than Indi. Their wisdom doesn't stop at the revenue side, the team really knows the game, and the knowledge they've shared has shaped how we run the whole business. They're readily available whenever I need them, and I've genuinely loved working with and learning from them. For any owner, new or established, I can't recommend Indi highly enough.",
      name: 'Michael Stephens',
      role: 'Owner · Albany Motel & Apartments',
    },
  },
  {
    slug: 'hobart',
    // Overrides Round 4. Do not reference "more revenue from fewer rooms sold" —
    // invites questions about occupancy. The title alone carries the story.
    headline: 'A stronger year, priced with intent.',
    lede: null,
    property: 'Hobart City Apartments',
    location: 'Hobart, Tasmania',
    photos: [
      { label: 'Property photo, hero', note: 'Landscape. Exterior or a room, natural light.' },
      { label: 'Property photo, detail', note: 'Portrait or square.' },
    ],
    stat: {
      pct: '+11.3',
      label: 'RevPAR growth · FY 2025/26',
      caption: 'Full financial year. Every property and market is different, and individual results vary.',
    },
    quote: null, // none available — omit the block rather than ship a placeholder
  },
  {
    slug: 'hotel-nelson',
    headline: 'An experienced owner, still finding upside.',
    lede: null,
    property: 'Hotel Nelson',
    location: 'Nelson Bay, New South Wales',
    photos: [
      { label: 'Property photo, hero', note: 'Landscape. Exterior or a room, natural light.' },
      { label: 'Property photo, detail', note: 'Portrait or square. Or Little Nel Cafe.' },
    ],
    stat: {
      pct: '+8.2',
      label: 'RevPAR growth · FY 2025/26',
      caption: 'Full financial year. Every property and market is different, and individual results vary.',
    },
    // Verbatim — do not edit. Owner quotes are exempt from the chain/OTA tone rules.
    quote: {
      text:
        'Having run an independent hotel for many years, it is very easy to lose touch with the latest strategies and technology out there. I love being independent, but with the support of Indi Hotels in the background. If you are a hotel owner, join Indi Hotels and forget the chain brands. You will pay less in OTA commissions, your hotel will receive more direct bookings, you will see growth in overall revenue, and all without the compliance headaches and costs associated with joining a hotel chain.',
      name: 'Andrew Macdonald',
      role: 'Owner · Hotel Nelson & Little Nel Cafe',
    },
  },
];
