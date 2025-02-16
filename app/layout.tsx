import "./global.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";

import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "./utils";
import Footer from "./components/footer";

const FONT_INTER = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const FONT_PLAYFAIR_DISPLAY = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Niklas Albinsson",
    template: "%s | Niklas Albinsson",
  },
  description:
    "Software developer crafting web applications with a focus on user experience and clean code. Building polished interfaces and scalable solutions.",
  openGraph: {
    title: "Niklas Albinsson",
    description:
      "Software developer crafting web applications with a focus on user experience and clean code. Building polished interfaces and scalable solutions.",
    url: baseUrl,
    siteName: "Niklas Albinsson",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og?title=Niklas Albinsson`,
        width: 1200,
        height: 630,
        alt: "Niklas Albinsson - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niklas Albinsson",
    description:
      "Software developer crafting web applications with a focus on user experience and clean code.",
    images: [`${baseUrl}/og?title=Niklas Albinsson`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  authors: [{ name: "Niklas Albinsson" }],
  creator: "Niklas Albinsson",
  publisher: "Niklas Albinsson",
  keywords: [
    "Web Development",
    "Software Engineering",
    "Full Stack Development",
    "React",
    "TypeScript",
    "Node.js",
    "UI/UX",
    "JavaScript",
    "Web Applications",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        "dark text-zinc-200 font-sans bg-zinc-900",
        FONT_INTER.variable,
        FONT_PLAYFAIR_DISPLAY.variable,
      )}
    >
      <body className="antialiased max-w-xl mx-4 my-8 sm:mx-auto bg-zinc-900">
        <main className="flex-auto min-w-0 my-10 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
