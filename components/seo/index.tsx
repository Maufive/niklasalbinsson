import { DefaultSeo as NextDefaultSeo } from 'next-seo';
import React from 'react';
import siteConfig from 'config/site';

interface Props {
  title?: string;
}

const DefaultSeo: React.FC<Props> = ({ title }) => (
  <NextDefaultSeo
    title={title || siteConfig.title}
    description={siteConfig.description}
    canonical={siteConfig.url}
    openGraph={{
      type: 'website',
      locale: 'sv_SE',
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.image,
          alt: siteConfig.title,
          width: 1280,
          height: 720,
        },
      ],
    }}
    twitter={{
      handle: siteConfig.twitter,
      site: siteConfig.twitter,
      cardType: 'summary_large_image',
    }}
  />
);

export default DefaultSeo;
