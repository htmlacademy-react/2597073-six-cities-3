import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TOffersState} from '../types.ts';
import {Cities} from '../../consts.ts';
import {CityName} from '../../mocks/city.ts';
import {fetchAllOffers} from '../thunk/offers.ts';

const initialState: TOffersState = {
  city: Cities[0].name,
  offers: [],
  status: '',
};

export const fetchOffersStatus = {
  Loading: 'loading...',
  Done: 'Done.',
  Error: 'Error.',
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = fetchOffersStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = fetchOffersStatus.Done;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = fetchOffersStatus.Error;
      });
  },
});


const offersAction = offersSlice.actions;
export {offersSlice, offersAction};

