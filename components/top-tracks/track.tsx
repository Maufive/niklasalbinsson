'use client';

import Image from 'next/image';
import { SimpleTrack as TrackType } from 'lib/types';

interface TrackProps extends TrackType {
  ranking: number;
}

const Track: React.FC<TrackProps> = ({
  ranking,
  songUrl,
  title,
  artist,
  images,
}) => (
  <li className="flex items-center">
    <p className="text-base font-bold text-zinc-400">{ranking}</p>
    <div className="relative mx-4 h-10 w-10 overflow-hidden rounded-md shadow-md">
      <Image
        alt="Album cover"
        layout="fill"
        src={images[2]?.url || images[1]?.url || images[0]?.url}
      />
    </div>
    <div className="flex flex-col pl-2">
      <a
        className="max-w-full text-ellipsis rounded-md text-base font-bold transition-colors hover:text-primary focus:text-primary md:max-w-md"
        href={songUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        {title}
      </a>
      <p className="max-w-full text-ellipsis text-base text-zinc-200 md:max-w-md">
        {artist}
      </p>
    </div>
  </li>
);

export default Track;
