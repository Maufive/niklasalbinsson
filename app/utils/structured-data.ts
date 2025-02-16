import { baseUrl } from "../sitemap";

type Author = {
  "@type": "Person";
  "@id": string;
  name: string;
  url: string;
};

const defaultAuthor: Author = {
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name: "Niklas Albinsson",
  url: baseUrl,
};

export function generateBlogPostSchema(post: {
  metadata: {
    title: string;
    publishedAt: string;
    description: string;
    image?: string;
  };
  slug: string;
}) {
  const { metadata, slug } = post;
  const postUrl = `${baseUrl}/posts/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: metadata.title,
    description: metadata.description,
    datePublished: new Date(metadata.publishedAt).toISOString(),
    dateModified: new Date(metadata.publishedAt).toISOString(),
    url: postUrl,
    image: metadata.image
      ? `${baseUrl}${metadata.image}`
      : `${baseUrl}/og?title=${encodeURIComponent(metadata.title)}`,
    author: defaultAuthor,
    publisher: {
      "@type": "Person",
      "@id": defaultAuthor["@id"],
      name: defaultAuthor.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
}

export function generateCraftSchema(craft: {
  metadata: {
    title: string;
    publishedAt: string;
    description: string;
    image?: string;
    link?: string;
    github?: string;
  };
  slug: string;
}) {
  const { metadata, slug } = craft;
  const craftUrl = `${baseUrl}/crafts/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${craftUrl}#project`,
    name: metadata.title,
    description: metadata.description,
    datePublished: new Date(metadata.publishedAt).toISOString(),
    dateModified: new Date(metadata.publishedAt).toISOString(),
    url: craftUrl,
    image: metadata.image
      ? `${baseUrl}${metadata.image}`
      : `${baseUrl}/og?title=${encodeURIComponent(metadata.title)}`,
    author: defaultAuthor,
    creator: defaultAuthor,
    codeRepository: metadata.github,
    discussionUrl: metadata.link,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": craftUrl,
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Niklas Albinsson",
    description:
      "Software developer crafting web applications with a focus on user experience and clean code.",
    publisher: defaultAuthor,
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": defaultAuthor["@id"],
    name: defaultAuthor.name,
    url: baseUrl,
    image: `${baseUrl}/og?title=Niklas Albinsson`,
    jobTitle: "Software Developer",
    description:
      "Software developer crafting web applications with a focus on user experience and clean code.",
    sameAs: ["https://github.com/Maufive"],
  };
}
