type Followers = {
  href: string | null;
  total: number;
};

type Restrictions = {
  reason: string;
};

type ExternalURL = {
  [key: string]: string;
};

export type SpotifyImage = {
  height: number | null;
  url: string;
  width: number | null;
};

type Context = {
  uri: string;
  href: string | null;
  external_urls: ExternalURL | null;
  type: "album" | "artist" | "playlist";
};

type SimplifiedArtist = {
  external_urls: ExternalURL;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
};

type SimplifiedAlbum = {
  album_group?: "album" | "single" | "compilation" | "appears_on";
  album_type: "album" | "ALBUM" | "single" | "SINGLE" | "compilation" | "COMPILATION";
  artists: SimplifiedArtist[];
  available_markets?: string[];
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: Restrictions;
  total_tracks: number;
  type: "album";
  uri: string;
};

// type SimplifiedShow = {
//   available_markets: string[];
//   description: string;
//   explicit: boolean;
//   external_urls: ExternalURL;
//   href: string;
//   id: string;
//   images: SpotifyImage[];
//   is_externally_hosted: boolean | null;
//   languages: string[];
//   media_type: string;
//   name: string;
//   publisher: string;
//   type: "show";
//   uri: string;
// };

// type Episode = {
//   audio_preview_url: string | null;
//   description: string;
//   duration_ms: number;
//   explicit: boolean;
//   external_urls: ExternalURL;
//   href: string;
//   id: string;
//   images: SpotifyImage[];
//   is_externally_hosted: boolean;
//   is_playable: boolean;
//   language?: string;
//   languages: string[];
//   name: string;
//   release_date: string;
//   release_date_precision: "year" | "month" | "day";
//   show: SimplifiedShow;
//   type: "episode";
//   uri: string;
// };

export type Artist = {
  external_urls: ExternalURL;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
};

export type Track = {
  album: SimplifiedAlbum;
  artists: SimplifiedArtist[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  episode?: boolean;
  explicit: boolean;
  href: string;
  id: string;
  is_playable?: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track?: boolean;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
  external_urls: ExternalURL;
};

export type SimpleTrack = {
  songUrl: string;
  artist: string;
  title: string;
  images: SpotifyImage[];
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: SimpleTrack[];
};

export type GetRefreshedAccessTokenResponse = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
};

export type CurrentlyPlaying = {
  context: Context | null;
  timestamp: number;
  progress_ms: number | null;
  is_playing: boolean;
  item: Track | null; // TODO add support for Episode
  currently_playing_type: "track" | "episode" | "ad" | "unknown";
};

export type TopTracksOptions = {
  limit: string | string[];
  period: string | string[];
};
