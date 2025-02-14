import {store} from './store.ts';
import {CityName} from '../mocks/city.ts';
import {TOffer} from '../mocks/offer.ts';
import {AuthorizationStatus} from '../consts.ts';
import {Nullable} from 'vitest';

export type TOffersState = {
  city: CityName;
  offers: TOffer[];
  status: string;
}

export type TUserState = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  AuthInfo: TUser;
};

export type TLoginData = {
  email: string;
  password: string;
};

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: Nullable<boolean>;
  email: string;
  token: string;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
