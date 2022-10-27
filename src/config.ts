import dotenv from 'dotenv';
dotenv.config();

const configuration = {
  discogs: {
    apiToken: process.env.DISCOGS_API_TOKEN || "xxx",
    userAgent: process.env.DISCOGS_USER_AGENT || "discogs-ua",
  },
};

export default configuration;
