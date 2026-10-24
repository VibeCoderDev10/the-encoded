import './globals.css';

export const metadata = {
  title: 'The Encoded | Digital Marketing & Video Editing',
  description:
    'The Encoded is a video editing and performance marketing agency based in Erode, Tamil Nadu, scaling brands globally.',
  icons: { icon: '/logo.png' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Libre+Baskerville:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
