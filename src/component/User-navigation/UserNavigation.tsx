import {useAuth} from '../../hooks/store.ts';
import {JSX} from 'react';
import AuthUserNavigation from '../Auth-user-navigation/AuthUserNavigation.tsx';
import HeaderSignButton from '../Header-sign-button/HeaderSignButton.tsx';

const UserNavigation = (): JSX.Element => {
  const isAuth = useAuth();

  return (
    <ul className="header__nav-list">
      {isAuth && <AuthUserNavigation/>}
      <HeaderSignButton isAuth={isAuth} />
    </ul>
  );
};

export default UserNavigation;
