import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TOffersState} from '../types.ts';
import {Cities} from '../../consts.ts';
import {CardDataCities} from '../../mocks/offer.ts';
import {CityName} from '../../mocks/city.ts';

const initialState: TOffersState = {
  city: Cities[0].name,
  offers: CardDataCities,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  }
});

const offersAction = offersSlice.actions;
export {offersSlice, offersAction};

