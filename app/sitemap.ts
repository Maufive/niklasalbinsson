import { getBlogPosts, getCrafts } from "@/app/utils/mdx-utils";
import type { MetadataRoute } from "next";

export const baseUrl = "https://niklasalbinsson.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getBlogPosts()).map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const crafts = (await getCrafts()).map((craft) => ({
    url: `${baseUrl}/crafts/${craft.slug}`,
    lastModified: craft.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = ["/posts", "/crafts"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const index = {
    url: baseUrl,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily" as const,
    priority: 1,
  };

  return [index, ...routes, ...posts, ...crafts];
}
