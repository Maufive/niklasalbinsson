import type { Metadata } from 'next';
import { formatDate } from 'utils/format-date';
import Page from 'components/page';
import { Mdx } from 'components/mdx';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export async function generateStaticParams(): Promise<Params[]> {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    slug,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://www.niklasalbinsson.dev/blog/${slug}`,
    },
  };
}

export default async function Blog({ params }: Props) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const formattedPublishDate = formatDate(post.publishedAt);

  return (
    <Page>
      <Link
        passHref
        href="/blog"
        className="flex w-fit items-center text-muted-foreground transition-colors hover:text-zinc-300 lg:mb-6 "
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        All posts
      </Link>
      <div className="mb-12 mt-6 lg:mb-24  2xl:mb-32">
        <h1 className="mb-4 font-serif text-4xl font-bold">{post.title}</h1>
        <p className="mb-6 text-base text-foreground-muted">
          Published on{' '}
          <time dateTime={post.publishedAt}>{formattedPublishDate}</time>
          <span>&middot;</span> {post.readingTime.text}
        </p>
      </div>
      <article className="prose prose-invert sm:prose-invert lg:prose-lg sm:px-4 2xl:my-20">
        <Mdx code={post.body.code} />
      </article>
    </Page>
  );
}
