import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {TFavoriteOffer} from '../types.ts';

export const fetchFavoritesOffers = createAsyncThunk<TFavoriteOffer[], undefined, {extra: AxiosInstance}>
('getFavoritesOffers', async (_,{ extra: api }) => {
  const response = await api.get<TFavoriteOffer[]>('/favorite');
  return response.data;
});

type TToggleFavorite = {
  status: 0 | 1;
  offerId: string;
}

export const toggleFavorite = createAsyncThunk<TFavoriteOffer, TToggleFavorite, {extra: AxiosInstance}>
('toggleFavorite', async ({offerId,status},{ extra: api }) => {
  const response = await api.post<TFavoriteOffer>(`/favorite/${offerId}/${status}`, {status});
  return response.data;
});
