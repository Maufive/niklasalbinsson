import type { Post as PostType } from "contentlayer/generated";
import Link from "next/link";
import { formatDate } from "utils/format-date";

const Post = ({ post }: { post: PostType }) => (
  <li className="rounded-xl border border-border shadow-md backdrop-blur-0">
    <Link
      title={post.title}
      href={`/blog/${post.slug}`}
      passHref
      className="flex h-full w-full transform cursor-pointer flex-col justify-between rounded-xl bg-background/60 p-6 backdrop-blur-3xl"
    >
      <h3 className="mb-2 text-xl font-semibold text-card-foreground">
        {post.title}
      </h3>
      <p className="mb-6 text-base text-card-muted">{post.summary}</p>
      <p className="text-sm text-card-muted">
        Published on{" "}
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{" "}
        &middot; {post.readingTime.text}
      </p>
    </Link>
  </li>
);

type BlogPostListProps = {
  title: string;
  posts: PostType[];
  className?: string;
  children?: React.ReactNode;
};

const BlogPostList = ({
  title,
  posts,
  children,
  className,
}: BlogPostListProps) => (
  <section className={className}>
    <h2 className="font-serif text-3xl font-bold ">{title}</h2>
    {posts.length > 0 ? (
      <ul className="flex flex-col gap-8">
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
