import axios, {AxiosInstance} from 'axios';
import {AXIOS_BASE_URL, AXIOS_TIMEOUT} from '../consts.ts';

export const createApi = (): AxiosInstance => {
  const server = axios.create({
    baseURL: AXIOS_BASE_URL,
    timeout: AXIOS_TIMEOUT,
  });
  return server;
};
