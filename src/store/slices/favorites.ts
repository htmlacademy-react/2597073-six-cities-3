import {createSlice} from '@reduxjs/toolkit';
import {TFavoritesState} from '../types.ts';
import {fetchOffersStatus} from './offers.ts';
import {fetchFavoritesOffers, toggleFavorite} from '../thunk/favorites.ts';

const initialState: TFavoritesState = {
  favoritesOffers: [],
  status: null,
  updatingStatus: null
};

const favoritesSlice = createSlice({
  initialState,
  name: 'favoritesOffers',
  reducers: {
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesOffers.pending, (state) => {
        state.status = fetchOffersStatus.Loading;
      })
      .addCase(fetchFavoritesOffers.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.status = fetchOffersStatus.Done;
      })
      .addCase(fetchFavoritesOffers.rejected, (state) => {
        state.status = fetchOffersStatus.Error;
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.updatingStatus = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoritesOffers.push(action.payload);
        } else {
          state.favoritesOffers = state.favoritesOffers.filter((offer) => offer.id !== action.payload.id);
        }
        state.updatingStatus = true;
      })
      .addCase(toggleFavorite.rejected, (state) => {
        state.updatingStatus = false;
      });
  },
});


const favoritesAction = favoritesSlice.actions;
export {favoritesSlice, favoritesAction};

