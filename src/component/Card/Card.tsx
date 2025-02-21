import {JSX, memo} from 'react';
import {Link} from 'react-router-dom';
import {offerData, TOfferCardProps} from './types.ts';
import {ratingCalculate} from '../../utils.ts';
import ToggleFavoriteButton from '../Toggle-favorite-button/ToggleFavoriteButton.tsx';
import {useAuth} from '../../hooks/store.ts';

function Card({offer, type, handleHover}: TOfferCardProps): JSX.Element {
  const {width, height, className} = offerData[type];
  const {id, isFavorite} = offer;

  const isAuth = useAuth();

  const handleMouseEnter = () => {
    handleHover?.(offer['id']);
  };

  const handleMouseLeave = () => {
    handleHover?.();
  };

  const ratingPercent = ratingCalculate(offer.rating);

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={`/offer/${offer.id}`}
    >
      <article className={`${type}__card place-card`} style={{marginBottom: '25px'}}>
        {offer.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={`${type}__image-wrapper place-card__image-wrapper`}>
          <img className="place-card__image" src={offer.previewImage} width={width} height={height}
            alt="Place image"
          />
        </div>
        <div className={`${className} place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}&nbsp;</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <ToggleFavoriteButton
              isFavorite={isFavorite}
              id={id}
              className="place-card"
              width="18"
              height="19"
              isAuth={isAuth}
            />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${ratingPercent}`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <span>{offer.title}</span>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </Link>
  );
}

export default memo(Card);
