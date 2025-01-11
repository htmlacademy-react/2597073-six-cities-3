
export type CardProps = {
  id: number;
  isPremium: boolean;
  price: number;
  image: string;
  title: string;
  type: string;
  pageType: string;
  className: string;
  width: string;
  height: string;
  isFavorite: boolean;
  bedRoomsCount: number;
  adultCount: number;
}

export const CardDataCities: CardProps[] = [
  {
    id: 1,
    isPremium: true,
    price: 120,
    image: 'img/apartment-01.jpg',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    pageType: 'cities',
    className: '',
    width: '260',
    height: '200',
    isFavorite: true,
    bedRoomsCount: 3,
    adultCount: 4,
  },
  {
    id: 2,
    isPremium: false,
    price: 85,
    image: 'img/room.jpg',
    title: 'Cozy and affordable place',
    type: 'Room',
    pageType: 'cities',
    className: '',
    width: '260',
    height: '200',
    isFavorite: true,
    bedRoomsCount: 2,
    adultCount: 3,
  },
  {
    id: 3,
    isPremium: false,
    price: 150,
    image: 'img/apartment-02.jpg',
    title: 'Spacious 2-bedroom apartment',
    type: 'Apartment',
    pageType: 'cities',
    className: '',
    width: '260',
    height: '200',
    isFavorite: false,
    bedRoomsCount: 4,
    adultCount: 5,
  },
  {
    id: 4,
    isPremium: true,
    price: 95,
    image: 'img/apartment-03.jpg',
    title: 'Modern downtown studio',
    type: 'Apartment',
    pageType: 'cities',
    className: '',
    width: '260',
    height: '200',
    isFavorite: false,
    bedRoomsCount: 2,
    adultCount: 3,
  },
  {
    id: 5,
    isPremium: false,
    price: 200,
    image: 'img/room.jpg',
    title: 'Luxury penthouse with city view',
    type: 'Room',
    pageType: 'cities',
    className: '',
    width: '260',
    height: '200',
    isFavorite: false,
    bedRoomsCount: 2,
    adultCount: 3,
  },
];

export const CardDataFavorites: CardProps[] = [
  {
    id: 1,
    isPremium: true,
    price: 180,
    image: 'img/apartment-small-03.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    pageType: 'favorites',
    className: 'favorites__card-info',
    width: '150',
    height: '110',
    isFavorite: true,
    bedRoomsCount: 3,
    adultCount: 4,
  },
  {
    id: 2,
    isPremium: false,
    price: 80,
    image: 'img/room-small.jpg',
    title: 'Wood and stone place',
    type: 'Room',
    pageType: 'favorites',
    className: 'favorites__card-info',
    width: '150',
    height: '110',
    isFavorite: true,
    bedRoomsCount: 4,
    adultCount: 5,
  },
];
