import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/prism-theme.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Navigation from 'components/navigation';
import Footer from 'components/footer';
import { Inter, Playfair_Display } from 'next/font/google';

const FONT_INTER = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const FONT_PLAYFAIR_DISPLAY = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Niklas Albinsson',
    template: '%s | Niklas Albinsson',
  },
  description:
    'Developer from Umeå, Sweden with a passion for pretty interfaces.',
  openGraph: {
    title: 'Niklas Albinsson',
    description:
      'Developer from Umeå, Sweden with a passion for pretty interfaces.',
    url: 'https://niklasalbinsson.dev',
    siteName: 'Niklas Albinsson',
    images: [
      {
        url: 'https://niklasalbinsson.dev/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'sv-SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Niklas Albinsson',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicons/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-zinc-900 text-zinc-100 ${FONT_INTER.variable} ${FONT_PLAYFAIR_DISPLAY.variable} font-sans`}
    >
      <body className="flex flex-col antialiased">
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
