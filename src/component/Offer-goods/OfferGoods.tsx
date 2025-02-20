import {TFullOffer} from '../../mocks/offer.ts';
import {memo} from 'react';

type TOfferGoods = {
  goods: TFullOffer['goods'];
}

const OfferGoods = ({goods}: TOfferGoods) => (
  goods.map((good) => (
    <li key={good} className="offer__inside-item">
      {good}
    </li>
  ))
);

const memoGoods = memo(OfferGoods);
export default memoGoods;
