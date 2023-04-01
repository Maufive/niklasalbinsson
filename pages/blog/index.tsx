/* eslint-disable import/no-extraneous-dependencies */
import type { NextPage, GetStaticProps } from 'next';
import { pick } from '@contentlayer/client';
import PostList from 'components/blog/post-list';
import Page from 'components/page/page';
import { CustomSeo } from 'components/seo';
import { allPosts, type Post } from 'contentlayer/generated';

const BLOG_TITLE = 'Blog';
const BLOG_DESCRIPTION = 'I write about Javascript, animations, CSS and more!';

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => (
  <Page>
    <CustomSeo title={BLOG_TITLE} description={BLOG_DESCRIPTION} />
    <PostList title="All posts" posts={posts} />
  </Page>
);

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'readingTime'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return {
    props: { posts },
  };
};

export default Blog;
