import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx/mdx-components";
import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/utils/mdx-utils";
import Link from "next/link";
import PageLayout from "@/app/components/page-layout";
import { generateBlogPostSchema } from "@/app/utils/structured-data";

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
          <Link href="/posts" className="text-sm hover:opacity-70 transition-colors">
            ← back to posts
          </Link>
        }
        breadcrumbs={[
          { label: "Blog Posts", path: "/posts" },
          { label: post.metadata.title, path: `/posts/${slug}` },
        ]}
      >
        <article className="prose prose-zinc dark:prose-invert">
          <CustomMDX source={post.content} />
        </article>
      </PageLayout>
    </>
  );
}
