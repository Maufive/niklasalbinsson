/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Post as PostType } from '.contentlayer/types';
import Link from 'next/link';
import { formatDate } from 'utils/formatDate';

const Post: React.FC<{ post: PostType }> = ({ post }) => (
  <Link href={`/blog/${post.slug}`} passHref>
    <li className="mb-6 cursor-pointer rounded-md p-4 shadow-transparent transition-all hover:scale-105 hover:bg-zinc-50 hover:shadow-lg hover:dark:bg-zinc-800">
      <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
      <p className="mb-2 text-base">{post.summary}</p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Published on{' '}
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{' '}
        &middot; {post.readingTime.text}
      </p>
    </li>
  </Link>
);

export default Post;
