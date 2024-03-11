import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import Page from "components/page";
import { Card } from "components/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my thoughts on software development, animations, and more.",
};

export default async function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  return (
    <Page>
      <div className="flex flex-col gap-10 xl:gap-14">
        <div>
          <h2 className="font-serif text-4xl mb-3">All posts</h2>
          <p className="text-xl">
            My personal projects that I have worked on in my free time. They may
            vary in quality and usefulness, but I am proud of them all in their
            own way.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {posts.map((project) => (
            <Card
              title={project.title}
              description={project.summary}
              href={`/blog/${project.slug}`}
              publishedAt={project.publishedAt}
              key={project._id}
            />
          ))}
        </ul>
      </div>
    </Page>
  );
}
