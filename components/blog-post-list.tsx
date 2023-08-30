/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Post as PostType } from 'contentlayer/generated';
import Link from 'next/link';
import { formatDate } from 'utils/formatDate';

const Post: React.FC<{ post: PostType }> = ({ post }) => (
  <li className="rounded-xl border border-zinc-50/10 shadow-md backdrop-blur-0 transition-colors hover:border-primary-dark">
    <Link
      title={post.title}
      href={`/blog/${post.slug}`}
      passHref
      className="flex h-full w-full transform cursor-pointer flex-col justify-between rounded-xl bg-zinc-900/80 p-6 backdrop-blur-3xl"
    >
      <h3 className="mb-2 text-xl font-semibold text-zinc-200">{post.title}</h3>
      <p className="mb-6 text-base text-zinc-400">{post.summary}</p>
      <p className="text-sm text-zinc-400">
        Published on{' '}
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{' '}
        &middot; {post.readingTime.text}
      </p>
    </Link>
  </li>
);

type BlogPostListProps = {
  title: string;
  posts: PostType[];
  className?: string;
};

const BlogPostList: React.FC<BlogPostListProps> = ({
  title,
  posts,
  children,
  className,
}) => (
  <section className={className}>
    <h2 className="mb-6 font-serif text-3xl font-bold lg:px-6">{title}</h2>
    {posts.length > 0 ? (
      <ul className="mb-8 space-y-8">
        {posts.map((post) => (
          <Post post={post} key={post.slug} />
        ))}
      </ul>
    ) : (
      <h4>No posts found...</h4>
    )}
    {children}
  </section>
);

export default BlogPostList;
