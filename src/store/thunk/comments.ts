import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {TReview} from '../../component/Reviews-item/types.ts';

export const fetchAllComments = createAsyncThunk<TReview[], string, {extra: AxiosInstance}>
('getAllComments', async (offerId,{ extra: api }) => {
  const response = await api.get<TReview[]>(`/comments/${offerId}`);
  return response.data;
});

type TPostComment = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: string;
}

export const postComment = createAsyncThunk<TReview, TPostComment, {extra: AxiosInstance}>
('postComment', async ({body, offerId},{ extra: api }) => {
  const response = await api.post<TReview>(`/comments/${offerId}`, body);
  return response.data;
});
