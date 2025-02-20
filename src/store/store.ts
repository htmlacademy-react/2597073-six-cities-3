import {configureStore} from '@reduxjs/toolkit';
import {offersSlice} from './slices/offers.ts';
import {createApi} from '../axios/api.ts';
import {userSlice} from './slices/user.ts';
import {offerSlice} from './slices/offer.ts';
import {commentSlice} from './slices/comments.ts';

export const api = createApi();

export const store = configureStore({
  reducer: {
    offers: offersSlice.reducer,
    user: userSlice.reducer,
    offer: offerSlice.reducer,
    comments: commentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
