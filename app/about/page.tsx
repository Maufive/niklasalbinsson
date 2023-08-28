import type { Metadata } from 'next';
import Page from 'components/page';
import TopTracks from 'components/top-tracks';
import { getTopTracks } from 'lib/spotify';

export const metadata: Metadata = {
  title: 'About',
  description: 'Developer with a passion for frontend learning about new tech.',
};

export default async function AboutPage() {
  const initialTracks = await getTopTracks({
    limit: '5',
    period: 'short_term',
  });

  return (
    <Page>
      <article className="space-y-20 md:px-4 2xl:space-y-32">
        <section className="prose prose-invert text-zinc-200 sm:prose-invert lg:prose-lg">
          <h1 className="font-serif font-bold">Hi there! 👋</h1>
          <p>
            My name is Niklas, and I am currently working as a developer at{' '}
            <span className="font-bold">ComeOn Group</span> where me and my team
            are building a Sportsbetting application. In my day-to-day work I
            work with <span className="font-bold">React</span>,{' '}
            <span className="font-bold">TypeScript</span> and{' '}
            <span className="font-bold">Java</span>.
          </p>
          <p>
            My journey began as a developer, but with time I became more and
            more interested with{' '}
            <span className="font-bold">user experience</span> and the way users
            interact with technology. I am an advocate for accessibility and
            inclusion. I believe that technology should be a bridge, not a
            barrier, and I strive to make my work{' '}
            <span className="font-bold">accessible</span> to everyone,
            regardless of their abilities or devices.
          </p>
          <p>
            What sets me apart is my constant pursuit of knowledge. I stay
            up-to-date with the latest trends and best practices in both
            frontend development and UX design, allowing me to offer innovative
            solutions that seamlessly marry aesthetics and functionality. I
            thrive in collaborative environments, valuing open communication and
            the exchange of ideas with designers, backend developers, and other
            stakeholders.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-2xl font-bold">Experience</h2>
          <div>
            <h4 className="text-base font-normal">
              Frontend Developer @{' '}
              <span className="font-bold">ComeOn Group</span>
            </h4>
            <p className="text-sm text-zinc-400">May 2019 - present</p>
            <ul className="marker mt-4 list-disc space-y-4 px-4 text-zinc-300 lg:space-y-6 lg:px-0">
              <li>
                <p className="text-base leading-7">
                  Leading initiative to implement Typescript and surrounding
                  tooling into an already existing codebase shared by some 25
                  developers by gradually refactoring features and components
                </p>
              </li>
              <li>
                <p className="text-base leading-7">
                  Creating a new frontend application for an in-house built CMS
                  powered by <span className="font-bold">NextJS</span> and
                  setting up{' '}
                  <span className="font-bold">continous integration</span>{' '}
                  pipelines to find bugs earlier, reduce human error and ensure
                  code quality.
                </p>
              </li>
              <li>
                <p className="text-base leading-7">
                  With my team building a new Sportsbook application with a
                  front-end from scratch and integrating live odds-feed from
                  third-parties via <span className="font-bold">Kafka</span> and{' '}
                  <span className="font-bold">websocket</span>
                </p>
              </li>
              <li>
                <p className="text-base leading-7">
                  Developing new backend features in Java and designing clear,
                  developer friendly{' '}
                  <span className="font-bold">REST APIs</span>
                </p>
              </li>
              <li>
                <p className="text-base leading-7">
                  Closely working with designers to develop a brand new UI
                  library for the developers by creating reusable, high quality
                  components in React, Typescript and Storybook
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
