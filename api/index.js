import _axios from "axios";

const axios = _axios.create({
  baseURL: `${process.env.ENV_API_HOST}/${process.env.ENV_API_VERSION}`,
  params: {
    api_key: process.env.ENV_API_KEY,
    language: "ko-KR",
  },
});

export default axios;
