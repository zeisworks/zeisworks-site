// One footer link list for both site shells (LandingLayout + BaseLayout),
// so every page can reach every page — the new pages were previously a
// walled garden with no outbound links at all.
export const FOOTER_GROUPS = [
  {
    heading: "Who it's for",
    links: [
      { label: 'Industries', href: '/industries/' },
      { label: 'For consulting firms', href: '/for/consulting-firms/' },
      { label: 'For agencies', href: '/for/agencies/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Proof', href: '/results/' },
      { label: 'Pricing', href: '/pricing/' },
      { label: 'About', href: '/about/' },
      { label: 'Consulting', href: '/consulting/' },
    ],
  },
];
