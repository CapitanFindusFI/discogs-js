type ArtistMembers = {
  active: boolean;
  id: number;
  name: string;
  resource_url: string;
};

type ArtistImages = {
  height: number;
  width: number;
  resource_url: string;
  type: string;
  uri: string;
  uri150: string;
};

export type DiscogsArtist = {
  namevariations: string[];
  profile: string;
  releases_url: string;
  resource_url: string;
  uri: string;
  urls: string[];
  data_quality: string;
  id: number;
  images: ArtistImages[];
  members: ArtistMembers[];
};
