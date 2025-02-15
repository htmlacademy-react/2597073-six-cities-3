import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffer} from '../../mocks/offer.ts';
import {AxiosInstance} from 'axios';

export const fetchAllOffers = createAsyncThunk<TOffer[], undefined, {extra: AxiosInstance}>
('getOffers', async (_,{extra: api}) => {
  const response = await api.get<TOffer[]>('/offers');
  return response.data;
});
