import Card from '../Card/Card.tsx';
import {TOffer} from '../../mocks/offer.ts';
import {memo} from 'react';

const OffersNearby = ({nearOffers}: {nearOffers: TOffer[]}) => (
  nearOffers.map((offer) => (
    <Card offer={offer} type="cities" key={offer.id}/>
  ))
);

const MemoizedOffersNearby = memo(OffersNearby);
export default MemoizedOffersNearby;
