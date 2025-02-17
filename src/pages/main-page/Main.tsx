import {JSX, useEffect} from 'react';
import OffersList from '../../component/Offers-list/OffersList.tsx';
import CitiesList from '../../component/Cities-list/CitiesList.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {fetchAllOffers} from '../../store/thunk/offers.ts';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllOffers());
  }, [dispatch]);

  const offers = useAppSelector((state) => state.offers.offers);
  const currentCity = useAppSelector((state) => state.offers.city);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        <div className="cities">
          <OffersList currentOffers={currentOffers} currentCity={currentCity} amountPlacesRent={currentOffers.length} />
        </div>
      </main>
    </div>
  );
}

export default Main;
