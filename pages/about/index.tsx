import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Page from 'components/page/page';
import PageHeader from 'components/page-header';
import TopTracks from 'components/top-tracks';
import { CustomSeo } from 'components/seo';

const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block',
    }}
    animate={{ rotate: 20 }}
    transition={{
      repeat: 3,
      repeatType: 'reverse',
      from: -5,
      duration: 0.5,
      ease: 'easeInOut',
      type: 'tween',
    }}
  >
    👋
  </motion.div>
);

const ABOUT_TITLE = 'About Me';

const About: NextPage = () => (
  <Page>
    <CustomSeo title={ABOUT_TITLE} />
    <PageHeader title={ABOUT_TITLE} />
    <article className="space-y-20 md:px-4 2xl:space-y-32">
      <section>
        <h2 className="mb-6 text-2xl font-bold">
          Hi there! <WavingHand />
        </h2>
        <p className="mb-4 text-base leading-7 text-zinc-800 dark:text-zinc-200">
          My name is Niklas, and I am currently working as a frontend developer
          at <span className="font-bold text-secondary">ComeOn Group</span>{' '}
          where me and my team are building a Sportsbook application. In my
          day-to-day work I write <b>React</b> components with <b>TypeScript</b>{' '}
          and <b>Redux</b>.
        </p>
        <p className="mb-4 text-base leading-7 text-zinc-800 dark:text-zinc-200">
          I am proud to be able to call my self a self-taught developer. In 2017
          I started out by learning basic web development while working a
          full-time job in a warehouse. I spent all of my free time reading,
          watching tutorials and building projects trying to soak up every
          single drop of knowledge possible.
        </p>
        <p className="text-base leading-7 text-zinc-800 dark:text-zinc-200">
          My geniune interest for web development is what has kept me focused,
          and to this day I strive to get a little better every day.
        </p>
      </section>

      <section>
        <h3 className="mb-6 text-xl font-bold">Experience</h3>
        <div>
          <h4 className="text-base font-normal">
            Frontend Developer @{' '}
            <span className="font-bold text-secondary">ComeOn Group</span>
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            May 2019 - present
          </p>
          <ul className="mt-4 list-disc space-y-4 px-4 lg:space-y-6 lg:px-0">
            <li className="marker:text-secondary">
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Leading initiative to implement Typescript and surrounding
                tooling into an already existing codebase shared by some 25
                developers by gradually refactoring features and components
              </p>
            </li>
            <li className="marker:text-secondary">
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Developing new backend features in Java and designing clear,
                developer friendly REST APIs
              </p>
            </li>
            <li className="marker:text-secondary">
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Closely working with designers to develop a brand new UI for the
                Sportsbook product by creating reusable, high quality components
                in React and Typescript
              </p>
            </li>
            <li className="marker:text-secondary">
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Increasing the Sportsbook application Web Vitals score by 20% by
                implementing UX best practices
              </p>
            </li>
            <li className="marker:text-secondary">
              <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Writing unit, integration and end-to-end tests with the Cypress
                and Jest frameworks to ensure code confidence and smooth
                releases
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>

    <section className="mt-20 md:px-4 2xl:mt-32">
      <TopTracks />
    </section>
  </Page>
);

export default About;
