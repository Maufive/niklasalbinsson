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
      <div>
        <h1 className="font-serif text-4xl mb-8">Hi there! 👋</h1>
        <section className="prose prose-invert text-foreground sm:prose-invert lg:prose-lg">
          <p>
            I'm Niklas and I'm a software developer from Umeå, Sweden. I have a
            particular interest for the frontend web and fun user interactions.
            In my free time I play a lot of video games, I cook and try to spend
            some time outdoors when the weather allows it (Long and cold winters
            up here in Umeå).
          </p>
          <p>
            I'm currently working as a full stack developer at ComeOn Group,
            where I get to work primarily with Typescript, React and Java. I am
            part of a team where we build a sports betting application and I get
            to work with a lot of fun and challenging problems.
          </p>
          <p>
            This website is my personal playground where I will sometimes post
            about projects I've worked on or write about stuff I've learned. I
            see it as documenting my career and personal development to have
            something to look back on in the future.
          </p>
        </section>
      </div>

      <TopTracks initialTracks={initialTracks} />
    </Page>
  );
}
