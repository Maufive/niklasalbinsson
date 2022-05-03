import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { pick } from '@contentlayer/client';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import PageHeader from 'components/page-header';
import Page from 'components/page/page';
import { PostList } from 'components/blog';
import { InternalLink } from 'components/links';
import Seo from 'components/seo';

const ListItem: React.FC = ({ children }) => (
  <li className="flex items-center  text-xs font-bold text-zinc-600 transition duration-200 group-hover:text-zinc-800 dark:text-zinc-300 dark:group-hover:text-zinc-300 md:text-sm">
    <ChevronRightIcon className="mr-1 h-4 w-4 text-secondary" />
    {children}
  </li>
);

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => (
  <Page>
    <Seo />
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

    <section className="mb-20 flex flex-col md:px-4 2xl:mb-32">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Featured Project</h2>
      </div>

      <Link passHref href="/projects/veckohandla">
        <a className="group relative block transition duration-1000 focus:duration-200 md:hover:scale-[1.02] md:hover:duration-200 md:focus:scale-[1.02]">
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 group-focus:opacity-100 group-focus:duration-200" />
          <div className="w-full transform cursor-pointer rounded-xl bg-transparent p-1">
            <div className="flex h-full flex-col justify-between rounded-xl bg-zinc-100 p-6 transition-colors dark:bg-zinc-900">
              <h3 className="mb-2 text-xl font-semibold text-zinc-700 transition duration-200 group-hover:text-zinc-900 group-focus:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-zinc-50 dark:group-focus:text-zinc-50 xl:mb-4">
                Veckohandla
              </h3>
              <p className="text-base text-zinc-700 transition duration-200 group-hover:text-zinc-700 group-focus:text-zinc-700 dark:text-zinc-300 dark:group-hover:text-zinc-200 dark:group-focus:text-zinc-200">
                An app built to try and make weekly grocery shopping easy.
                Create a ready-to-go shopping list of groceries in just a matter
                of seconds!
              </p>
              <div className="mt-6">
                <ul className="flex list-none flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6">
                  <ListItem>React</ListItem>
                  <ListItem>TypeScript</ListItem>
                  <ListItem>Redux Toolkit</ListItem>
                </ul>
              </div>
            </div>
          </div>
        </a>
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
