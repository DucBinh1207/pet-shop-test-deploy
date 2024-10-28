import axios, { AxiosRequestConfig } from "axios";
import { ErrorStatus } from "@/constants/error-status";
import {
  deleteAuthTokenFromInternalServer,
  getAuthTokenFromInternalServer,
} from "./api/internal-auth-api";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000, // nếu vượt quá timeout thì sẽ ngừng request (throw về error)
});

apiClient.interceptors.request.use(
  (config) => {
      const token = getAuthTokenFromInternalServer();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const status = error.response.status;
      switch (status) {
        case ErrorStatus.BAD_REQUEST:
          throw new Error(error.response.data.message);
        case ErrorStatus.UNAUTHORIZED:
          deleteAuthTokenFromInternalServer();
          // window.location.href = "/login";
          throw new Error(error.response.data.message);
        case ErrorStatus.NOT_FOUND:
          window.location.href = "/not_found";
          break;
        case ErrorStatus.SERVER_ERROR:
          window.location.href = "/error";
          break;
      }
    }
    if (error.request) {
      console.log(error);
      console.log(error.request);
      throw new Error("Could not connect");
    }
  },
);

export const get = <T>({
  url,
  params,
  config,
}: {
  url: string;
  params?: AxiosRequestConfig["params"];
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.get(url, { url, params, ...config });

export const post = <T>({
  url,
  data,
  config,
}: {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.post(url, data, config);

export const update = ({
  url,
  data,
  config,
}: {
  url: string;
  data: unknown;
  config?: AxiosRequestConfig;
}) => apiClient.put(url, data, config);

export const remove = ({ url }: { url: string }) => apiClient.delete(url);
