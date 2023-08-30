import Page from 'components/page';
import BlogPostList from 'components/blog-post-list';
import { FeaturedProjectCard } from 'components/featured-project-card';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

export default function Home() {
  const posts = allPosts
    .filter((post) => !post.archived)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3);

  return (
    <Page>
      <div className="prose prose-invert mb-12 sm:prose-invert lg:prose-lg lg:mb-24 lg:px-6 2xl:mb-32">
        <h1 className="font-serif text-3xl font-bold">Hi there, I'm Niklas</h1>
        <p className="text-zinc-300">
          I am a developer from Umeå and I like to create great user
          experiences. This is my personal playground where I get to try out new
          tech, share my knowledge and host my side projects.
        </p>
      </div>

      <div className="mb-12 flex flex-col lg:mb-24 2xl:mb-32">
        <h2 className="mb-6 font-serif text-3xl font-bold lg:px-6">
          Featured Project
        </h2>

        <FeaturedProjectCard
          link="/projects/bookmarked"
          title="Bookmarked"
          description="Save and share bookmarks between devices and browsers"
          stack={['TypeScript', 'React', 'Next 13', 'Server Components']}
        />
      </div>

      <BlogPostList title="Latest posts" posts={posts}>
        <Link
          className="group flex items-center underline transition-colors hover:text-primary lg:px-6"
          href="/blog"
        >
          All posts
          <svg
            className="-mr-1 ml-2 mt-0.5 h-3 w-3 stroke-1 no-underline"
            fill="none"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <path
              className="translate-x-[-2px] stroke-primary opacity-0 transition group-hover:translate-x-[0px] group-hover:opacity-100"
              d="M0 5h7"
            />
            <path
              className="stroke-zinc-300 transition group-hover:translate-x-[3px] group-hover:stroke-primary"
              d="M1 1l4 4-4 4"
            />
          </svg>
        </Link>
      </BlogPostList>
    </Page>
  );
}
