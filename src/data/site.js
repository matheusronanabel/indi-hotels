// Single source of truth for nav, content data, and SEO.
// Brand shown everywhere = "Indi". Domain/email stay on indihotels.com.au.

export const SITE = {
  name: 'Indi',
  legalDomain: 'indihotels.com.au',
  url: 'https://indihotels.com.au',
  tagline: 'The commercial team and tech behind independent hotels.',
  description:
    'Indi is the expert commercial team behind independent hotels and motels in Australia. Distribution, revenue management and digital marketing, run as one team to grow your revenue, build direct market share and reduce your cost of guest acquisition.',
  email: 'revenue@indihotels.com.au',
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
    ],
  },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Results', href: '/results' },
  { label: 'About', href: '/about' },
];

export const CTA = {
  label: 'Get your free commercial audit',
  short: 'Free commercial audit',
  href: '/contact',
};

export const SERVICES = [
  {
    slug: 'distribution',
    label: 'Electronic Distribution',
    icon: 'lan', // material symbol
    accent: 'ocean',
    tile:
      "Your channels and OTAs set up and optimised, connected cleanly to your systems, so you're visible everywhere that matters, without the chaos.",
  },
  {
    slug: 'revenue-management',
    label: 'Revenue Management',
    icon: 'monitoring',
    accent: 'clay',
    tile:
      'Best-practice pricing, rate plans and segmentation that move with demand, capturing revenue your fixed rates leave on the table.',
  },
  {
    slug: 'digital-marketing',
    label: 'Digital Marketing',
    icon: 'campaign',
    accent: 'palm',
    tile:
      'A booking-ready website, professional photography and direct-booking campaigns that turn lookers into direct bookings.',
  },
];

export const JOURNEY = [
  {
    n: '01',
    title: 'Free commercial audit',
    body:
      'We review your distribution, revenue and marketing, and show you where the upside is. No cost, no commitment.',
  },
  {
    n: '02',
    title: 'Onboarding',
    body:
      'We build and implement your distribution, revenue and marketing strategy. This is where the value is created.',
  },
  {
    n: '03',
    title: 'Ongoing partnership',
    body:
      'We keep it running and improving, at the level of support that fits your property.',
  },
];

export const TIERS = [
  {
    cadence: 'Weekly',
    line: 'Your outsourced commercial team, Indi-led',
    who: 'Indi, adjusting continuously as the market moves',
    best: 'Larger or complex assets, turnarounds, volatile demand',
  },
  {
    cadence: 'Monthly',
    line: 'Active management, shared',
    who: 'Shared: Indi and you, with monthly reporting',
    best: 'Most midscale properties wanting momentum',
    popular: true,
  },
  {
    cadence: 'Quarterly',
    line: 'Strategic oversight, owner-led execution',
    who: 'You do; Indi reviews and course-corrects each quarter',
    best: 'Hands-on owners, stable demand',
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

export const PROJECTS = [
  {
    icon: 'language',
    title: 'New website + booking engine',
    body: 'A booking-ready site built to convert lookers into direct bookings.',
  },
  {
    icon: 'photo_camera',
    title: 'Professional photography',
    body: 'The imagery your listings and website live or die on.',
  },
  {
    icon: 'dns',
    title: 'PMS selection & setup',
    body: 'The right property management system, implemented properly.',
  },
  {
    icon: 'tune',
    title: 'RMS / dynamic pricing',
    body: 'Set up your revenue management system to best practice.',
  },
  {
    icon: 'hub',
    title: 'GDS activation',
    body: 'Open up corporate and travel-agent distribution.',
  },
];

// Verbatim owner testimonials, published exactly as supplied and with consent.
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
      "Joining Indi Hotels has been a major step forward in the success of our business. After many years of being a member of a major brand, being inundated with the ever increasing costs, we decided to partner with Indi Hotels and go independent. Indi Hotels has been fantastic to deal with, giving exceptional advice and support. We highly recommend Indi Hotels to any owners looking to take their business to the next level.",
    name: 'David Pratt',
    role: 'Owner',
    property: 'Southgate Motel',
  },
  {
    quote:
      "Indi Hotels provided exceptional service and support from day one. Opening a new hotel is always a challenging time, so I was delighted that Indi Hotels were able to come on board pre-opening. They did everything that was asked and promised, plus a lot more on top. The website Indi Hotels provided is brilliant. It currently delivers two bookings for every OTA booking, keeping commissions at a minimum in these challenging times. I can't recommend Indi Hotels highly enough, so if you need a break from a hotel chain or help with your own independent business, then you'd better call Indi Hotels!",
    name: 'Lawrence Heasman',
    role: 'Group GM',
    property: 'City Apartment Hotel Group',
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
