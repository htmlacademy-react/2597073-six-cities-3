import {Link} from 'react-router-dom';
import {RoutesEndpoints} from '../Router/const.ts';

const GuestUserNavigation = () => (
  <li className="header__nav-item user">
    <Link className="header__nav-link header__nav-link--profile" to={RoutesEndpoints.Login}>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </Link>
  </li>
);

export default GuestUserNavigation;
