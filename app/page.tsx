import Page from "components/page";
import { Card } from "components/card";
import { FeaturedProjectCard } from "components/featured-project-card";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
  const posts = allPosts
    .filter((post) => !post.archived)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )
    .slice(0, 3);

  return (
    <Page>
      <div>
        <h1 className="font-serif text-4xl mb-4">Hey, I'm Niklas</h1>
        <p className="prose prose-invert sm:prose-invert lg:prose-lg">
          I am a software developer from Umeå and this is my personal website
          where I get to play with new technologies and document my thoughts and
          projects. I am currently working as a full stack developer at ComeOn
          Group.
        </p>
      </div>

      <div className="flex flex-col gap-4 xl:gap-6">
        <h2 className="font-serif text-2xl">Recent Project</h2>

        <FeaturedProjectCard
          link="/projects/bookmarked"
          title="Bookmarked"
          description="Save and share bookmarks between devices and browsers"
          stack={["TypeScript", "React", "Next 13", "Tailwind", "Planetscale"]}
        />
      </div>

      <div className="flex flex-col gap-4 xl:gap-6">
        <h2 className="font-serif text-2xl">Latest posts</h2>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <Card
              title={post.title}
              description={post.summary}
              href={`/blog/${post.slug}`}
              publishedAt={post.publishedAt}
              key={post._id}
            />
          ))}
        </ul>
        <Link
          className="group flex items-center underline transition-colors hover:text-primary "
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
      </div>
    </Page>
  );
}
