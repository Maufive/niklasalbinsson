import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/prism-theme.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navigation } from "components/navigation";
import Footer from "components/footer";
import { Inter, Playfair_Display } from "next/font/google";

const FONT_INTER = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const FONT_PLAYFAIR_DISPLAY = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://niklasalbinsson.dev"),
  title: {
    default: "Niklas Albinsson",
    template: "%s | Niklas Albinsson",
  },
  description:
    "Developer from Umeå, Sweden with a passion for pretty interfaces and neat user experiences.",
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
  icons: {
    shortcut: "/favicons/favicon.ico?v=2",
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
      className={`dark bg-background/95 text-foreground ${FONT_INTER.variable} ${FONT_PLAYFAIR_DISPLAY.variable} font-sans`}
    >
      <body className="flex flex-col antialiased gap-20">
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
