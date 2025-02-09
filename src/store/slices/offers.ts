import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TOffersState} from '../types.ts';
import {Cities} from '../../consts.ts';
import {CityName} from '../../mocks/city.ts';
import {fetchAllOffers} from '../../axios/api-actions.ts';

const initialState: TOffersState = {
  city: Cities[0].name,
  offers: [],
  status: '',
};

export const fetchOffersStatus = {
  Pending: 'Загрузка...',
  Fulfilled: 'Загружено.',
  Rejected: 'Отказано.',
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
        state.status = fetchOffersStatus.Pending;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = fetchOffersStatus.Fulfilled;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = fetchOffersStatus.Rejected;
      });
  },
});


const offersAction = offersSlice.actions;
export {offersSlice, offersAction};

