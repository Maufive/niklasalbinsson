import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { pick } from '@contentlayer/client';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import PageHeader from 'components/page-header';
import Page from 'components/page/page';
import { PostList } from 'components/blog';
import { InternalLink } from 'components/links';

const ListItem: React.FC = ({ children }) => (
  <li className="mr-6">
    <span className="text-xs font-bold text-zinc-100">✨ {children}</span>
  </li>
);

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

    <section className="mb-20 flex flex-col 2xl:mb-32">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Featured Project</h2>
      </div>

      <Link passHref href="/projects/veckohandla">
        <div className="w-full transform cursor-pointer rounded-xl bg-transparent bg-gradient-to-r from-[#D8B4FE] from-transparent to-[#818CF8] to-transparent p-1 transition-all hover:scale-[1.03]">
          <div className="flex h-full flex-col justify-between rounded-lg bg-zinc-100 p-6 transition-colors dark:bg-zinc-900">
            <h3 className="mb-2 text-xl font-semibold xl:mb-4">Veckohandla</h3>
            <p className="text-base text-zinc-700 dark:text-zinc-300">
              An app built to try and make weekly grocery shopping easy. Create
              a ready-to-go shopping list of groceries in just a matter of
              seconds!
            </p>
            <div className="mt-6">
              <ul className="flex list-none flex-wrap items-center">
                <ListItem>React</ListItem>
                <ListItem>TypeScript</ListItem>
                <ListItem>Redux Toolkit</ListItem>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </section>

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
