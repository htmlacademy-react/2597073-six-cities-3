
type CardPropsTypes = 'apartment' | 'room';

export type TOffer = {
  id: string;
  title: string;
  type: CardPropsTypes;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedRoomsCount: number;
  adultCount: number;
  pageType: string;
  previewImage: string;
}

export const CardDataCities: TOffer[] = [
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
    bedRoomsCount: 3,
    adultCount: 4,
    pageType: 'cities',
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '2',
    title: 'Cozy and affordable place',
    type: 'room',
    price: 85,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    bedRoomsCount: 2,
    adultCount: 3,
    pageType: 'cities',
    previewImage: 'img/room.jpg',
  },
  {
    id: '3',
    title: 'Spacious 2-bedroom apartment',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
    bedRoomsCount: 4,
    adultCount: 5,
    pageType: 'cities',
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: '4',
    title: 'Modern downtown studio',
    type: 'apartment',
    price: 95,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    bedRoomsCount: 2,
    adultCount: 3,
    pageType: 'cities',
    previewImage: 'img/apartment-03.jpg',
  },
  {
    id: '5',
    title: 'Luxury penthouse with city view',
    type: 'room',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3859553943508,
        longitude: 4.933309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3859553943508,
      longitude: 4.933309666406198,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: false,
    rating: 5.0,
    bedRoomsCount: 2,
    adultCount: 3,
    pageType: 'cities',
    previewImage: 'img/room.jpg',
  },
];

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
    bedRoomsCount: 3,
    adultCount: 4,
    pageType: 'favorites',
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
    bedRoomsCount: 3,
    adultCount: 4,
    pageType: 'favorites',
    previewImage: 'img/apartment-01.jpg',
  },
];
