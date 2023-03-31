/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line import/no-unresolved
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import PageHeader from 'components/page-header';
import { formatDate } from 'utils/formatDate';
import Page from 'components/page/page';
import { CustomSeo } from 'components/seo';
import MDX_COMPONENTS from 'components/mdx';
import { BreadcrumbLink } from 'components/navigation/breadcrumb-link';
import { allPosts, type Post } from 'contentlayer/generated';

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  const formattedPublishDate = formatDate(post.publishedAt);

  const BLOG_TITLE = `Niklas Albinsson - ${post.title}`;
  const BLOG_DESCRIPTION = `${post.summary}`;

  return (
    <Page>
      <CustomSeo title={BLOG_TITLE} description={BLOG_DESCRIPTION} />
      <BreadcrumbLink href="/blog">All posts</BreadcrumbLink>
      <PageHeader title={post.title} compact>
        <p>
          Published on{' '}
          <time dateTime={post.publishedAt}>{formattedPublishDate}</time>
          <span>&middot;</span> {post.readingTime.text}
        </p>
      </PageHeader>
      <article className="prose prose-invert mt-10 sm:prose-invert lg:prose-lg sm:px-4 2xl:my-20">
        <Component components={MDX_COMPONENTS} />
      </article>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params) {
    return {
      props: {
        post: allPosts[0],
      },
    };
  }

  const post = allPosts.find((p) => p.slug === params.slug);
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
