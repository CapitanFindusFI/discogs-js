type PaginationRequest = {
  page?: number;
  per_page?: number;
};

type PaginationUrls = {
  next: string;
  last: string;
};

type PaginationResponse = {
  per_page: number;
  pages: number;
  page: number;
  urls: PaginationUrls;
  items: number;
};

export type SortingParameters<T> = {
  sort: T,
  sort_order: "asc" | "desc"
}

export type PagedRequest<T> = Partial<PaginationRequest> & T;
export type PagedResponse<T> = {
  pagination: PaginationResponse;
  results: T[];
};
