import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { DiscogsArtist } from "./types/artist";
import { DiscogsLabel } from "./types/label";
import { DiscogsLabelReleasesResponse } from "./types/label-release";
import { PaginationRequest } from "./types/pagination";
import {
  DiscogsReleaseRequestParams,
  DiscogsReleaseResponse,
} from "./types/releases";
import { DiscogsSearchRequest, DiscogsSearchResult } from "./types/search";

class DiscogsClient {
  private _httpClient: AxiosInstance;

  constructor(
    apiToken: string,
    userAgent: string,
    axiosConfig: AxiosRequestConfig = {}
  ) {
    this._httpClient = axios.create({
      ...axiosConfig,
      baseURL: "https://api.discogs.com",
      headers: {
        ...(axiosConfig.headers || {}),
        authorization: `Discogs token=${apiToken}`,
        "user-agent": userAgent,
        "content-type": "application/json",
      },
    });
  }

  private _get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    return this._httpClient.get<T>(url, config).then((r) => r.data);
  }

  private _post<T>(
    url: string,
    data: any,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this._httpClient.post<T>(url, data, config).then((r) => r.data);
  }

  public search(params: DiscogsSearchRequest): Promise<DiscogsSearchResult> {
    return this._get<DiscogsSearchResult>("/database/search", {
      params: {
        q: params.query,
        ...params,
      },
    });
  }

  public getArtist(id: number): Promise<DiscogsArtist> {
    return this._get<DiscogsArtist>(`/artist/${id}`);
  }

  public getArtistReleases(
    id: number,
    params: DiscogsReleaseRequestParams
  ): Promise<DiscogsReleaseResponse> {
    return this._get<DiscogsReleaseResponse>(`/artist/${id}/releases`, {
      params,
    });
  }

  public getLabel(id: number): Promise<DiscogsLabel> {
    return this._get<DiscogsLabel>(`/labels/${id}`);
  }

  public getLabelReleases(
    id: number,
    params: PaginationRequest
  ): Promise<DiscogsLabelReleasesResponse> {
    return this._get<DiscogsLabelReleasesResponse>(`/label/${id}/releases`, {
      params,
    });
  }
}

export default DiscogsClient;
