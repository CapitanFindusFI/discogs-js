import { PagedResponse, SortingParameters } from "./pagination";

type Release = {
  id: number;
  artist: string;
  main_release: number;
  resource_url: string;
  role: string;
  thumb: string;
  title: string;
  type: string;
  year: number;
};

type ReleaseSortParams = "year" | "title" | "format";

export type DiscogsReleaseRequestParams = SortingParameters<ReleaseSortParams>;
export type DiscogsReleaseResponse = PagedResponse<Release>;
