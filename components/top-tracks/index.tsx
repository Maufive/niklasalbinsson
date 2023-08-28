'use client';

import { useState } from 'react';
import { SimpleTrack } from 'lib/types';
import ListBox, { ListBoxOption } from 'components/listbox';
import { getTopTracks } from 'lib/spotify';
import Track from './track';

const options = [
  { value: 'short_term', label: 'Last month' },
  { value: 'medium_term', label: 'Last 6 months' },
  { value: 'long_term', label: 'All time' },
];

type Props = {
  initialTracks: SimpleTrack[];
};

const Tracks: React.FC<Props> = ({ initialTracks }) => {
  const [periodLabel, setPeriodLabel] = useState<string | undefined>(
    'Last month'
  );

  const [topTracks, setTopTracks] = useState<SimpleTrack[]>(initialTracks);

  const onChangePeriod = async (value: string) => {
    const selectedOption = options.find(
      (option: ListBoxOption) => option.label === value
    );

    if (!selectedOption) {
      return;
    }

    const newTracks = await getTopTracks({
      limit: '5',
      period: selectedOption.value,
    });
    setPeriodLabel(selectedOption?.label);
    setTopTracks(newTracks);
  };

  return (
    <section className="mt-20 2xl:mt-32">
      <h2 className="mb-2 font-serif text-2xl font-bold">Top Tracks</h2>
      <p className="text-base text-zinc-300">
        I love listening to all kinds of music. Here is a daily updated list of
        my favourite jams!
      </p>

      <div className="my-4 flex flex-col rounded-md sm:w-fit">
        <ListBox
          options={options}
          onChange={onChangePeriod}
          selectedValue={periodLabel}
          title="Top tracks for period:"
        />
      </div>

      <ul className="mt-4 list-decimal space-y-10">
        {topTracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </ul>
    </section>
  );
};

export default Tracks;
