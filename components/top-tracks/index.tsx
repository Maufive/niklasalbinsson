import { useState } from 'react';
import useSWR from 'swr';
import fetcher from 'lib/fetcher';
import { TopTracks } from 'lib/types';
import ListBox, { ListBoxOption } from 'components/listbox';
import Track from './track';

const options = [
  { value: 'short_term', label: 'Last month' },
  { value: 'medium_term', label: 'Last 6 months' },
  { value: 'long_term', label: 'All time' },
];

const Tracks: React.FC = () => {
  const [period, setPeriod] = useState<string | undefined>('short_term');
  const [periodLabel, setPeriodLabel] = useState<string | undefined>(
    'Last month'
  );
  const { data } = useSWR<TopTracks>(
    `/api/top-tracks?limit=5&period=${period || 'short_term'}`,
    fetcher
  );

  const onChangePeriod = (value: string) => {
    const selectedOption = options.find(
      (option: ListBoxOption) => option.label === value
    );
    setPeriod(selectedOption?.value);
    setPeriodLabel(selectedOption?.label);
  };

  return (
    <>
      <h2 className="mb-2 text-xl font-bold">Top Tracks</h2>
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
        {data?.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </ul>
    </>
  );
};

export default Tracks;
