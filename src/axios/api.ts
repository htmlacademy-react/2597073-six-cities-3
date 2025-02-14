import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {AXIOS_BASE_URL, AXIOS_TIMEOUT} from '../consts.ts';
import {getToken} from './token.ts';

export const createApi = (): AxiosInstance => {
  const server = axios.create({
    baseURL: AXIOS_BASE_URL,
    timeout: AXIOS_TIMEOUT,
  });

  server.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  server.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        return error.response.data;
      }
    }
  );

  return server;
};
