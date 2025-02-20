import {TOffer} from '../../mocks/offer.ts';

type TOfferType = 'cities' | 'favorites';

type TClassName<T extends TOfferType> = T extends Extract<TOfferType, 'cities'> ? '' : 'favorites__card-info'

type TOfferData<T extends TOfferType = TOfferType> = Record<TOfferType, {width: number; height: number; className: TClassName<T>}>;

export const offerData: TOfferData = {
  cities: { width: 250, height: 192, className: ''},
  favorites: { width: 260, height: 200, className: 'favorites__card-info'},
};

export type TOfferCardProps = {
  offer: TOffer;
  type: TOfferType;
  handleHover?: (offerId?: TOffer['id']) => void;
}
