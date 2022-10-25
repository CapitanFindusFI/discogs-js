import { Image } from "./image";
import { PagedRequest, PagedResponse } from "./pagination";

type Sublabel = {
  id: number;
  name: string;
  resource_url: string;
};

type Label = {
  id: number;
  data_quality: string;
  resource_url: string;
  profile: string;
  releases_url: string;
  name: string;
  contact_info: string;
  uri: string;
  urls: string[];
  sublabels: Sublabel[];
  images: Image[];
};

export type DiscogsLabel = Label;
