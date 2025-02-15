import {useAppDispatch, useAppSelector, useAuth} from '../../hooks/store.ts';
import {Link} from 'react-router-dom';
import {RoutesEndpoints} from '../Router/const.ts';
import {JSX} from 'react';
import {logout} from '../../store/thunk/user.ts';

const Header = (): JSX.Element => {
  const isAuth = useAuth();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.AuthInfo);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={RoutesEndpoints.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {isAuth ? (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link onClick={() => {
                    dispatch(logout());
                  }} to={RoutesEndpoints.Main} className="header__nav-link"
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={RoutesEndpoints.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
