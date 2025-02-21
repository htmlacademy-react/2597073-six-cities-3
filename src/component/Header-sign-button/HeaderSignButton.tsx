import {memo} from 'react';
import {RoutesEndpoints} from '../Router/const.ts';
import {Link, useNavigate} from 'react-router-dom';
import {logout} from '../../store/thunk/user.ts';
import {toast} from 'react-toastify';
import {clearSlices} from '../Auth-user-navigation/clearSlices.ts';
import {useAppDispatch} from '../../hooks/store.ts';

type HeaderSignButtonProps = {
  isAuth: boolean;
}

const HeaderSignButton = ({isAuth}: HeaderSignButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      dispatch(logout());
      navigate('/');
      toast.success('Logged out');
      clearSlices(dispatch);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'Something went wrong';
      toast.error(errorMessage);
    }
  };

  return (
    <li className="header__nav-item user">
      {isAuth ? (
        <a onClick={logoutHandler} className="header__nav-link">
          <span className="header__signout">Sign out</span>
        </a>
      ) : (
        <Link className="header__nav-link header__nav-link--profile" to={RoutesEndpoints.Login}>
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      )}
    </li>
  );
};

export default memo(HeaderSignButton);
