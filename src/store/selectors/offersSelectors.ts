import {RootState} from '../types.ts';
import {createSelector} from '@reduxjs/toolkit';

export const selectCity = (state: RootState) => state.offers.city;
export const selectMemoCity = createSelector((state: RootState) => state.offers.city, (city) => city);
export const selectMemoOffers = createSelector((state: RootState) => state.offers.offers, (offers) => offers);
export const selectMemoStatus = createSelector((state: RootState) => state.offers.status, (status) => status);
