type SongItem = {
  id: string;
  name: string;
  type: string;
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
  artists: Artists[];
  downloadUrl: DownloadUrl;
};

type Image = {
  quality?: string;
  url?: string;
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
  id: String;
  name: String;
  image: Image[];
  url: String;
};

type Artists = {
  primary: Artist[];
};

type SongResponse = {
  success: boolean;
  data: {
    total: number;
    start: number;
    results: SongItem[];
  };
};

export type Response = SongResponse;
