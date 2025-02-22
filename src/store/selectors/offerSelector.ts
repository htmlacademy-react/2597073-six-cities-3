import {RootState} from '../types.ts';

export const selectOffer = (state: RootState) => state.offer.offer;
export const selectNearbyOffers = (state: RootState) => state.offer.nearby;
export const selectOfferStatus = (state: RootState) => state.offer.status;
