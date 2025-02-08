import {useState, JSX, FC} from 'react';
import Card from '../Card/Card.tsx';
import {TOffer} from '../../mocks/offer.ts';
import Map from '../Map/Map.tsx';
import {Cities, MAP_ZOOM_MAIN} from '../../consts.ts';
import NotFound from '../../pages/not-found-page/NotFound.tsx';
import SortingOptions from '../SortingOptions/SortingOptions.tsx';
import {OfferListProps, TSortOptions} from './types.ts';
import {sortingOffers} from './utils.ts';

const OffersList: FC<OfferListProps> = ({currentOffers,amountPlacesRent,currentCity}): JSX.Element => {
  const [offerIsActive, setOfferIsActive] = useState<TOffer | undefined>(undefined);
  const [optionsForm, setOptionsForm] = useState<TSortOptions>({formToggle: false, selectedOption: 'Popular'});

  const currentMapCity = Cities.find((city) => city.name === currentCity);
  if (!currentMapCity) {
    return <NotFound/>;
  }
  const handleHover = (offer?: TOffer) => {
    setOfferIsActive(offer);
  };

  const sortOffers = sortingOffers(currentOffers, optionsForm.selectedOption);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{amountPlacesRent} place{amountPlacesRent > 1 && 's'} to stay in {currentCity}</b>
        <SortingOptions optionsForm={optionsForm} setOptionsForm={setOptionsForm}/>
        <div className="cities__places-list places__list tabs__content">
          {sortOffers.map((offer) => <Card type="cities" handleHover={handleHover} offer={offer} key={offer.id} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map zoom={MAP_ZOOM_MAIN} points={currentOffers} selectedPoint={offerIsActive} city={currentMapCity}/>
        </section>
      </div>
    </div>
  );
};

export default OffersList;
