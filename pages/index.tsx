import type { NextPage, GetStaticProps } from 'next';
import { pick } from '@contentlayer/client';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import PageHeader from 'components/page-header';
import Page from 'components/page/page';
import { PostList } from 'components/blog';
import { InternalLink } from 'components/links';

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => (
  <Page>
    <PageHeader
      title={
        <span>
          Hi there, I'm Niklas. <br /> A curious software developer who's trying
          to get a little better every day
        </span>
      }
      description="This is where I share my experience working as a frontend developer and everything I learn about modern web technologies, UI/UX and much more!"
    >
      <InternalLink href="/about">Learn more about me</InternalLink>
    </PageHeader>

    <PostList title="Latest posts" posts={posts}>
      <InternalLink href="/blog">All posts</InternalLink>
    </PostList>
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
    )
    .slice(0, 3);

  return {
    props: { posts },
  };
};

export default Home;
