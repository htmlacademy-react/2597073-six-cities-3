import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {useNavigate} from 'react-router-dom';
import {logout} from '../../store/thunk/user.ts';
import {toast} from 'react-toastify';

const AuthUserNavigation = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.AuthInfo);
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      dispatch(logout());
      navigate('/');
      toast.success('Logged out');
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'Something went wrong';
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{user?.email}</span>
          <span className="header__favorite-count">3</span>
        </a>
      </li>
      <li className="header__nav-item">
        <a onClick={logoutHandler} className="header__nav-link">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
};

export default AuthUserNavigation;
