import {City} from './component/Types/types.ts';

export const AXIOS_BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';
export const AXIOS_TIMEOUT = 5000;

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export const SORTING_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const StarsData: Array<{title: string; value: number}> = [
  {title: 'perfect', value: 5},
  {title: 'good', value: 4},
  {title: 'not bad', value: 3},
  {title: 'badly', value: 2},
  {title: 'terribly', value: 1},
];

export const MAP_ZOOM_MAIN = 13;
export const MAP_ZOOM_OFFER = 13;

export const Cities: City[] = [
  {
    location: { latitude: 48.85661, longitude: 2.351499, zoom: 10},
    name: 'Paris',
  },
  {
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 10},
    name: 'Cologne',
  },
  {
    location: { latitude: 50.846557, longitude: 4.351697, zoom: 10},
    name: 'Brussels',
  },
  {
    location: { latitude: 52.374, longitude: 4.88969, zoom: 10},
    name: 'Amsterdam',
  },
  {
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 10},
    name: 'Hamburg',
  },
  {
    location: { latitude: 51.225402, longitude: 6.776314, zoom: 10},
    name: 'Dusseldorf',
  },
];
