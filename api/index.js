import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { genAxiosInstance } from "./api.utils";

export const sampleApi = axios.create({
  baseURL: `${process.env.ENV_SAMPLE_API_HOST}/${process.env.ENV_SAMPLE_API_VERSION}`,
  params: {
    api_key: process.env.ENV_SAMPLE_API_KEY,
    language: "ko-KR",
  },
});

export const basicApi = genAxiosInstance("basic");

export const ccApi = genAxiosInstance("cc");

export const itfApi = genAxiosInstance("itf");

export const alarmApi = genAxiosInstance("alarm");
