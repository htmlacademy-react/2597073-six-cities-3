import {memo} from 'react';
import {TFullOffer} from '../Types/types.ts';

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

export default memo(OfferGoods);

