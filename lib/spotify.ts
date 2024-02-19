import {
  GetRefreshedAccessTokenResponse,
  SimpleTrack,
  TopTracksOptions,
  Track,
} from './types';

type ResponseJSON = {
  items?: Track[];
};

const CLIENT_ID = process.env.NEXT_PUBLIC_ENV_SPOTIFY_CLIENT_ID || '';
const CLIENT_SECRET = process.env.NEXT_PUBLIC_ENV_SPOTIFY_CLIENT_SECRET || '';
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_ENV_SPOTIFY_REFRESH_TOKEN || '';

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getAccessToken =
  async (): Promise<GetRefreshedAccessTokenResponse> => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
      next: { revalidate: 600 },
    });

    return response.json() as Promise<GetRefreshedAccessTokenResponse>;
  };

export const getTopTracks = async (options: TopTracksOptions) => {
  const { access_token } = await getAccessToken();

  const response = await fetch(
    `${TOP_TRACKS_ENDPOINT}?limit=${options.limit}&time_range=${options.period}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 600 },
    }
  );

  const data = (await response.json()) as unknown as ResponseJSON;

  if (!data || !data.items) {
    console.log('No items from response. Status: ', response.status);
    console.log(data.items);
    return [];
  }

  return data.items?.map<SimpleTrack>((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    images: track.album.images,
  }));
};
export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
