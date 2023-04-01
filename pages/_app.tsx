import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/prism-theme.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Navigation from 'components/navigation';
import Footer from 'components/footer/footer';
import { Inter, Playfair_Display } from 'next/font/google';

const FONT_INTER = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const FONT_PLAYFAIR_DISPLAY = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

function AppContainer({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div
      className={`bg-zinc-900 text-zinc-100 ${FONT_INTER.variable} ${FONT_PLAYFAIR_DISPLAY.variable} font-sans`}
    >
      <Navigation />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default AppContainer;
