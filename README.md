# The Encoded

Luxury editorial landing page for **The Encoded** (@the_encoded_), a video editing and performance marketing agency in Erode, Tamil Nadu.

Built with Next.js (App Router), React and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.jsx        Page shell, fonts, metadata
  page.jsx          Assembles the sections
  globals.css       Tailwind import + custom styles (te-* classes)
components/
  Navbar.jsx        Sticky navigation + mobile menu
  Hero.jsx          Headline, buttons, stats
  ReelsShowcase.jsx Swipeable reel carousel + dots
  ReelEmbed.jsx     One reel player (plays on the site)
  ProfileSlide.jsx  Last slide: "For more videos" -> Instagram
  QuoteBlock.jsx    Editorial quote
  Services.jsx      Two service cards
  IntakeForm.jsx    Lead form
  Footer.jsx        Footer
  LogoBadge.jsx     Round logo
  icons.jsx         Play and arrow icons
lib/
  data.js           Nav links, stats, services, reels list
public/
  logo.png          Brand logo (transparent circle)
  reels/            reel-N.mp4, reel-N-poster.jpg, reel-N.webp
```

## Add or change reels

1. Put the MP4 in `public/reels/` (H.264, 9:16, ideally under 5 MB). Also add a poster image `reel-N-poster.jpg`, and optionally a silent looping preview `reel-N.webp` used if a browser cannot play the video.
2. Add an entry to `REEL_ITEMS` in `lib/data.js`.

The Instagram profile slide is always added as the last slide.

## Lead form

The form currently shows a confirmation message only and does not send data anywhere. Connect it to a form service or an API route in `components/IntakeForm.jsx` (`handleSubmit`).
