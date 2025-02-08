import {store} from './store.ts';
import {CityName} from '../mocks/city.ts';
import {TOffer} from '../mocks/offer.ts';

export type TOffersState = {
  city: CityName;
  offers: TOffer[];
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
