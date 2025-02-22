import {RootState} from '../types.ts';

export const selectFavoritesOffersStatus = (state: RootState) => state.favorites.status;

export const selectFavorites = (state: RootState) => state.favorites.favoritesOffers;
