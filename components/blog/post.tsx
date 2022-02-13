/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Post as PostType } from '.contentlayer/types';
import Link from 'next/link';
import { formatDate } from 'utils/formatDate';
import styles from './post.module.scss';

const Post: React.FC<{ post: PostType }> = ({ post }) => (
  <li className={styles.blogPost}>
    <h3>
      <Link href={`/blog/${post.slug}`} passHref>
        {post.title}
      </Link>
    </h3>

    <p>{post.summary}</p>
    <small>
      Published on{' '}
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{' '}
      &middot; {post.readingTime.text}
    </small>
  </li>
);

export default Post;
