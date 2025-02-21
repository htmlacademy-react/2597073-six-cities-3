import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {Link} from 'react-router-dom';
import {RoutesEndpoints} from '../Router/const.ts';
import {selectFavorites, selectFavoritesOffersStatus} from '../../store/selectors/favoritesSelectors.ts';
import {useEffect} from 'react';
import {fetchFavoritesOffers} from '../../store/thunk/favorites.ts';
import {fetchOffersStatus} from '../../store/slices/offers.ts';
import Loader from '../Loader/Loader.tsx';

const AuthUserNavigation = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.AuthInfo);
  const favoritesCount = useAppSelector(selectFavorites).length;
  const favoritesLoadingStatus = useAppSelector(selectFavoritesOffersStatus);

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  if (favoritesLoadingStatus === fetchOffersStatus.Loading) {
    return <Loader/>;
  }

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={RoutesEndpoints.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={user?.avatarUrl} alt='Аватар пользователя'/>
        </div>
        <span className="header__user-name user__name">{user?.email}</span>
        <span className="header__favorite-count">{favoritesCount}</span>
      </Link>
    </li>
  );
};

export default AuthUserNavigation;
