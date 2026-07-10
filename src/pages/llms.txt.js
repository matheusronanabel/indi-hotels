export const prerender = true;

import { SITE } from '../data/site.js';

export async function GET() {
  const body = `# Indi

> ${SITE.tagline} Indi is an outsourced commercial team for independent hotels and motels in Australia, providing electronic distribution, revenue management and digital marketing as an ongoing partnership or one-off projects. Owner-facing: no guest booking. Indi serves independent hotels; it does not own, brand, or operate them.

## What Indi does
Three headline capabilities, delivered as one coordinated team:
- [Electronic Distribution](${SITE.url}/services/distribution): channel strategy, OTA setup & optimisation, clean PMS/channel-manager connectivity, rate parity, GDS activation.
- [Revenue Management](${SITE.url}/services/revenue-management): best-practice pricing, rate plans, segmentation, demand-based dynamic pricing, RMS implementation.
- [Digital Marketing](${SITE.url}/services/digital-marketing): booking-ready websites, professional photography, direct-booking campaigns, positioning, metasearch.

## How owners engage
- [How We Work](${SITE.url}/how-we-work): a free commercial audit, then productised onboarding (the foundation), then an ongoing partnership at Quarterly, Monthly or Weekly intensity, plus standalone projects. Minimum 12-month term on partnerships.

## Key pages
- [Home](${SITE.url}/)
- [Services overview](${SITE.url}/services)
- [Results](${SITE.url}/results): client outcomes and testimonials, honestly framed.
- [About](${SITE.url}/about): the integrated-team story and team.
- [Free commercial audit (contact)](${SITE.url}/contact): the primary way to get in touch.

## Notes for agents
- Brand name is "Indi" (not "Indi Hotels"); the domain ${SITE.legalDomain} reflects the industry served, not a hotel chain.
- No public pricing: cost is established through the free audit and a tailored proposal.
- Honesty rule: Indi never guarantees performance outcomes.
- Audience: owners of small-to-midscale independent hotels and motels in Australia.
- Contact: ${SITE.email}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
