import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `https://www.niklas.albinsson.dev/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/about', '/blog'].map((route) => ({
    url: `https://www.niklas.albinsson.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
