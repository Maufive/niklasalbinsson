/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Post as PostType } from '.contentlayer/types';
import Link from 'next/link';
import { formatDate } from 'utils/formatDate';

const Post: React.FC<{ post: PostType }> = ({ post }) => (
  <li>
    <Link href={`/blog/${post.slug}`} passHref>
      <a className="block w-full transform cursor-pointer rounded-xl bg-transparent from-transparent to-transparent p-1 transition-all hover:scale-[1.03] hover:bg-gradient-to-r hover:from-[#D8B4FE] hover:to-[#818CF8] focus:scale-[1.03] focus:bg-gradient-to-r focus:from-[#D8B4FE] focus:to-[#818CF8]">
        <div className="flex h-full flex-col justify-between rounded-lg bg-zinc-100 p-2 transition-colors dark:bg-zinc-900 xl:p-6">
          <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
          <p className="mb-2 text-base">{post.summary}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Published on{' '}
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>{' '}
            &middot; {post.readingTime.text}
          </p>
        </div>
      </a>
    </Link>
  </li>
);

export default Post;
