/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line import/no-unresolved
import type { Metadata } from 'next';
import PageHeader from 'components/page-header';
import { formatDate } from 'utils/formatDate';
import Page from 'components/page/page';
import { Mdx } from 'components/mdx';
import { BreadcrumbLink } from 'components/navigation/breadcrumb-link';
import { allPosts } from 'contentlayer/generated';
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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function Blog({ params }: Props) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formattedPublishDate = formatDate(post.publishedAt);

  return (
    <Page>
      <BreadcrumbLink href="/blog">All posts</BreadcrumbLink>
      <PageHeader title={post.title} compact>
        <p className="text-zinc-400">
          Published on{' '}
          <time dateTime={post.publishedAt}>{formattedPublishDate}</time>
          <span>&middot;</span> {post.readingTime.text}
        </p>
      </PageHeader>
      <article className="prose prose-invert mt-10 sm:prose-invert lg:prose-lg sm:px-4 2xl:my-20">
        <Mdx code={post.body.code} />
      </article>
    </Page>
  );
}
