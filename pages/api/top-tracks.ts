import type { NextApiRequest, NextApiResponse } from 'next';
import { getTopTracks } from 'lib/spotify';
import { Track } from 'lib/types';

type ResponseJSON = {
  items: Track[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { limit, period } = req.query;

  if (!limit || !period) {
    return;
  }

  const response = await getTopTracks({ limit, period });
  const { items } = (await response.json()) as ResponseJSON;

  const tracks = items.map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    images: track.album.images,
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ tracks });
}
