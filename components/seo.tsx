import { FC } from 'react';
import { DefaultSeo } from 'next-seo';

const config = {
  title: 'Niklas Albinsson - Software developer',
  description:
    'I’m a developer that loves to create stuff and make them look nice!',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://niklasalbinsson.dev',
    site_name: 'Niklas Albinsson',
    images: [
      {
        url: 'https://niklasalbinsson.dev/og.png',
        alt: 'Niklas Albinsson',
      },
    ],
  },
  twitter: {
    handle: '@albinssonniklas',
    site: '@niklasalbinsson',
    cardType: 'summary_large_image',
  },
};

const Seo: FC = () => <DefaultSeo {...config} />;

export default Seo;
