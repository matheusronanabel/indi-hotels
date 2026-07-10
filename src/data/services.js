// Content for the three shared-template service pages.
export const SERVICE_PAGES = {
  distribution: {
    label: 'Electronic Distribution',
    icon: 'lan',
    accent: 'var(--color-ocean)',
    seoTitle: 'Electronic distribution & channel management for hotels',
    seoDesc:
      'Indi sets up and manages your hotel distribution: OTA optimisation, channel management and clean connectivity, so you stay bookable everywhere without losing control of your rates.',
    h1: 'Be bookable everywhere, without losing control of your rates.',
    sub: "Indi sets up and manages your distribution so you're visible on the channels that matter, connected cleanly to your systems, with a channel mix that balances cost and reach.",
    problemHeading: 'Distribution that grows by accident leaves revenue on the table.',
    problemBody:
      "For most independents, distribution grows by accident: a few listings, set up years ago, never optimised. Acquisition costs climb. Rates drift out of parity. Channels aren't talking to your PMS, so someone's updating availability by hand. And without a direct-booking strategy, you never build the guest relationship that lowers your cost per acquisition over time. The problem isn't the channels you're on. It's having no strategy for how you use them.",
    work: [
      ['Channel strategy', 'The right mix of OTAs, direct and other channels for your property and market, not a scattergun of listings.'],
      ['OTA setup & optimisation', 'Listings, content and the levers that affect how you rank and convert.'],
      ['Clean connectivity', 'Channel manager, PMS and booking engine working together, so availability and rates move once and update everywhere.'],
      ['Rate parity & integrity', 'Keeping your pricing consistent and your direct channel competitive.'],
      ['New channel & GDS activation', 'Opening corporate and travel-trade demand when it\u2019s right for you.'],
      ['Ongoing channel management', 'Watching performance and shifting mix as demand changes.'],
    ],
    delivery:
      'Your distribution strategy is built and implemented during onboarding, then kept running and optimised through your ongoing partnership, at the intensity you choose. Need a specific piece done on its own (a GDS activation, a channel manager / PMS setup)? We run those as standalone projects too.',
    honest: null,
    closing: 'Find out where your distribution is costing you.',
  },
  'revenue-management': {
    label: 'Revenue Management',
    icon: 'monitoring',
    accent: 'var(--color-clay)',
    seoTitle: 'Hotel revenue management & dynamic pricing services Australia',
    seoDesc:
      'Best-practice hotel revenue management from Indi: dynamic pricing, rate plans and segmentation that move with demand to capture the revenue static rates leave on the table.',
    h1: 'Stop leaving revenue on the table.',
    sub: 'Indi brings best-practice pricing and revenue management to your property, rates that move with demand, segmented to capture what static pricing misses.',
    problemHeading: "Your rates sit still. The market doesn't.",
    problemBody:
      'Most independent properties price on gut feel and habit, a season rate, a weekend rate, and not much in between. Meanwhile demand shifts daily: events, weather, your comp set, the day of week. Every night you\u2019re priced below what the market would pay, you lose revenue you\u2019ll never get back. Every night you\u2019re priced above it, you lose the booking. Getting this right is a full-time discipline most owners don\u2019t have time for.',
    work: [
      ['Pricing structure', 'A rate framework built for your property, not a generic template.'],
      ['Rate plans & segmentation', 'The right rates for the right guests through the right channels.'],
      ['Demand-based pricing', 'Moving rates with real demand signals, not the calendar.'],
      ['Forecasting & performance', 'Reading the data and acting on it.'],
      ['RMS implementation & optimisation', 'The right revenue management system, set up and run to best practice.'],
    ],
    delivery:
      'Your revenue management strategy is built in onboarding. How actively it\u2019s then run depends on your tier: Monthly and Weekly partnerships actively manage your pricing as the market moves, where the most upside lives, while Quarterly provides strategic oversight and course-correction rather than active yield management. Need only the system set up? We run RMS / dynamic pricing implementation as a standalone project.',
    honest:
      "No group can honestly promise you a number, and we won't pretend otherwise. What we can promise is the discipline and expertise that gives your asset the best shot at strong performance.",
    closing: 'See what your pricing is leaving behind.',
  },
  'digital-marketing': {
    label: 'Digital Marketing',
    icon: 'campaign',
    accent: 'var(--color-palm)',
    seoTitle: 'Hotel digital marketing, websites & direct booking campaigns',
    seoDesc:
      'A booking-ready website, professional photography and direct-booking campaigns from Indi, so guests find you, choose you, and book direct.',
    h1: 'Turn lookers into direct bookings.',
    sub: 'A booking-ready website, professional photography and direct-booking campaigns, so guests find you, choose you, and book direct with you.',
    problemHeading: 'Your most profitable bookings come direct, but only if guests can find you and want to book there.',
    problemBody:
      'A guest discovers your property, books through a third-party channel, and you pay for the privilege, then pay again next time, because you never captured the relationship. Often the direct alternative isn\u2019t compelling: an ageing website that\u2019s hard to book on, photography that doesn\u2019t do the rooms justice, no campaigns driving guests to your own channel. Strong marketing is how you build a direct channel guests want to use, and grow your revenue while reducing your cost of acquisition over time.',
    work: [
      ['Website + booking engine', 'A fast, modern site built to convert, with booking built in.'],
      ['Professional photography', 'Imagery that makes your property look as good as it is, also a live sample of our work.'],
      ['Direct-booking campaigns', 'Driving qualified guests to your own channel.'],
      ['Positioning', 'A clear, consistent story for your property across every touchpoint.'],
      ['Metasearch & visibility', 'Showing up where guests compare and decide.'],
    ],
    delivery:
      'Your marketing strategy is built and launched in onboarding, then driven and refined through your ongoing partnership. Two of the highest-impact pieces, a new website + booking engine and professional photography, are also available as standalone projects, and both are built to hand off into ongoing marketing if you want it.',
    honest: null,
    closing: 'See how much of your demand you could be owning.',
  },
};

export const SERVICE_ORDER = ['distribution', 'revenue-management', 'digital-marketing'];
