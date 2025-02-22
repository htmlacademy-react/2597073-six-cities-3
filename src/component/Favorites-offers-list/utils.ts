import {TFavoriteOffer} from '../../store/types.ts';
import {CityName} from '../Types/types.ts';

type TFavoritesByCities = Record<CityName, TFavoriteOffer[]>;

export const sortFavoritesByCity = (offers: TFavoriteOffer[]) =>
  offers.reduce<TFavoritesByCities>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  },{});
