// Single source of truth for nav, content data, and SEO.
// Brand shown everywhere = "Indi". Domain/email stay on indihotels.com.au.

export const SITE = {
  name: 'Indi',
  legalDomain: 'indihotels.com.au',
  url: 'https://indihotels.com.au',
  tagline: 'The commercial team behind independent hotels.',
  description:
    'Indi is the expert commercial team behind independent hotels and motels in Australia. Distribution, revenue management and digital marketing, run as one team to grow your revenue, build direct market share and reduce your cost of guest acquisition.',
  email: 'revenue@indihotels.com.au',
  phone: '+61 7 4599 9059',
  whatsapp: '+61406999006',
  address: {
    street: '10 Thomas St',
    suburb: 'Noosaville',
    state: 'QLD',
    postcode: '4566',
    country: 'AU',
  },
  addressBali: 'Jl. Kayu Aya No.10, Seminyak, Kec. Kuta, Kabupaten Badung, Bali, Indonesia',
  locale: 'en-AU',
};

// Primary keyword set (from SEO research — Australian commercial-services intent).
// Kept here so titles/meta/JSON-LD stay consistent.
export const KEYWORDS = [
  'hotel revenue management Australia',
  'independent hotel distribution services',
  'outsourced revenue management hotels',
  'hotel digital marketing Australia',
  'OTA distribution management',
  'direct bookings strategy hotels',
  'channel management independent hotels',
  'dynamic pricing hotels',
  'hotel commercial services',
  'revenue management for motels',
];

export const NAV = [
  {
    label: 'Services',
    href: '/services',
    // "Commercial Services" stays a contained container so a future
    // "Hotel Management" path can sit beside it without restructuring.
    children: [
      { label: 'Distribution', href: '/services/distribution' },
      { label: 'Revenue Management', href: '/services/revenue-management' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Projects', href: '/services/projects' },
    ],
  },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CTA = {
  name: 'Commercial Discovery',
  label: 'Start your free discovery',
  short: 'Free discovery',
  href: '/free-discovery',
};

export const SERVICES = [
  {
    slug: 'distribution',
    label: 'Electronic Distribution',
    icon: 'lan', // material symbol
    tile:
      "Your channels and OTAs set up and optimised, connected cleanly to your systems, so you're visible everywhere that matters.",
  },
  {
    slug: 'revenue-management',
    label: 'Revenue Management',
    icon: 'monitoring',
    tile:
      'Best-practice pricing, rate plans and segmentation that move with demand, so you capture more of it.',
  },
  {
    slug: 'digital-marketing',
    label: 'Digital Marketing',
    icon: 'campaign',
    tile:
      'A booking-ready website, professional photography and direct-booking campaigns that turn lookers into direct bookings.',
  },
];

export const JOURNEY = [
  {
    n: '01',
    title: 'Free discovery',
    body:
      'A free look across your distribution, revenue and marketing, with practical ideas to help your hotel perform at its best.',
  },
  {
    n: '02',
    title: 'Onboarding',
    body:
      'We build and put in place a bespoke commercial strategy, built around your property.',
  },
  {
    n: '03',
    title: 'Ongoing partnership',
    body:
      'We keep it running and improving, at the level of support that fits you.',
  },
];

export const TIERS = [
  {
    cadence: 'Weekly',
    line: 'Your outsourced commercial team, Indi-led',
    who: 'Indi, adjusting continuously as the market moves',
    best: 'Larger or complex properties, repositionings, and demand that moves fast.',
  },
  {
    cadence: 'Monthly',
    line: 'Active management, shared',
    who: 'Shared: Indi and you, with monthly reporting',
    best: 'Most midscale properties wanting real momentum.',
    popular: true,
  },
  {
    cadence: 'Quarterly',
    line: 'Strategic oversight, owner-led',
    who: 'You do; Indi reviews and course-corrects each quarter',
    best: 'Hands-on owners and steady demand.',
  },
];

export const ROUTING = [
  {
    icon: 'cottage',
    when: 'Small motel / hands-on owner',
    then: 'Often Quarterly oversight + targeted projects.',
  },
  {
    icon: 'apartment',
    when: 'Midscale property',
    then: 'Usually Monthly active management.',
  },
  {
    icon: 'corporate_fare',
    when: 'Larger or group property',
    then: 'Typically Weekly, Indi-led.',
  },
  {
    icon: 'construction',
    when: 'Pre-opening / repositioning',
    then: 'Start with onboarding + a project, then choose a tier.',
  },
];

// Content for the standalone Projects page (services/projects.astro).
export const PROJECT_ITEMS = [
  {
    icon: 'language',
    title: 'A new website and booking engine',
    body: 'A fast, beautiful site built to convert, with direct booking at its heart.',
  },
  {
    icon: 'hub',
    title: 'GDS activation',
    body: 'Open your property to corporate and travel-trade demand, set up and connected properly.',
  },
  {
    icon: 'tune',
    title: 'Direct-channel optimisation',
    body: "Position your own website, phone and email as the best offer in the market, so more guests book with you directly.",
  },
  {
    icon: 'dns',
    title: 'PMS selection and setup',
    body: 'The right property management system for your property, implemented without the headaches.',
  },
  {
    icon: 'monitoring',
    title: 'Revenue management setup',
    body: 'Pricing structure, rate plans and tooling put in place to best practice.',
  },
  {
    icon: 'photo_camera',
    title: 'Professional photography',
    body: 'Imagery that makes your property look as good as it is, and helps every channel perform.',
  },
];

// Verbatim owner testimonials, published exactly as supplied and with consent.
// Order: Andrew, Lawrence, Michael.
export const TESTIMONIALS = [
  {
    quote:
      "Having run an independent hotel for many years, it is very easy to lose touch with the latest strategies and technology out there. I love being independent, but with the support of Indi Hotels in the background. If you are a hotel owner, join Indi Hotels and forget the chain brands. You will pay less in OTA commissions, your hotel will receive more direct bookings, you will see growth in overall revenue, and all without the compliance headaches and costs associated with joining a hotel chain.",
    name: 'Andrew Macdonald',
    role: 'Owner',
    property: 'Hotel Nelson & Little Nel Cafe',
  },
  {
    quote:
      "Indi Hotels provided exceptional service and support from day one. Opening a new hotel is always a challenging time, so I was delighted that Indi Hotels were able to come on board pre-opening. They did everything that was asked and promised, plus a lot more on top. The website Indi Hotels provided is brilliant. It currently delivers two bookings for every OTA booking, keeping commissions at a minimum in these challenging times. I can't recommend Indi Hotels highly enough, so if you need a break from a hotel chain or help with your own independent business, then you'd better call Indi Hotels!",
    name: 'Lawrence Heasman',
    role: 'Group GM',
    property: 'City Apartment Hotel Group',
  },
  {
    // Edited (Sonny's name removed, dashes stripped) — signed off by Michael Stephens.
    quote:
      "As a new entrant to the accommodation sector in late 2024, I couldn't have asked for a better partner than Indi. Their wisdom doesn't stop at the revenue side, the team really knows the game, and the knowledge they've shared has shaped how we run the whole business. They're readily available whenever I need them, and I've genuinely loved working with and learning from them. For any owner, new or established, I can't recommend Indi highly enough.",
    name: 'Michael Stephens',
    role: 'Owner',
    property: 'Albany Motel & Apartments',
  },
];

// Short pull-quotes for inner pages (homepage 3-up, capability-page snippets).
// Exact excerpts from the verbatim TESTIMONIALS above.
export const PULL_QUOTES = [
  {
    quote: 'I love being independent, but with the support of Indi Hotels in the background.',
    name: 'Andrew Macdonald',
    role: 'Owner',
    property: 'Hotel Nelson',
  },
  {
    quote:
      'The website Indi Hotels provided is brilliant. It currently delivers two bookings for every OTA booking.',
    name: 'Lawrence Heasman',
    role: 'Group GM',
    property: 'City Apartment Hotel Group',
  },
  {
    quote: "I couldn't have asked for a better partner than Indi.",
    name: 'Michael Stephens',
    role: 'Owner',
    property: 'Albany Motel & Apartments',
  },
];

// Properties that trust Indi with their commercials. url is null where not yet supplied.
// image is null where no photo has been sourced yet (falls back to a placeholder).
export const PROPERTIES = [
  { name: 'Hobart City Apartments', location: 'Hobart TAS', url: 'https://www.hobartcityapartmenthotel.com/', image: '/properties/hobart-city-apartments.jpg' },
  { name: 'The Carrington Hotel', location: 'Shepparton VIC', url: 'https://www.thecarrington.net.au/', image: '/properties/the-carrington-hotel.jpg' },
  { name: 'Melbourne City Apartment Hotel', location: 'West Melbourne VIC', url: 'https://www.melbournecityapartmenthotel.com', image: '/properties/melbourne-city-apartment-hotel.jpg' },
  { name: 'Beechworth Motor Inn', location: 'Beechworth VIC', url: 'https://www.beechworthmotorinn.com.au/', image: '/properties/beechworth-motor-inn.jpg' },
  { name: 'Sanctuary Inn on Westernport', location: 'Hastings VIC', url: 'https://www.sanctuaryinnonwesternport.com.au/', image: '/properties/sanctuary-inn-on-westernport.jpg' },
  { name: 'Hotel Nelson', location: 'Nelson Bay NSW', url: 'http://www.hotelnelson.com.au/', image: '/properties/hotel-nelson.jpg' },
  { name: 'Albany Motel & Apartments', location: 'Albany WA', url: 'https://www.albanymotel.com.au', image: '/properties/albany-motel-apartments.jpg' },
  { name: 'Sherbourne Terrace Hotel', location: 'Shepparton VIC', url: 'https://sherbournehotel.com.au/', image: '/properties/sherbourne-terrace-hotel.jpg' },
  { name: 'The Observatory', location: 'Coffs Harbour NSW', url: 'https://www.theobservatory.com.au/', image: '/properties/the-observatory.jpg' },
  { name: 'Platinum International', location: 'Toowoomba QLD', url: 'https://www.platinuminternational.com.au/', image: '/properties/platinum-international.jpg' },
  { name: 'Country Motel Ipswich', location: 'Brisbane QLD', url: 'https://www.countrymotelipswich.com/', image: '/properties/country-motel-ipswich.jpg' },
];
