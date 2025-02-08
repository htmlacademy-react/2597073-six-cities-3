import {TOffer} from '../../mocks/offer.ts';
import {CityName} from '../../mocks/city.ts';

export type TSortOptions = {
  formToggle: boolean;
  selectedOption: string;
};

export type OfferListProps = {
  currentOffers: TOffer[];
  amountPlacesRent: number;
  currentCity: CityName;
};
