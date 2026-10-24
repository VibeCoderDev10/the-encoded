export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Inquire', href: '#inquire' },
];

export const STATS = [
  { value: '27+', label: 'Clients Scaled Globally' },
  { value: '100%', label: 'Retention-Engineered Hooks' },
  { value: 'Global', label: 'Delivery & Reach' },
  { value: 'Erode, TN', label: 'Studio Base' },
];

// REELS. They play on the site itself, so visitors never leave the page.
// Files live in public/reels/. Order here = order of the slides.
// The last slide is always the Instagram profile card.
export const REEL_ITEMS = [
  {
    title: 'Client reel 1',
    video: '/reels/reel-1.mp4',
    poster: '/reels/reel-1-poster.jpg',
    anim: '/reels/reel-1.webp',
  },
  {
    title: 'Client reel 2',
    video: '/reels/reel-2.mp4',
    poster: '/reels/reel-2-poster.jpg',
    anim: '/reels/reel-2.webp',
  },
  {
    title: 'Client reel 3',
    video: '/reels/reel-3.mp4',
    poster: '/reels/reel-3-poster.jpg',
    anim: '/reels/reel-3.webp',
  },
];

export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/the_encoded_';
export const SLIDE_COUNT = REEL_ITEMS.length + 1;

export const SERVICES = [
  {
    index: '01',
    title: 'Video Editing & Retention Engineering',
    body:
      'Short-form reels, ad creatives and motion design built around the first three seconds, the pacing that keeps people watching, and the call to action that turns a view into an enquiry.',
    points: ['Short-form reels', 'Ad creatives', 'Motion design'],
  },
  {
    index: '02',
    title: 'Performance Digital Marketing',
    body:
      'Paid media acquisition, sales funnels and lead generation, tracked end to end so every rupee spent on creative and ads can be tied back to revenue.',
    points: ['Paid media acquisition', 'Sales funnels', 'Lead generation'],
  },
];

export const INITIAL_FORM = {
  brand: '',
  contact: '',
  service: '',
  budget: '',
};
