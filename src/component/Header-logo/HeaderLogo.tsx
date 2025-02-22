import {RoutesEndpoints} from '../Router/const.ts';
import {Link} from 'react-router-dom';
import {memo} from 'react';

const HeaderLogo = () => (
  <Link to={RoutesEndpoints.Main} className="header__logo-link header__logo-link--active">
    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
  </Link>
);

export default memo(HeaderLogo);
