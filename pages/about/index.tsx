import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Page from 'components/page/page';
import PageHeader from 'components/page-header';
import Profile from 'components/profile-image';
import { ChevronRight, LocationIcon } from 'components/icons';
import TopTracks from 'components/top-tracks';
import styles from './about.module.scss';

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

const About: NextPage = () => (
  <Page>
    <PageHeader title="About" />
    <article className={styles.about}>
      <section className={styles.bio}>
        <Profile />
        <div className={styles.bioDetailWrapper}>
          <div className={styles.bioDetails}>
            <h3>Niklas Albinsson</h3>
            <p>Software developer</p>
            <div className={styles.location}>
              <LocationIcon />
              <p>Umeå, Sweden</p>
            </div>
          </div>
          <motion.a
            href="mailto:albinssonniklas@gmail.com"
            target="__blank"
            whileTap={{ scale: 0.95 }}
            className={styles.buttonLinkPrimary}
          >
            Get in touch
          </motion.a>
          <motion.a
            href="https://docs.google.com/document/d/1WBVROPLHXxYf4Or0rqhvglPsU91xOpuWnexmpA4gZOI/"
            target="__blank"
            whileTap={{ scale: 0.95 }}
            className={styles.buttonLinkSecondary}
          >
            View Resume
            <ChevronRight />
          </motion.a>
        </div>
      </section>
      <section className={styles.description}>
        <h3>
          Hi there! <WavingHand />
        </h3>
        <p>
          My name is Niklas, and I am currently working as a frontend developer
          at ComeOn Group. In my day-to-day work I use <b>React</b> with{' '}
          <b>TypeScript</b> and <b>Redux</b>.
        </p>
        <p>
          I am proud to be able to call my self a self-taught developer. In 2017
          I started out by learning basic web development while working a
          full-time job in a warehouse. I spent all of my free time reading,
          watching tutorials and building projects trying to soak up every
          single drop of knowledge possible.
        </p>
        <p>
          My geniune interest for web development is what kept me focused, and
          to this day I strive to get a <i>little</i> better every day.
        </p>
      </section>
    </article>
    <article className={styles.experience}>
      <h2>Experience</h2>
      <section className={styles.job}>
        <h4 className={styles.jobTitle}>
          Frontend Developer @{' '}
          <span className={styles.companyName}>ComeOn Group</span>
        </h4>
        <p className={styles.jobSubtitle}>May 2019 - present</p>
        <ul className={styles.experienceList}>
          <li>
            <p>
              Leading initiative to implement TypeScript including tooling into
              an already existing codebase by gradually refactoring components
              and configurations.
            </p>
          </li>
          <li>
            <p>
              Heavily contributing to the in-house UI component library creating
              reusable React components used by all frontend developers in the
              organization.
            </p>
          </li>
          <li>
            <p>
              Involved in developing a brand new web product in React to allow
              casino players to play games together with favorite online
              live-streamers.
            </p>
          </li>
          <li>
            <p>
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
