// Case studies for the Our Work page. RevPAR growth (%) only, ever — never room
// count, occupancy, ADR or total revenue (see indi-case-studies-handoff-for-abel.md §1).
// Order on the page: Albany -> Hobart -> Nelson (newcomer -> expertise -> veteran).
// No ledes, uniform structure across all three (see indi-round5-handoff-for-abel.md §3.2).
//
// Michael Stephens has signed off on his edited Albany quote — Albany is cleared to publish.
// Andrew Macdonald's Nelson quote is verbatim — do not edit.
// Photography live for all three (round 8): /albany-motel-apartments, /hobart-city-apartments, /hotel-nelson.
export const CASE_STUDIES = [
  {
    slug: 'albany',
    headline: "A new owner's first full year, with Indi behind the commercials.",
    lede: null,
    property: 'Albany Motel & Apartments',
    location: 'Albany, Western Australia',
    photos: [
      {
        label: 'Property photo, hero',
        note: 'Landscape. Exterior or a room, natural light.',
        src: '/albany-motel-apartments/albany-motel-apartments-balcony.jpg',
        alt: 'Guest enjoying coffee on a balcony at Albany Motel & Apartments, overlooking the Albany townscape',
      },
      {
        label: 'Property photo, detail',
        note: 'Portrait or square.',
        src: '/albany-motel-apartments/albany-motel-apartments-living-room.jpg',
        alt: 'Living room at Albany Motel & Apartments',
      },
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
    // Round 6: finalised per indi-round6-handoff-for-abel.md §4.4.
    // Do not reference "more revenue from fewer rooms sold" — invites questions about occupancy.
    // Do not name the pricing tool (RoomPriceGenie).
    headline: 'Smarter pricing, stronger rate.',
    lede: null,
    property: 'Hobart City Apartments',
    location: 'Hobart, Tasmania',
    photos: [
      {
        label: 'Property photo, hero',
        note: 'Landscape. Exterior or a room, natural light.',
        src: '/hobart-city-apartments/hobart-city-apartments-lobby.jpg',
        alt: 'Reception and lobby at Hobart City Apartments',
      },
      {
        label: 'Property photo, detail',
        note: 'Portrait or square.',
        src: '/hobart-city-apartments/hobart-city-apartments-penthouse-living.jpg',
        alt: 'Penthouse living area at Hobart City Apartments with a view of Mount Wellington',
      },
    ],
    stat: {
      pct: '+11.3',
      label: 'RevPAR growth · FY 2025/26',
      caption: 'Full financial year. Every property and market is different, and individual results vary.',
    },
    // Verbatim — do not edit.
    quote: {
      text:
        "Indi Hotels provided exceptional service and support from day one. Opening a new hotel is always a challenging time, so I was delighted that Indi Hotels were able to come on board pre-opening. They did everything that was asked and promised, plus a lot more on top. The website Indi Hotels provided is brilliant. It currently delivers two bookings for every OTA booking, keeping commissions at a minimum in these challenging times. I can't recommend Indi Hotels highly enough, so if you need a break from a hotel chain or help with your own independent business, then you'd better call Indi Hotels!",
      name: 'Lawrence Heasman',
      role: 'General Manager, Hobart City Apartments',
    },
  },
  {
    slug: 'hotel-nelson',
    headline: 'An experienced owner, still finding upside.',
    lede: null,
    property: 'Hotel Nelson',
    location: 'Nelson Bay, New South Wales',
    photos: [
      {
        label: 'Property photo, hero',
        note: 'Landscape. Exterior or a room, natural light.',
        src: '/hotel-nelson/hotel-nelson-exterior.jpg',
        alt: 'Hotel Nelson exterior at dusk, Nelson Bay',
      },
      {
        label: 'Property photo, detail',
        note: 'Portrait or square. Or Little Nel Cafe.',
        src: '/hotel-nelson/hotel-nelson-gardenview-room.jpg',
        alt: 'Gardenview queen twin room at Hotel Nelson',
      },
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

// Hotel Groups page only — round 10 (see indi-round10-handoff-for-abel.md).
// Keeps its lede, unlike the three uniform CASE_STUDIES above: different page, different job.
// Rendered as the single featured proof block for a group audience (quote + case study combined).
// No figures anywhere — Michael Jones has asked that NCP's RevPAR not be published (confidentiality).
// Outcomes are stated qualitatively only (see `narrative` below) — do not add a stat block back in.
// Michael Jones is COO of Deltine — keep the full role line so the leadership context is clear.
// Tone stays on partnership/goodwill, not fund investment performance.
export const NEW_CROSSING_PLACE_CASE_STUDY = {
  slug: 'new-crossing-place',
  headline: 'A first acquisition, transformed into a template for growth.',
  lede: "New Crossing Place was Deltine Capital's first acquisition. They partnered with Indi from the outset to build the commercial foundation from the ground up, and the result became the blueprint Deltine has used for the acquisitions that followed.",
  property: 'New Crossing Place Motel & Apartments',
  location: 'Seymour, Victoria',
  photos: [
    {
      label: 'Property photo, hero',
      note: 'Landscape. Exterior.',
      src: '/properties/new-crossing-place-motel.jpg',
      alt: 'New Crossing Place Motel & Apartments exterior, Seymour',
    },
    {
      label: 'Property photo, detail',
      note: 'Landscape, room interior.',
      src: '/new-crossing-place-motel/new-crossing-place-motel-bedroom.jpg',
      alt: 'Bedroom at New Crossing Place Motel & Apartments',
    },
  ],
  narrative: {
    pillars: [
      {
        title: 'Distribution',
        items: [
          'A completely new technology stack: PMS, channel manager, GDS and website booking engine',
          'A custom channel strategy built to drive direct bookings',
        ],
      },
      {
        title: 'Revenue management',
        items: [
          'A new dynamic pricing system',
          'A new rate structure designed to target need periods',
          'Pricing positioned with intent across every channel',
        ],
      },
      {
        title: 'Digital marketing',
        items: [
          'A new website and professional photography',
          'Metasearch advertising to capture high-intent demand',
        ],
      },
    ],
    outcomes: ['Record revenue achieved', 'More direct bookings', 'Higher guest satisfaction across all channels'],
    templateLine: 'Deltine has since used the same approach as their template for success across later acquisitions.',
  },
  quote: {
    text:
      "Indi has been a genuine partner from day one. Their support goes well beyond the usual services: the team's knowledge and hands-on approach have made a real difference to how we run our properties. They're always available when we need them, and the results speak for themselves. I'd recommend Indi to any owner or group looking for serious commercial support.",
    name: 'Michael Jones',
    role: 'Chief Operating Officer, Deltine Capital Motel Investment Fund',
  },
};
