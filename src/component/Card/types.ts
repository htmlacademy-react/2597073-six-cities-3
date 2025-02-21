import {TFavoriteOffer} from '../../store/types.ts';
import {TOffer} from '../Types/types.ts';

type TOfferType = 'cities' | 'favorites';

type TClassName<T extends TOfferType> = T extends Extract<TOfferType, 'cities'> ? '' : 'favorites__card-info'

type TOfferData<T extends TOfferType = TOfferType> = Record<TOfferType, {width: number; height: number; className: TClassName<T>}>;

export const offerData: TOfferData = {
  cities: { width: 250, height: 192, className: ''},
  favorites: { width: 150, height: 110, className: 'favorites__card-info'},
};

export type TOfferCardProps = {
  offer: TOffer | TFavoriteOffer;
  type: TOfferType;
  handleHover?: (offerId?: TOffer['id']) => void;
}
