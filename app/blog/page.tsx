import type { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import Page from 'components/page';
import BlogPostList from 'components/blog-post-list';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read my thoughts on software development, animations, and more.',
};

export default async function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Page>
      <BlogPostList title="All posts" posts={posts} />
    </Page>
  );
}
