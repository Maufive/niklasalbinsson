/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from 'next/link';
import { formatDate } from 'utils/formatDate';
import type { Post as PostType } from 'contentlayer/generated';

const Post: React.FC<{ post: PostType }> = ({ post }) => (
  <li>
    <Link href={`/blog/${post.slug}`} passHref>
      <a className="flex h-full w-full transform cursor-pointer flex-col justify-between rounded-xl bg-zinc-900 p-6 transition-all hover:scale-[1.03] focus:scale-[1.03] hover:bg-zinc-800 xl:p-6">
        <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
        <p className="mb-2 text-base">{post.summary}</p>
        <p className="text-sm text-zinc-400">
          Published on{' '}
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>{' '}
          &middot; {post.readingTime.text}
        </p>
      </a>
    </Link>
  </li>
);

export default Post;
