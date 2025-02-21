import {store} from './store.ts';
import {AuthorizationStatus} from '../consts.ts';
import {Nullable} from 'vitest';
import {fetchOffersStatus} from './slices/offers.ts';
import {CityName, TFullOffer, TOffer} from '../component/Types/types.ts';
import {TReview} from '../component/Reviews-item/types.ts';

export type TOffersState = {
  city: CityName;
  offers: TOffer[];
  status: fetchOffersStatus | null;
}

export type TOfferState = {
  offer: TFullOffer | null;
  nearby: TOffer[];
  status: fetchOffersStatus | null;
}

export type TFavoriteOffer = Omit<TOffer, 'maxAdults' | 'bedrooms'>


export type TFavoritesState = {
  favoritesOffers: TFavoriteOffer[];
  status: fetchOffersStatus | null;
  updatingStatus: boolean | null;
}

export type TCommentsState = {
  comments: TReview[];
  status: fetchOffersStatus | null;
  reviewPostStatus: PostReviewStatus;
}

export enum PostReviewStatus {
  Idle = 'Idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export type TUserState = {
  authorizationStatus: AuthorizationStatus | null;
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
