
export type TReview = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export const Reviews: TReview[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'This is place is so cool!',
    rating: 5,
  },
  {
    id: 'a71f9f82-d9b3-4210-847f-9e6b6f12f54d',
    date: '2021-03-15T10:23:12.569Z',
    user: {
      name: 'Sophia Brown',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true
    },
    comment: 'Absolutely loved the experience. Highly recommend!',
    rating: 4,
  },
  {
    id: 'c5e8e78d-4f13-43d4-b3e6-1c9f36228ed2',
    date: '2020-11-22T18:45:37.569Z',
    user: {
      name: 'Liam Smith',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'Not bad, but I expected more from this place.',
    rating: 3,
  },
  {
    id: 'f8c6e7b4-8e3c-4827-8f22-6e7d93a95ed2',
    date: '2022-07-04T07:56:22.569Z',
    user: {
      name: 'Emma Johnson',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true
    },
    comment: 'A perfect spot for a weekend getaway. Quiet and serene.',
    rating: 5,
  },
  {
    id: 'd345e7b1-3c1a-45b2-ae4f-8c2c9b1a9f45',
    date: '2023-01-10T16:33:45.569Z',
    user: {
      name: 'Noah Williams',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'The service was okay, but the amenities need improvement.',
    rating: 2,
  }
];
