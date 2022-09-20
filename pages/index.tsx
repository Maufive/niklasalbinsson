import type { NextPage, GetStaticProps } from 'next';
import { pick } from '@contentlayer/client';
import PageHeader from 'components/page-header';
import Page from 'components/page/page';
import { PostList } from 'components/blog';
import { InternalLink } from 'components/links';
import Seo from 'components/seo';
import { FeaturedProjectCard } from 'components/featured-project-card';
import { allPosts, type Post } from 'contentlayer/generated';

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => (
  <Page>
    <Seo />
    <PageHeader
      title={
        <>
          Hi there, I'm Niklas. <br /> A curious software developer who's trying
          to get a little better every day
        </>
      }
      description="I'm currently working as a Frontend developer at ComeOn Group. This is my personal website - a place for me to share my personal projects, thoughts and ideas."
    >
      <InternalLink href="/about">Learn more about me</InternalLink>
    </PageHeader>

    <section className="mb-20 flex flex-col md:px-4 2xl:mb-32">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Featured Project</h2>
      </div>

      <div className="px-2 lg:px-0">
        <FeaturedProjectCard
          link="/projects/emoji-picker"
          title="Emoji Picker ✨"
          description="Making it easy to bring more fun into your daily writing. This macOS app is made to make it simpler to add emojis to your texts."
          stack={['TypeScript', 'Electron', 'React']}
        />
      </div>
    </section>

    <PostList title="Latest posts" posts={posts}>
      <InternalLink href="/blog">All posts</InternalLink>
    </PostList>
  </Page>
);

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts
    .filter((post) => !post.archived)
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
