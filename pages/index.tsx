import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { pick } from '@contentlayer/client';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import PageHeader from 'components/page-header';
import Page from 'components/page/page';
import { ChevronRight } from 'components/icons';
import styles from 'components/buttons/buttons.module.scss';
import BlogPostList from 'components/blog/post-list';

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
      <Link href="/about" passHref>
        <a className={styles.buttonLink}>
          Learn more about me
          <ChevronRight />
        </a>
      </Link>
    </PageHeader>

    <BlogPostList title="Latest posts" posts={posts}>
      <Link href="/blog" passHref>
        <a className={styles.buttonLink}>
          All posts
          <ChevronRight />
        </a>
      </Link>
    </BlogPostList>
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
