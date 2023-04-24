/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from 'next/link';
import { formatDate } from 'utils/formatDate';
import type { Post as PostType } from 'contentlayer/generated';

const Post: React.FC<{ post: PostType }> = ({ post }) => (
  <li className="rounded-xl border border-zinc-50/10 shadow-md backdrop-blur-0">
    <Link
      href={`/blog/${post.slug}`}
      passHref
      className="flex h-full w-full transform cursor-pointer flex-col justify-between rounded-xl bg-zinc-900/80 p-6 backdrop-blur-3xl"
    >
      <h3 className="mb-2 font-serif text-xl font-bold text-zinc-50">
        {post.title}
      </h3>
      <p className="mb-2 text-base text-zinc-200">{post.summary}</p>
      <p className="text-sm text-zinc-400">
        Published on{' '}
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{' '}
        &middot; {post.readingTime.text}
      </p>
    </Link>
  </li>
);

export default Post;
