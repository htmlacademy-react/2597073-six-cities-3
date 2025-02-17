type CardPropsTypes = 'apartment' | 'room' | 'house';
export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TFullOffer = TOffer & {
  description: string;
  goods: [string];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
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
  //pageType: string;
  previewImage: string;
}

export const CardDataFavorites: TOffer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    previewImage: 'img/room.jpg',
  },
  {
    id: '2',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 85,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
  },
];
