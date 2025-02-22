import Card from '../Card/Card.tsx';
import {memo} from 'react';
import {TOffer} from '../Types/types.ts';

const OffersNearby = ({nearOffers}: {nearOffers: TOffer[]}) => (
  nearOffers.map((offer) => (
    <Card offer={offer} type="cities" key={offer.id}/>
  ))
);

export default memo(OffersNearby);
