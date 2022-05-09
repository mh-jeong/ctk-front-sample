import axios from "axios";

export const sampleApi = axios.create({
  baseURL: `${process.env.ENV_SAMPLE_API_HOST}/${process.env.ENV_SAMPLE_API_VERSION}`,
  params: {
    api_key: process.env.ENV_SAMPLE_API_KEY,
    language: "ko-KR",
  },
});
