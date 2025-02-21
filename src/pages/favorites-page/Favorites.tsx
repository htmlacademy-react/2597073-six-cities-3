import {JSX} from 'react';
import FavoritesOffersList from '../../component/Favorites-offers-list/FavoritesOffersList.tsx';
import Footer from '../../component/Footer/Footer.tsx';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <FavoritesOffersList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
