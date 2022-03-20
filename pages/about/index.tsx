import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Page from 'components/page/page';
import PageHeader from 'components/page-header';
import TopTracks from 'components/top-tracks';
import { CustomSeo } from 'components/seo';

// <section className="">
//         <Profile />
//         <div className={styles.bioDetailWrapper}>
//           <div className={styles.bioDetails}>
//             <h3>Niklas Albinsson</h3>
//             <p>Software developer</p>
//             <div className={styles.location}>
//               <LocationIcon />
//               <p>Umeå, Sweden</p>
//             </div>
//           </div>
//           <motion.a
//             href="mailto:albinssonniklas@gmail.com"
//             target="__blank"
//             whileTap={{ scale: 0.95 }}
//             className={styles.buttonLinkPrimary}
//           >
//             Get in touch
//           </motion.a>
//           <motion.a
//             href="https://docs.google.com/document/d/1WBVROPLHXxYf4Or0rqhvglPsU91xOpuWnexmpA4gZOI/"
//             target="__blank"
//             whileTap={{ scale: 0.95 }}
//             className={styles.buttonLinkSecondary}
//           >
//             View Resume
//             <ChevronRight />
//           </motion.a>
//         </div>
//       </section>

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
    <article className="">
      <section className="mb-10">
        <h2 className="mb-6 text-xl font-bold">
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
          My geniune interest for web development is what kept me focused, and
          to this day I strive to get a little better every day.
        </p>
      </section>
    </article>
    <article className="">
      <h2 className="mb-6 text-xl font-bold">Experience</h2>
      <section className="">
        <h4 className="text-base font-normal">
          Frontend Developer @{' '}
          <span className="font-bold text-secondary">ComeOn Group</span>
        </h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          May 2019 - present
        </p>
        <ul className="mt-4 list-disc space-y-4">
          <li className="marker:text-secondary">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Leading initiative to implement TypeScript including tooling into
              an already existing codebase by gradually refactoring components
              and configurations.
            </p>
          </li>
          <li className="marker:text-secondary">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Contributing to the in-house UI component library creating
              reusable React components used by all frontend developers in the
              organization.
            </p>
          </li>
          <li className="marker:text-secondary">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Involved in developing a brand new web product in modern React to
              allow casino players to play games together with favorite online
              live-streamers.
            </p>
          </li>
          <li className="marker:text-secondary">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Implementing a new third-provider for the Sportsbook product
              together with my team of developers to secure two key markets in
              Germany and India.
            </p>
          </li>
        </ul>
      </section>
    </article>

    <TopTracks />
  </Page>
);

export default About;
