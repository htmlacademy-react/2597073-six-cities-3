import {TOffer} from '../../mocks/offer.ts';

const MAX_NEAR_OFFERS = 3;

export const getNearOffers = (offer: TOffer, offers: TOffer[]) => {
  const nearOffers = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearOffers.push(offers[i]);
    }

    if (nearOffers.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }
  return nearOffers;
};

export const addPluralS =
  (singularWord: string, pluralWord: string, pluralCount: number) =>
    `${pluralCount} ${pluralCount > 1 ? pluralWord : singularWord}`;
