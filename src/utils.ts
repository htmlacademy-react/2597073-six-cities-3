import {StarsData} from './consts.ts';

const STARS_RATING = StarsData.length;

export const ratingCalculate =
  (rating: number, stars: number = STARS_RATING) =>
    `${(Math.round(rating) * 100) / stars }%`;
