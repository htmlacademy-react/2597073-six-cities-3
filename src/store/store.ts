import {configureStore} from '@reduxjs/toolkit';
import {offersSlice} from './slices/offers.ts';

export const store = configureStore({
  reducer: offersSlice.reducer,
});
