import config from "./config";
import DiscogsClient from "./client";

const { discogs } = config;

const client = new DiscogsClient(discogs.apiToken, discogs.userAgent);
client
  .search({
    query: "tame impala",
  })
  .then((result) => {
    console.log(result);
  });
