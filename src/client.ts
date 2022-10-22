import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

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
        "accept-encoding": "gzip, deflate",
      },
    });
  }
}

export default DiscogsClient;
