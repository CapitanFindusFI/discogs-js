import type { Image } from "./image";

type ArtistMembers = {
  active: boolean;
  id: number;
  name: string;
  resource_url: string;
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
  images: Image[];
  members: ArtistMembers[];
};
