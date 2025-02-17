import {useAuth} from '../../hooks/store.ts';
import {JSX} from 'react';
import AuthUserNavigation from '../AuthUserNavigation/AuthUserNavigation.tsx';
import GuestUserNavigation from '../GuestUserNavigation/GuestUserNavigation.tsx';

const UserNavigation = (): JSX.Element => {
  const isAuth = useAuth();

  const navStrategies = {
    auth: (
      <AuthUserNavigation/>
    ),
    guest: (
      <GuestUserNavigation/>
    ),
  };

  return (
    <ul className="header__nav-list">
      {isAuth ? navStrategies.auth : navStrategies.guest}
    </ul>
  );
};

export default UserNavigation;
