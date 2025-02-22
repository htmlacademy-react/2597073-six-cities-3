import OfferImages from '../Offer-images/OfferImages.tsx';
import OfferGoods from '../Offer-goods/OfferGoods.tsx';
import ReviewsList from '../Review-list/ReviewsList.tsx';
import CommentForm from '../CommentForm/CommentForm.tsx';
import Map from '../Map/Map.tsx';
import {MAP_ZOOM_OFFER} from '../../consts.ts';
import {TFullOffer, TOffer} from '../../mocks/offer.ts';
import {ratingCalculate} from '../../utils.ts';
import {addPluralS} from '../../pages/offer-page/utils.ts';
import {useAuth} from '../../hooks/store.ts';
import OfferHostInfo from '../Offer-host/OfferHost.tsx';
import {memo} from 'react';

type TOfferInfo = {
  currentOffer: TFullOffer;
  offerId: string;
  nearAndCurrentOffers: TOffer[];
}

const OfferInfo = ({currentOffer,offerId,nearAndCurrentOffers}: TOfferInfo) => {
  const isAuth = useAuth();
  const {id, images, description, isFavorite, city, isPremium, title, rating, type, goods, maxAdults, bedrooms, price, host} = currentOffer;

  const currentCountBedRooms = addPluralS('Bedroom', 'Bedrooms', bedrooms);
  const currentMaxAdults = `Max ${addPluralS('adult', 'adults', maxAdults)}`;

  const ratingPercent = ratingCalculate(rating);

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          <OfferImages images={images} />
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium && (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <button className={`offer__bookmark-button ${isFavorite && 'offer__bookmark-button--active'} button`} type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: `${ratingPercent}`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {currentCountBedRooms}
            </li>
            <li className="offer__feature offer__feature--adults">
              {currentMaxAdults}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              <OfferGoods goods={goods}/>
            </ul>
          </div>
          <OfferHostInfo
            description={description}
            host={host}
          />
          <section className="offer__reviews reviews">
            <ReviewsList/>
            {isAuth ? (
              <CommentForm
                offerId={offerId}
              />
            ) : <div style={{marginLeft: '40%'}}>Вы не авторизованы!</div>}
          </section>
        </div>
      </div>
      <section className="offer__map map">
        <Map
          zoom={MAP_ZOOM_OFFER}
          selectedPointId={id}
          points={nearAndCurrentOffers}
          city={city}
        />
      </section>
    </section>
  );
};

const memoOfferInfo = memo(OfferInfo);
export default memoOfferInfo;

