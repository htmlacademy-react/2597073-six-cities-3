import React, {JSX, memo} from 'react';
import { Link } from 'react-router-dom';
import {offerData, TOfferCardProps} from './types.ts';
import {ratingCalculate} from '../../utils.ts';

function Card({offer, type, handleHover}: TOfferCardProps): JSX.Element {
  const {width, height, className} = offerData[type];

  const handleMouseEnter = () => {
    handleHover?.(offer['id']);
  };

  const handleMouseLeave = () => {
    handleHover?.();
  };

  const addToBookmarks = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const ratingPercent = ratingCalculate(offer.rating);

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={`/offer/${offer.id}`}
    >
      <article className={'cities__card place-card'}>
        {offer.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={'cities__image-wrapper place-card__image-wrapper'}>
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
            <button
              onClick={(e) => addToBookmarks(e)}
              className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`}
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
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

const memoCard = memo(Card);
export default memoCard;
