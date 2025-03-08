import Link from "next/link";
import AnimatedLink from "../components/animated-link";
import PageLayout from "../components/page-layout";
import { getBlogPosts } from "../utils/mdx-utils";
import { Metadata } from "next";
import { baseUrl } from "../sitemap";

export const metadata: Metadata = {
  title: "Blog Posts",
  description:
    "Articles about web development, software engineering, and my journey as a developer.",
  openGraph: {
    title: "Blog Posts | Niklas Albinsson",
    description:
      "Articles about web development, software engineering, and my journey as a developer.",
    url: "/posts",
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/posts`,
  },
};

export default async function PostsPage() {
  const posts = (await getBlogPosts()).toSorted(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <PageLayout
      title="Posts"
      description="Thoughts, ideas, and things I've learned along the way."
      metadata={metadata}
      breadcrumbs={[{ label: "Blog Posts", path: "/posts" }]}
      backLink={
        <Link
          href="/"
          className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
        >
          ← Home
        </Link>
      }
    >
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.slug} className="group">
            <article>
              <AnimatedLink href={`/posts/${post.slug}`}>
                <h2 className="text-lg font-medium">{post.metadata.title}</h2>
              </AnimatedLink>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {post.metadata.description}
              </p>
              <time className="mt-2 block text-sm text-zinc-600 dark:text-zinc-400">
                {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </article>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
