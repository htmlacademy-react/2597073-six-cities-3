import {useState, JSX, FC} from 'react';
import Card from '../Card/Card.tsx';
import {MainProps} from '../../pages/main-page/Main.tsx';
import {Nullable} from 'vitest';
import {CardProps} from '../../mocks/offer.ts';

const OffersList: FC<MainProps> = ({CardDataCities,amountPlacesRent}): JSX.Element => {
  const [, setOfferIsActive] = useState<Nullable<CardProps>>(null);
  const handleHover = (offer?: CardProps) => {
    setOfferIsActive(offer);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{amountPlacesRent} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {CardDataCities.map((offer) => <Card handleHover={handleHover} offer={offer} key={offer.id} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
};

export default OffersList;
