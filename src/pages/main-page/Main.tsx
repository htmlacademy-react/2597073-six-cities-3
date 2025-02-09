import {JSX, useEffect} from 'react';
import OffersList from '../../component/Offers-list/OffersList.tsx';
import CitiesList from '../../component/Cities-list/CitiesList.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {fetchAllOffers} from '../../axios/api-actions.ts';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllOffers());
  }, [dispatch]);

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
