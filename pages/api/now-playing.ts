import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from 'lib/spotify';
import { CurrentlyPlaying } from 'lib/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const playing = (await response.json()) as CurrentlyPlaying;

  if (playing.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = playing.is_playing;
  const title = playing.item.name;
  const artist = playing.item.artists.map((_artist) => _artist.name).join(', ');
  const album = playing.item.album.name;
  const albumImageUrl = playing.item.album.images[0].url;
  const songUrl = playing.item.external_urls.spotify;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
