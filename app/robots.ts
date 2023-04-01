export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://www.niklas.albinsson.dev/sitemap.xml',
    host: 'https://www.niklas.albinsson.dev',
  };
}
