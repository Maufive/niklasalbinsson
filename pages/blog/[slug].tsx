import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import { Post } from '.contentlayer/types';
import { allPosts } from '.contentlayer/data';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import PageHeader from 'components/page-header';
import { formatDate } from 'utils/formatDate';
import Page from 'components/page/page';
import styles from './post.module.scss';

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  const formattedPublishDate = formatDate(post.publishedAt);

  return (
    <Page>
      <article className={styles.article}>
        <PageHeader title={post.title} compact>
          <p className={styles.meta}>
            Published on{' '}
            <time dateTime={post.publishedAt}>{formattedPublishDate}</time>
            <span>&middot;</span> {post.readingTime.text}
            {/* <HitCounter slug={post.slug} /> */}
          </p>
        </PageHeader>
        <Component />
      </article>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allPosts.find((p) => p.slug === params?.slug);
  //   const related = allPosts
  //     /* remove current post */
  //     .filter((p) => p.slug !== params?.slug)
  //     /* Find other posts where tags are matching */
  //     // .filter((p) => p.tags?.some((tag) => post.tags?.includes(tag)))
  //     /* return the first three */
  //     .filter((_, i) => i < 3)
  //     /* only return what's needed to render the list */
  //     .map((p) =>
  //       pick(p, [
  //         'slug',
  //         'title',
  //         'summary',
  //         'publishedAt',
  //         'image',
  //         'readingTime',
  //       ])
  //     );

  return {
    props: {
      post,
      //   related,
    },
  };
};

export default PostPage;
