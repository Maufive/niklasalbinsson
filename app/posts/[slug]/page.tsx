import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx/mdx-components";
import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/utils/mdx-utils";
import Link from "next/link";
import PageLayout from "@/app/components/page-layout";
import { generateBlogPostSchema } from "@/app/utils/structured-data";
import RecommendedContent from "@/app/components/recommended-content";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  const { title, publishedAt: publishedTime, description } = post.metadata;
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Blog Post by Niklas Albinsson`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${baseUrl}/posts/${post.slug}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const structuredData = generateBlogPostSchema(post);

  // Transform posts for recommended content
  const allContent = posts.map((p) => ({
    ...p,
    type: "post" as const,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageLayout
        title={post.metadata.title}
        description={post.metadata.description}
        backLink={
          <Link
            href="/posts"
            className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            ← Posts
          </Link>
        }
        breadcrumbs={[
          { label: "Blog Posts", path: "/posts" },
          { label: post.metadata.title, path: `/posts/${slug}` },
        ]}
      >
        <article
          className="prose prose-zinc dark:prose-invert"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <CustomMDX source={post.content} />
        </article>

        <RecommendedContent currentSlug={slug} currentType="post" items={allContent} />
      </PageLayout>
    </>
  );
}
