import {TFullOffer} from '../../mocks/offer.ts';
import {memo} from 'react';

type TOfferImages = {
  images: TFullOffer['images'];
}

const OfferImages = ({images}: TOfferImages) => (
  images.map((image) => (
    <div key={image} className="offer__image-wrapper">
      <img src={image} className="offer__image" alt="offer's photo" />
    </div>
  ))
);

const memoImages = memo(OfferImages);
export default memoImages;
