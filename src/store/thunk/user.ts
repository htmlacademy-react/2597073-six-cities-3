import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {TLoginData, TUser} from '../types.ts';
import {deleteToken, setToken} from '../../axios/token.ts';

const login = createAsyncThunk<TUser, TLoginData, {extra: AxiosInstance}>
('auth/login', async (body, {extra: api}) => {
  const {data} = await api.post<TUser>('/login', body);
  setToken(data.token);
  return data;
});

const checkAuth = createAsyncThunk<TUser, undefined, {extra: AxiosInstance}>
('auth/checkAuth', async (_, {extra: api}) => {
  const {data} = await api.get<TUser>('/login');
  return data;
});

const logout = createAsyncThunk<unknown, undefined, {extra: AxiosInstance}>
('auth/logout', async (_, {extra: api}) => {
  await api.delete('/logout');
  deleteToken();
});

export {login, logout, checkAuth};
