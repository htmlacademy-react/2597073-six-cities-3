import {CityName, TOffer} from '../Types/types.ts';

export type TSortOptions = {
  formToggle: boolean;
  selectedOption: string;
};

export type OfferListProps = {
  currentOffers: TOffer[];
  amountPlacesRent: number;
  currentCity: CityName;
};
