import { PagedRequest, PagedResponse } from "./pagination";

type SearchTypeParam = "release" | "master" | "artist" | "label";

type SearchRequest = {
  query: string;
  type?: SearchTypeParam;
  title?: string;
  release_title?: string;
  credit?: string;
  artist?: string;
  anv?: string;
  label?: string;
  genre?: string;
  style?: string;
  country?: string;
  year?: string;
  format?: string;
  catno?: string;
  barcode?: string;
  track?: string;
  submitter?: string;
  contributor?: string;
};

type SearchResult = {
  style: string[];
  thumb: string;
  format: string[];
  country: string;
  barcode: string[];
  uri: string;
  community: {
    want: number;
    have: number;
  };
  label: string[];
  catno: string;
  genre: string[];
  title: string;
  resource_url: string;
  type: string;
  id: number;
};

export type DiscogsSearchRequest = PagedRequest<SearchRequest>;
export type DiscogsSearchResult = PagedResponse<SearchResult>;
