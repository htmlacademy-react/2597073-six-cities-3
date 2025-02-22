import {TOffer} from '../Types/types.ts';

export const sortingOffers = (currentOffers: TOffer[], selectedOption: string): TOffer[] => {
  switch (selectedOption) {
    case 'Price: low to high':
      return currentOffers.toSorted((a,b) => a.price - b.price);
    case 'Price: high to low':
      return currentOffers.toSorted((a,b) => b.price - a.price);
    case 'Top rated first':
      return currentOffers.toSorted((a,b) => b.rating - a.rating);
    default: return currentOffers;
  }
};
