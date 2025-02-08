export type AmountPlaces = {
  amountPlacesRent: number;
}

export type City = {
  id: string;
  location: { latitude: number; longitude: number; zoom: number };
  name: string;
};
