export const prerender = true;

import { SITE } from '../data/site.js';
import { SERVICE_PAGES, SERVICE_ORDER } from '../data/services.js';
import { TIERS, JOURNEY, PROJECT_ITEMS } from '../data/site.js';

export async function GET() {
  const services = SERVICE_ORDER.map((slug) => {
    const p = SERVICE_PAGES[slug];
    const work = p.work.map(([t, b]) => `- **${t}**: ${b}`).join('\n');
    return `### ${p.label}\n${SITE.url}/services/${slug}\n\n**${p.h1}**\n${p.sub}\n\n*The problem: ${p.problemHeading}*\n${p.problemBody}\n\n*What Indi does:*\n${work}\n\n*How it's delivered:* ${p.delivery}${p.honest ? `\n\n*Honest note:* ${p.honest}` : ''}`;
  }).join('\n\n');

  const journey = JOURNEY.map((s) => `${s.n}. **${s.title}**: ${s.body}`).join('\n');
  const tiers = TIERS.map((t) => `- **${t.cadence}** (${t.line}): ${t.who}. Best for: ${t.best}.`).join('\n');
  const projects = PROJECT_ITEMS.map((p) => `- **${p.title}**: ${p.body}`).join('\n');

  const body = `# Indi Full Content

> ${SITE.tagline}

Indi is the expert commercial team behind independent hotels and motels in Australia. We supply distribution, revenue management and digital marketing, the work an owner would otherwise hire several separate specialists to cover, as one coordinated team, as an ongoing partnership or one-off projects. The site is owner-facing; there is no guest booking. Indi serves independent hotels and does not own, brand, or operate a collection.

## Positioning
- One integrated team, not a stitched-together supplier list.
- We sell expertise (with technology as the toolkit), not software you self-serve.
- Honesty rule: Indi never guarantees performance outcomes.
- Brand: "Indi". Domain and email stay on ${SITE.legalDomain}, which reads as the industry served.

## Who it's for
Owners of small-to-midscale independent hotels and motels in Australia, typically hands-on operators, often regional, without an in-house revenue or marketing function, wanting to grow direct bookings and having no time to manage pricing.

## Services (what we do)

${services}

### Systems & Technology (supporting)
PMS, RMS and channel-manager selection & setup, surfaced within Distribution and Revenue Management, and offered as standalone projects. No separate page.

## How We Work (how you buy)
${SITE.url}/how-we-work

The journey:
${journey}

Onboarding is the foundation, a dedicated, productised engagement where the three strategies are built and implemented. Every ongoing partnership runs on a minimum 12-month term.

Levels of support (ascending intensity):
${tiers}

About Quarterly: this is strategic oversight, not active yield management. In markets where rates move week to week, the more execution you hand to Indi (Monthly or Weekly), the more RevPAR upside you're positioned to capture.

Projects (standalone, fixed-scope, quoted per property): ${SITE.url}/services/projects
${projects}

## Our Work
${SITE.url}/our-work
Real properties, real owners, real commercial outcomes, in their own words. Testimonials published with consent from named owners. Properties are presented as the independent owners and properties Indi works with, never an owned collection. No performance data or guaranteed outcomes are shown.

## About
${SITE.url}/about
Indi gives independent hotel owners the commercial expertise and tools to compete, while the property stays entirely theirs. One team, not a stack of suppliers. Beliefs: independence is the point; honesty over hype; the work is the value. Team: Sonny (Founder & Revenue), Deby (Marketing), Yudi (Revenue), Abel (Developer), Yuka (Administrator). Based in Sunshine Coast, QLD, and Seminyak, Bali.

## Pricing
No public pricing. Cost is established through a free Commercial Discovery and a tailored proposal, the single front door to working with Indi.

## Contact
Primary action: the free Commercial Discovery at ${SITE.url}/free-discovery, a no-cost, no-commitment review of your distribution, revenue and marketing.
General enquiries: ${SITE.url}/contact
Email: ${SITE.email}
Phone: ${SITE.phone}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
