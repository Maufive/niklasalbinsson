import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/prism-theme.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Navigation from 'components/navigation';
import Footer from 'components/footer/footer';

function AppContainer({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Navigation />
      <AnimatePresence initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default AppContainer;
