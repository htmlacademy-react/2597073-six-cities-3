import {store} from './store.ts';
import {CityName} from '../mocks/city.ts';
import {TFullOffer, TOffer} from '../mocks/offer.ts';
import {AuthorizationStatus} from '../consts.ts';
import {Nullable} from 'vitest';
import {TReview} from '../mocks/reviews.ts';

export type TOffersState = {
  city: CityName;
  offers: TOffer[];
  status: string;
}

export type TOfferState = {
  offer: TFullOffer | null;
  nearby: TOffer[];
  status: string;
}

export type TCommentsState = {
  comments: TReview[];
  status: string;
  reviewPostStatus: typeof PostReviewStatus[keyof typeof PostReviewStatus];
}

export enum PostReviewStatus {
  Idle = 'Idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export type TUserState = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  AuthInfo: TUser;
  isAuthLoading: boolean | null;
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
