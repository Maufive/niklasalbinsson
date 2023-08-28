import type { Post as PostType } from 'contentlayer/generated';
import Post from './post';

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
    <h2 className="mb-6 font-serif text-2xl font-bold lg:px-6">{title}</h2>
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
