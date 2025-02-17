import {Link} from 'react-router-dom';
import {RoutesEndpoints} from '../Router/const.ts';
import {JSX} from 'react';
import UserNavigation from '../UserNavigation/UserNavigation.tsx';

const Header = (): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to={RoutesEndpoints.Main} className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </Link>
        </div>
        <nav className="header__nav">
          <UserNavigation/>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
