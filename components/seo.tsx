import { FC } from 'react';
import { DefaultSeo, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

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

const CustomSeo: FC<{ title?: string; description?: string }> = ({
  title = '',
  description,
}) => {
  const router = useRouter();
  const seoTitle = `${title} | Niklas Albinsson`;

  return (
    <NextSeo
      {...config}
      title={seoTitle || config.title}
      description={description || config.description}
      openGraph={{
        title: seoTitle,
        url: `https://niklasalbinsson.dev${router.asPath}`,
      }}
    />
  );
};

export { CustomSeo };

export default Seo;
