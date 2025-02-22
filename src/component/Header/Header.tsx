import {JSX} from 'react';
import UserNavigation from '../User-navigation/UserNavigation.tsx';
import HeaderLogo from '../Header-logo/HeaderLogo.tsx';

const Header = (): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <HeaderLogo/>
        </div>
        <nav className="header__nav">
          <UserNavigation/>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
