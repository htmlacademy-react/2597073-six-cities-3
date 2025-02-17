import {JSX, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found-page/NotFound.tsx';
import ReviewsList from '../../component/Review-list/ReviewsList.tsx';
import Map from '../../component/Map/Map.tsx';
import {getNearOffers, addPluralS} from './utils.ts';
import Card from '../../component/Card/Card.tsx';
import {MAP_ZOOM_OFFER} from '../../consts.ts';
import {useAppDispatch, useAppSelector, useAuth} from '../../hooks/store.ts';
import {fetchNearbyOffers, fetchOffer} from '../../store/thunk/offers.ts';
import {fetchOffersStatus} from '../../store/slices/offers.ts';
import Loader from '../../component/Loader/Loader.tsx';
import {ratingCalculate} from '../../utils.ts';
import {selectNearbyOffers, selectOffer, selectOfferStatus} from '../../store/selectors/offerSelector.ts';
import {fetchAllComments} from '../../store/thunk/comments.ts';
import {selectAllComments} from '../../store/selectors/commentsSelector.ts';
import CommentForm from '../../component/CommentForm/CommentForm.tsx';


function Offer(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAuth();
  const loadingOfferStatus = useAppSelector(selectOfferStatus);
  const currentOffer = useAppSelector(selectOffer);
  const nearbyOffers = useAppSelector(selectNearbyOffers);
  const reviews = useAppSelector(selectAllComments);

  const id = String(useParams().id);

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchAllComments(id));
  },[dispatch, id]);

  if (loadingOfferStatus === fetchOffersStatus.Loading) {
    return <Loader />;
  }

  if (!currentOffer || loadingOfferStatus === fetchOffersStatus.Error) {
    return <NotFound/>;
  }
  const {
    images,
    price,
    rating,
    host,
    goods,
    title: titleOffer,
    type: offerType,
    isFavorite,
    isPremium,
    bedrooms,
    maxAdults,
    description,
  } = currentOffer;

  const {avatarUrl, isPro, name} = host;

  const currentCountBedRooms = addPluralS('Bedroom', 'Bedrooms', bedrooms);
  const currentMaxAdults = `Max ${addPluralS('adult', 'adults', maxAdults)}`;

  const nearOffers = getNearOffers(currentOffer, nearbyOffers);
  const nearAndCurrentOffers = [...nearOffers, currentOffer];

  const ratingPercent = ratingCalculate(rating);

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img src={image} className="offer__image" alt="offer's photo" />
                </div>
              ))}
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
                  {titleOffer}
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
                  {offerType}
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
                  {goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {name}
                  </span>
                  <span className="offer__user-status">
                    {isPro && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={reviews}/>
                {isAuth ? (
                  <CommentForm
                    offerId={id}
                  />
                ) : <div style={{marginLeft: '40%'}}>Вы не авторизованы!</div>}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              zoom={MAP_ZOOM_OFFER} selectedPoint={currentOffer}
              points={nearAndCurrentOffers} city={currentOffer.city}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((offer) => (
                <Card offer={offer} type="cities" key={offer.id}/>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
