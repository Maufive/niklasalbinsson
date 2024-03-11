import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import Page from "components/page";
import { Card } from "components/card";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of hand picked personal projects that I have worked on",
};

export default async function BlogPage() {
  const projects = allProjects.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  return (
    <Page>
      <div className="flex flex-col gap-10 xl:gap-14">
        <div>
          <h1 className="font-serif text-4xl mb-3">My Projects</h1>
          <p className="text-xl">
            My personal projects that I have worked on in my free time. They may
            vary in quality and usefulness, but I am proud of them all in their
            own way.
          </p>
        </div>
      </div>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <Card
            title={project.title}
            description={project.summary}
            href={`/projects/${project.slug}`}
            publishedAt={project.publishedAt}
            key={project._id}
          />
        ))}
      </ul>
    </Page>
  );
}
