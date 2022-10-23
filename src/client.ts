import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
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
}

export default DiscogsClient;
