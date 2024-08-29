type SearchType = 'song' | 'album' | 'artist';

type SongItem = {
  id: string;
  name: string;
  type: SearchType;
  year?: string;
  release_date?: string;
  duration: number;
  label?: string;
  explicitContent: boolean;
  playCount?: number;
  language: string;
  haslyrics: boolean;
  lyricsId?: string;
  copyright?: string;
  album: Album;
  image: Image[];
  artists: Artists;
  downloadUrl: DownloadUrl;
};

type Image = {
  quality: string;
  url: string;
};

type DownloadUrl = {
  quality?: string;
  url?: string;
};

type Album = {
  id: string;
  name: string;
};

type Artist = {
  id: string;
  name: string;
  image: Image[];
  url: string;
};

type Artists = {
  primary: Artist[];
};

type SongResponse = {
  total: number;
  start: number;
  results: SongItem[];
};

export type Response = {
  success: boolean;
  data: ResponseType;
};

export type ResponseType = SongResponse;
