import axios from "axios";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

const getReqInstanceId = () => {
  return process.env.ENV_REQ_INSTANCE_ID ? process.env.ENV_REQ_INSTANCE_ID : "i-development";
};

export const genAxiosInstance = (name) => {
  return axios.create({
    baseURL: `${process.env.ENV_ALB_URL}:${process.env.ENV_ALB_PORT}/api/${name}/${process.env.ENV_API_VERSION}/`,
    transformRequest: [
      (data, headers) => {
        const reqDTO = {
          reqDTO: {
            header: {
              tranNo: uuidv4(),
              reqSrc: process.env.ENV_REQ_SRC,
              regTgt: process.env.ENV_REQ_TGT,
              reqDate: dayjs().format("YYYY-MM-DD"),
              reqTime: dayjs().format("HH:mm:ss"),
              reqInstanceId: getReqInstanceId(),
              clientIp: "",
              menuId: "",
            },
            body: {
              ...data,
            },
          },
        };
        console.log("@data", data);
        console.log("@reqDTO", reqDTO);
        return reqDTO;
      },
    ],
  });
};
