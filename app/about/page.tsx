import type { Metadata } from 'next';
import Page from 'components/page';
import TopTracks from 'components/top-tracks';
import { getTopTracks } from 'lib/spotify';
import Link from 'next/link';

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
          <h3 className="font-serif font-bold">Hi there! 👋</h3>
          <p>
            My name is Niklas, and I am currently working as a frontend
            developer at{' '}
            <span className="font-bold text-secondary">ComeOn Group</span> where
            me and my team are building a Sportsbook application. In my
            day-to-day work I write <span className="font-bold">React</span>{' '}
            components with <span className="font-bold">TypeScript</span> and{' '}
            <span className="font-bold">Redux</span>.
          </p>
          <p>
            I am proud to be able to call my self a self-taught developer. In
            2017 I started out by learning basic web development while working a
            full-time job in a warehouse. I spent all of my free time reading,
            watching tutorials and building projects trying to soak up every
            single drop of knowledge possible. You can read the full story{' '}
            <Link href="/blog/hello-world">here.</Link>
          </p>
          <p>
            My geniune interest for web development is what has kept me focused,
            and to this day I strive to get a little better every day.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-bold">Experience</h2>
          <div>
            <h4 className="text-base font-normal">
              Frontend Developer @{' '}
              <span className="font-bold text-secondary">ComeOn Group</span>
            </h4>
            <p className="text-sm text-zinc-400">May 2019 - present</p>
            <ul className="mt-4 list-disc space-y-4 px-4 text-zinc-300 marker:text-secondary lg:space-y-6 lg:px-0">
              <li>
                <p className="text-base leading-7">
                  Leading initiative to implement Typescript and surrounding
                  tooling into an already existing codebase shared by some 25
                  developers by gradually refactoring features and components
                </p>
              </li>
              <li>
                <p className="text-base leading-7">
                  With my team building a new Sportsbook application with a
                  front-end from scratch and integrating live odds-feed from
                  third-parties via Kafka and websocket
                </p>
              </li>
              <li>
                <p className="text-base leading-7">
                  Developing new backend features in Java and designing clear,
                  developer friendly REST APIs
                </p>
              </li>
              <li>
                <p className="text-base leading-7">
                  Closely working with designers to develop a brand new UI
                  library for the developers by creating reusable, high quality
                  components in React, Typescript and Storybook
                </p>
              </li>
              <li>
                <p className="text-base leading-7">
                  Increasing the Sportsbook application Web Vitals score by 20%
                  by implementing UX best practices
                </p>
              </li>
            </ul>
          </div>
        </section>
      </article>

      <TopTracks initialTracks={initialTracks} />
    </Page>
  );
}
