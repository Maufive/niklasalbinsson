import type { Metadata } from "next";
import Page from "components/page";
import TopTracks from "components/top-tracks";
import { getTopTracks } from "lib/spotify";

export const metadata: Metadata = {
  title: "About",
  description: "Developer with a passion for frontend learning about new tech.",
};

export default async function AboutPage() {
  const initialTracks = await getTopTracks({
    limit: "5",
    period: "short_term",
  });

  return (
    <Page>
      <article className="space-y-20 md:px-4 2xl:space-y-32">
        <section className="prose prose-invert text-foreground sm:prose-invert lg:prose-lg">
          <h1 className="font-serif font-bold">Hi there! 👋</h1>
          <p>
            I'm Niklas, a curious software developer based in Umeå, Sweden.
            With over 4 years of experience, Ive been on a journey of crafting
            modern web applications and creating user-friendly interfaces that
            are enjoyed by tens of thousands of users each month.
          </p>
          <p>
            One of my proudest accomplishments was leading a project to
            introduce Typescript into a collaborative codebase, where we boosted
            scalability, improved the developer experience, and elevated code
            quality. It was like giving our codebase a supercharge!
          </p>
          <p>
            At ComeOn Group, I am part of a fantastic team that built a
            top-notch sports betting application from the ground up, saving the
            company millions by transitioning from a third-party solution. Our
            hard work paid off, resulting in a more stable and competitive
            product.
          </p>
        </section>

        <section className="prose prose-invert text-foreground sm:prose-invert lg:prose-lg">
          <h2 className="font-serif text-foreground">Experience</h2>
          <div>
            <h4>
              Frontend Developer @{" "}
              <span className="font-bold">ComeOn Group</span>
            </h4>
            <p className="text-sm text-muted-foreground">May 2019 - present</p>
            <ul className="marker list-disc space-y-4 px-4 text-foreground lg:space-y-6 lg:px-0">
              <li>
                <p>
                  Led an initiative to implement Typescript into a collaborative
                  codebase, resulting in significant improvements in
                  scalability, developer experience, and code quality. This
                  initiative notably reduced the occurrence of critical bugs,
                  and substantial increase in overall product stability and it
                  played a pivotal role in ensuring the quality of our sports
                  betting application.
                </p>
              </li>
              <li>
                <p>
                  I collaborated closely with my team of developers to launch a
                  large-scale sports betting application running, resulting in
                  notable cost savings for the company. This accomplishment was
                  pivotal as it marked our shift from a third-party application
                  to our proprietary in-house solution. Our collaboration
                  enabled us to have increased control over the application's
                  features and performance, leading to a more robust and
                  competitive product.
                </p>
              </li>
              <li>
                <p>
                  Designed, developed, and implemented an in-house CMS
                  application utilizing Java Spring Boot for the backend, MySQL
                  for the database, and Next.js for the frontend. Implemented
                  modern CI/CD pipelines using Jenkins and GitLab for seamless
                  integration and deployment. Orchestrated deployment on Docker
                  and Kubernetes within the GCP cloud platform, optimizing
                  scalability, reliability, and performance.
                </p>
              </li>
              <li>
                <p>
                  Worked on building a reusable component library in React,
                  Typescript and Storybook ensuring consistent styling and APIs
                  shared across all frontend teams across the organization. By
                  providing this essential resource, developers were able to
                  concentrate their efforts on feature development, resulting in
                  increased efficiency and accelerated product delivery
                </p>
              </li>
              <li>
                <p>
                  Increasing the sports betting application web vitals score by
                  20% by implementing best practices resulting in a better user
                  experience and improved SEO rankings
                </p>
              </li>
            </ul>
          </div>
        </section>
        <TopTracks initialTracks={initialTracks} />
      </article>
    </Page>
  );
}
