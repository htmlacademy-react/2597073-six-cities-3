import {ChangeEventHandler, Fragment, JSX, useState} from 'react';
import {useParams} from 'react-router-dom';
import {TOffer} from '../../mocks/offer.ts';
import NotFound from '../not-found-page/NotFound.tsx';
import ReviewsList from '../../component/Review-list/ReviewsList.tsx';
import {Reviews} from '../../mocks/reviews.ts';
import Map from '../../component/Map/Map.tsx';
import {getNearOffers, addPluralS} from './utils.ts';
import Card from '../../component/Card/Card.tsx';
import {Cities, MAP_ZOOM_OFFER, StarsData} from '../../consts.ts';
import {useAppSelector} from '../../hooks/store.ts';
import Header from '../../component/Header/Header.tsx';

type ReviewData = {
  comment: string;
  mark: number;
}

let timer: NodeJS.Timeout;

function Offer(): JSX.Element {
  const [commentData, setComment] = useState<ReviewData>({comment: '', mark: 0});
  const offers = useAppSelector((state) => state.offers.offers);
  const currentCity = useAppSelector((state) => state.offers.city);
  const currentOfferCity = Cities.find((city) => city.name === currentCity);

  const { id } = useParams();
  const currentOffer = offers.find((offer: TOffer) => offer.id === id);

  if (!currentOffer || !currentOfferCity) {
    return <NotFound/>;
  }
  const {
    previewImage,
    price,
    title: titleOffer,
    type: offerType,
    isFavorite,
    isPremium,
    bedRoomsCount,
    adultCount
  } = currentOffer;

  const currentCountBedRooms = addPluralS('Bedroom', 'Bedrooms', bedRoomsCount);
  const currentMaxAdults = `Max ${addPluralS('adult', 'adults', adultCount)}`;

  const getCommentHandler: (type: 'mark' | 'comment') => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (type) => (event) => {
    event.stopPropagation();

    const {target: {value}} = event;

    if (type === 'mark') {
      setComment((state) => ({...state, [type]: Number(value)}));
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      setComment((state) => ({...state, [type]: value}));
    },800);
  };

  const nearOffers = getNearOffers(currentOffer, offers);
  const nearAndCurrentOffers = [...nearOffers, currentOffer];

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <img src={previewImage} alt={titleOffer} />
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
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
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
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                    building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where
                    the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList Reviews={Reviews}/>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    {StarsData.map(({value, title}) => (
                      <Fragment key={value}>
                        <input className="form__rating-input visually-hidden" name="rating"
                          defaultChecked={commentData.mark === value}
                          value={value} id={`${value}-stars`}
                          type="radio" onChange={getCommentHandler('mark')}
                        />
                        <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label"
                          title={title}
                        >
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>
                      </Fragment>
                    ))}
                  </div>
                  <textarea
                    onChange={getCommentHandler('comment')}
                    defaultValue={commentData.comment}
                    className="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                  >
                  </textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit"
                      disabled={commentData.comment.length < 50 || !commentData.mark}
                    >Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              zoom={MAP_ZOOM_OFFER} selectedPoint={currentOffer}
              points={nearAndCurrentOffers} city={currentOfferCity}
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
