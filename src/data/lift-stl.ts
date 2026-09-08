// Lift-STL case study facts. Every value here is verifiable on the public
// pages it came from (join.lift-stl.com, lift-stl.com, Google). Results
// numbers (leads, shows, members, cost per member) are intentionally absent
// until Jack confirms them — see `results` below.
export const LIFT = {
  name: 'Lift-STL',
  owner: 'Eric Humes',
  city: 'Brentwood, Missouri',
  founded: 2020,
  funnelUrl: 'https://join.lift-stl.com/',
  siteUrl: 'https://www.lift-stl.com/',
  rating: '4.8',
  reviewCount: 92,
  facts: [
    { value: '7 days', label: 'The offer: a full free week, no card' },
    { value: '< 1 hr', label: 'Coach calls or texts every lead' },
    { value: '4.8 ★', label: 'On 92 Google reviews, shown on the page' },
  ],
  // What the funnel does, in the order a prospect experiences it.
  flow: [
    { step: 'Ad', detail: 'Meta ad to locals within roughly 20 miles of Brentwood. One offer: seven free days.' },
    { step: 'Page', detail: 'join.lift-stl.com. Static, hand-built, loads in under a second on a phone. Headline, four stats, features, six real Google reviews, FAQ, map, one form.' },
    { step: 'Claim', detail: 'Four fields: first name, last name, email, phone. Eligibility is stated on the form, not discovered at the desk.' },
    { step: 'Confirm', detail: '"A coach will call or text you, usually within the hour." The promise is on the page and the lead lands in Wix Contacts the moment it is submitted.' },
    { step: 'Survey', detail: 'Optional three-tap profile: goal, training frequency, what has held them back, preferred contact method.' },
    { step: 'Measure', detail: 'GA4 and the Meta Pixel fire on the form, not just the page view, so ad spend ties to actual claims.' },
  ],
  stack: [
    'Static HTML on its own subdomain, no page builder',
    'Self-hosted fonts, preloaded hero, mobile sticky CTA',
    'Meta Pixel + GA4 events on claim and survey',
    'Leads posted to a Wix backend function into Wix Contacts',
    'Share card for DMs and iMessage',
    'Brand palette lifted from the live lift-stl.com CSS and the Lift logo',
  ],
  // Fill these in with defensible numbers; leave null to hide the row.
  results: {
    leads: null as string | null,
    showRate: null as string | null,
    members: null as string | null,
    costPerMember: null as string | null,
    window: null as string | null,
  },
  // Eric's quote goes here verbatim, with his permission. null hides the block.
  quote: null as { text: string; name: string; title: string } | null,
};
