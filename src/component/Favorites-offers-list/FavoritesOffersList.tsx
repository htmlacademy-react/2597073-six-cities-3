import {useAppSelector} from '../../hooks/store.ts';
import Loader from '../Loader/Loader.tsx';
import {fetchOffersStatus} from '../../store/slices/offers.ts';
import {selectFavorites, selectFavoritesOffersStatus} from '../../store/selectors/favoritesSelectors.ts';
import Card from '../Card/Card.tsx';
import EmptyFavorites from '../Favorites-empty/EmptyFavorites.tsx';
import {sortFavoritesByCity} from './utils.ts';
import {Link} from 'react-router-dom';
import {RoutesEndpoints} from '../Router/const.ts';
import {TFavoriteOffer} from '../../store/types.ts';
import {CityName} from '../Types/types.ts';

const FavoritesOffersList = () => {
  const favoritesOffersLoading = useAppSelector(selectFavoritesOffersStatus);
  const favorites = useAppSelector(selectFavorites);

  if (favoritesOffersLoading === fetchOffersStatus.Loading) {
    return <Loader/>;
  }
  if (favorites.length === 0) {
    return <EmptyFavorites />;
  }

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(sortFavoritesByCity(favorites)).map(([city, offers]: [CityName, TFavoriteOffer[]]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={RoutesEndpoints.Main}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offers.map((offer) => (
                <Card key={offer.id} offer={offer} type="favorites" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FavoritesOffersList;
