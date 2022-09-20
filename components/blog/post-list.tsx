import type { Post as PostType } from 'contentlayer/generated';
import Post from './post';

type BlogPostListProps = {
  title: string;
  posts: PostType[];
};

const BlogPostList: React.FC<BlogPostListProps> = ({
  title,
  posts,
  children,
}) => (
  <section>
    <h2 className="mb-6 text-2xl font-bold">{title}</h2>
    {posts.length > 0 ? (
      <ul className="mb-6 space-y-4">
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
