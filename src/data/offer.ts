// The three-step offer for gym owners. Dollar amounts are Jack's call:
// `price: null` renders a CONFIRM tag instead of a number, so nothing on the
// site quotes a price he hasn't approved. Set e.g. price: '$3,500' to publish.
export interface OfferStep {
  name: string;
  price: string | null;
  terms?: string;
  body: string;
  timeline?: string;
}

export const OFFER: { teardown: OfferStep; build: OfferStep; run: OfferStep } = {
  teardown: {
    name: 'Free trial teardown',
    price: 'Free',
    terms: '15 minutes',
    body: "We go through your current trial offer, page, and follow-up together and show you exactly where it leaks. If we're not the right fit, we'll say so on the call.",
  },
  build: {
    name: 'Free-week launch',
    price: null,
    terms: 'fixed price',
    timeline: 'Live in about two weeks',
    body: 'The page, the pixel, the lead routing, the follow-up script, and the first round of ad creative. Yours to keep whether or not we go further.',
  },
  run: {
    name: 'Run and report',
    price: null,
    terms: 'per month, month to month',
    body: 'We run the ads, keep the page current, watch the numbers, and send a one-page read every month: leads, shows, members, cost per member. Cancel any month.',
  },
};
