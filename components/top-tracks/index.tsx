"use client";

import { useState } from "react";
import { SimpleTrack } from "lib/types";
import { getTopTracks } from "lib/spotify";
import Track from "./track";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";

const options = [
  { value: "short_term", label: "Last month" },
  { value: "medium_term", label: "Last 6 months" },
  { value: "long_term", label: "All time" },
];

type Props = {
  initialTracks: SimpleTrack[];
};

const Tracks: React.FC<Props> = ({ initialTracks }) => {
  const [period, setPeriod] = useState(options[0]);

  const [topTracks, setTopTracks] = useState<SimpleTrack[]>(initialTracks);

  const onChangePeriod = async (period: string) => {
    const selectedOption = options.find((option) => option.value === period);

    if (!selectedOption) {
      return;
    }

    const newTracks = await getTopTracks({
      limit: "5",
      period: selectedOption.value,
    });
    setPeriod(selectedOption);
    setTopTracks(newTracks);
  };

  return (
    <section className="mt-20 2xl:mt-32">
      <h2 className="mb-2 font-serif text-2xl font-bold">Top Tracks</h2>
      <p className="text-base text-muted-foreground">
        I love listening to all kinds of music. Here is a daily updated list of
        my favourite jams!
      </p>

      <div className="my-4 flex flex-col rounded-md sm:w-fit">
        <Select
          value={period.label}
          onValueChange={(value) => onChangePeriod(value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Top tracks for period:">
              {period.label}
              </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
