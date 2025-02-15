import {configureStore} from '@reduxjs/toolkit';
import {offersSlice} from './slices/offers.ts';
import {createApi} from '../axios/api.ts';
import {userSlice} from './slices/user.ts';
import {redirectMiddleware} from './middlewares/redirectMiddleware.ts';

export const api = createApi();

export const store = configureStore({
  reducer: {
    offers: offersSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirectMiddleware),
});
