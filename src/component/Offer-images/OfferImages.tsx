import {memo} from 'react';
import {TFullOffer} from '../Types/types.ts';

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

export default memo(OfferImages);
