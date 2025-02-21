import {RootState} from '../types.ts';
import {createSelector} from '@reduxjs/toolkit';

export const selectOffer = (state: RootState) => state.offer.offer;
export const selectNearbyOffers = (state: RootState) => state.offer.nearby;
export const selectOfferStatus = (state: RootState) => state.offer.status;

export const selectMemoNearbyOffers = createSelector([selectNearbyOffers], (nearby) => nearby);
export const selectMemoOffer = createSelector([selectOffer], (offer) => offer);
export const selectMemoOfferStatus = createSelector([selectOfferStatus], (status) => status);
