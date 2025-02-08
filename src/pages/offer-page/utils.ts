import {TOffer, CardDataCities} from '../../mocks/offer.ts';

const MAX_NEAR_OFFERS = 3;

export const getNearOffers = (offer: TOffer) => {
  const nearOffers = [];

  for (let i = 0; i < CardDataCities.length; i++) {
    if (CardDataCities[i].id !== offer.id && CardDataCities[i].city.name === offer.city.name) {
      nearOffers.push(CardDataCities[i]);
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
