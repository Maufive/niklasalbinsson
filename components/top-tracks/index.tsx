import { useState } from 'react';
import useSWR from 'swr';
import fetcher from 'lib/fetcher';
import { TopTracks } from 'lib/types';
import Track from './track';

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

  console.log(data);

  return (
    <section className="mt-20">
      <h2 className="mb-2 text-xl font-bold">Top Tracks</h2>
      <p className="text-base">
        I love listening to all kinds of music. Here is a daily updated list of
        my favourite jams!
      </p>

      <div className="my-6 flex rounded-md bg-zinc-200 p-2 dark:bg-zinc-800 sm:w-fit">
        <label className="flex-1 text-sm" htmlFor="period">
          Top tracks for period:
        </label>
        <select
          className="ml-3 cursor-pointer appearance-none rounded-md bg-transparent text-sm font-bold text-secondary transition-colors hover:text-secondary-light md:w-auto"
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
      </div>

      <ul className="mt-4 list-decimal space-y-10">
        {data.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </ul>
    </section>
  );
};

export default Tracks;
