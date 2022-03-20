import type { Post as PostType } from '.contentlayer/types';
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
    <h2 className="mb-8 text-2xl font-bold">{title}</h2>
    {posts.length > 0 ? (
      <ul>
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
