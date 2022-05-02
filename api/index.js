import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/${process.env.REACT_APP_API_VERSION}`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ko-KR",
  },
});

export default API;
