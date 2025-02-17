import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TOfferState} from '../types.ts';
import {fetchNearbyOffers, fetchOffer} from '../thunk/offers.ts';
import {fetchOffersStatus} from './offers.ts';
import {TOffer} from '../../mocks/offer.ts';

const initialState: TOfferState = {
  offer: null,
  nearby: [],
  status: '',
};

const offerSlice = createSlice({
  initialState,
  name: 'offer',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.status = fetchOffersStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.status = fetchOffersStatus.Done;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.status = fetchOffersStatus.Error;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.status = fetchOffersStatus.Loading;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action: PayloadAction<TOffer[]>) => {
        state.nearby = action.payload;
        state.status = fetchOffersStatus.Done;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.status = fetchOffersStatus.Error;
      });
  },
});


const offerAction = offerSlice.actions;
export {offerSlice, offerAction};

