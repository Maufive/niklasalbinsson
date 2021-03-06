import { FC } from 'react';
import { DefaultSeo, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const config = {
  title: 'Niklas Albinsson - Software developer',
  description:
    'Niklas Albinsson is a developer from Umeå, Sweden. Specialized in front end development, and likes to create apps, websites or just about anything and love to make them look nice!',
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

  return (
    <NextSeo
      {...config}
      title={title || config.title}
      description={description || config.description}
      openGraph={{
        title,
        url: `https://niklasalbinsson.dev${router.asPath}`,
      }}
    />
  );
};

export { CustomSeo };

export default Seo;
