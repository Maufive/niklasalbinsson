import { useState } from 'react';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { TopTracks } from 'lib/types';
import Track from './track';
import styles from './top-tracks.module.scss';

const Tracks: React.FC = () => {
  const [period, setPeriod] = useState<string>('short_term');
  const { data } = useSWR<TopTracks>(
    `/api/top-tracks?limit=5&period=${period}`,
    fetcher
  );

  const onChangePeriod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriod(event.currentTarget.value);
  };

  if (!data) {
    return null;
  }

  return (
    <section className={styles.tracks}>
      <h2>Top Tracks</h2>
      <p>
        I love listening to all kinds of music. Here is a daily updated list of
        my favourite jams!
      </p>

      <div className={styles.selectWrapper}>
        <label htmlFor="period">
          Top tracks for period:
          <select
            className={styles.selectPeriod}
            name="period"
            id="period"
            onChange={onChangePeriod}
            value={period}
            defaultValue="medium_term"
          >
            <option value="short_term">Last month</option>
            <option value="medium_term">Last 6 months</option>
            <option value="long_term">All time</option>
          </select>
        </label>
      </div>

      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </section>
  );
};

export default Tracks;
