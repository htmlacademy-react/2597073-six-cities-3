import {Cities} from '../../consts.ts';

export type City = {
  location: { latitude: number; longitude: number; zoom: number };
  name: string;
};

export type CityName = typeof Cities[number]['name'];

type CardPropsTypes = 'apartment' | 'room' | 'house';
export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TFullOffer = TOffer & {
  description: string;
  goods: [string];
  host: OfferHost;
  images: [string];
}

export type TOffer = {
  id: string;
  title: string;
  type: CardPropsTypes;
  price: number;
  city: {
    name: string;
    location: CityLocation;
  };
  location: CityLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  previewImage: string;
}


