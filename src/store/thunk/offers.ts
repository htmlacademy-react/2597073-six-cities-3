import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFullOffer, TOffer} from '../../mocks/offer.ts';
import {AxiosInstance} from 'axios';

export const fetchAllOffers = createAsyncThunk<TOffer[], undefined, {extra: AxiosInstance}>
('getOffers', async (_,{extra: api}) => {
  const response = await api.get<TOffer[]>('/offers');
  return response.data;
});

export const fetchOffer = createAsyncThunk<TFullOffer, string, {extra: AxiosInstance}>
('getOffer', async (offerId,{ extra: api }) => {
  const response = await api.get<TFullOffer>(`/offers/${offerId}`);
  return response.data;
});

export const fetchNearbyOffers = createAsyncThunk<TOffer[], string, {extra: AxiosInstance}>
('getNearbyOffers', async (offerId,{ extra: api }) => {
  const response = await api.get<TOffer[]>(`/offers/${offerId}/nearby`);
  return response.data;
});
