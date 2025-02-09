import {useState, JSX, FC} from 'react';
import Card from '../Card/Card.tsx';
import {TOffer} from '../../mocks/offer.ts';
import Map from '../Map/Map.tsx';
import {Cities, MAP_ZOOM_MAIN} from '../../consts.ts';
import SortingOptions from '../SortingOptions/SortingOptions.tsx';
import {OfferListProps, TSortOptions} from './types.ts';
import {sortingOffers} from './utils.ts';
import Loader from '../Loader/Loader.tsx';
import {Nullable} from 'vitest';
import {useAppSelector} from '../../hooks/store.ts';
import {fetchOffersStatus} from '../../store/slices/offers.ts';

const OffersList: FC<OfferListProps> = ({currentOffers,amountPlacesRent,currentCity}): JSX.Element => {
  const [offerIsActive, setOfferIsActive] = useState<Nullable<TOffer>>(null);
  const [optionsForm, setOptionsForm] = useState<TSortOptions>({formToggle: false, selectedOption: 'Popular'});
  const loadingOffersStatus = useAppSelector((state) => state.status);

  const currentMapCity = Cities.find((city) => city.name === currentCity) || Cities[0];

  const handleHover = (offer: Nullable<TOffer>) => {
    setOfferIsActive(offer);
  };

  const sortOffers = sortingOffers(currentOffers, optionsForm.selectedOption);

  if (loadingOffersStatus === fetchOffersStatus.Pending) {
    return <Loader/>;
  }

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
