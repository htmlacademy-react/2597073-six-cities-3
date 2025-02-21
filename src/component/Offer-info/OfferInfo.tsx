import OfferImages from '../Offer-images/OfferImages.tsx';
import OfferGoods from '../Offer-goods/OfferGoods.tsx';
import ReviewsList from '../Review-list/ReviewsList.tsx';
import CommentForm from '../Comment-form/CommentForm.tsx';
import Map from '../Map/Map.tsx';
import {MAP_ZOOM_OFFER} from '../../consts.ts';
import {ratingCalculate} from '../../utils.ts';
import {addPluralS} from '../../pages/offer-page/utils.ts';
import {useAuth} from '../../hooks/store.ts';
import OfferHostInfo from '../Offer-host/OfferHost.tsx';
import {memo} from 'react';
import ToggleFavoriteButton from '../Toggle-favorite-button/ToggleFavoriteButton.tsx';
import {TFullOffer, TOffer} from '../Types/types.ts';

type TOfferInfo = {
  currentOffer: TFullOffer;
  offerId: string;
  nearOffers: TOffer[];
}

const OfferInfo = ({currentOffer,offerId,nearOffers}: TOfferInfo) => {
  const {id, images, description, isFavorite, city, isPremium, title, rating, type, goods, maxAdults, bedrooms, price, host} = currentOffer;

  const nearAndCurrentOffers = [...nearOffers, currentOffer];
  const isAuth = useAuth();

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
            <ToggleFavoriteButton
              id={id}
              isFavorite={isFavorite}
              className="offer"
              width="31"
              height="33"
              isAuth={isAuth}
            />
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
            {isAuth && <CommentForm offerId={offerId}/>}
            {!isAuth && <div style={{marginLeft: '37%'}}>Вы не авторизованы!</div>}
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

export default memo(OfferInfo);

