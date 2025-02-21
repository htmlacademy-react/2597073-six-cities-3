import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main-page/Main.tsx';
import NotFound from '../../pages/not-found-page/NotFound.tsx';
import Favorites from '../../pages/favorites-page/Favorites.tsx';
import Offer from '../../pages/offer-page/Offer.tsx';
import PrivateRoutes from '../Private-routes/PrivateRoutes.tsx';
import { RoutesEndpoints } from './const.ts';
import Login from '../../pages/login-page/Login.tsx';
import {getToken} from '../../axios/token.ts';
import {useEffect} from 'react';
import {checkAuth} from '../../store/thunk/user.ts';
import {useAppDispatch, useAppSelector, useAuth} from '../../hooks/store.ts';
import Loader from '../Loader/Loader.tsx';
import {selectIsAuthLoading} from '../../store/selectors/userSelectors.ts';
import Layout from '../Layout/Layout.tsx';

function Router() {
  const token = getToken();
  const authStatus = useAppSelector(selectIsAuthLoading);
  const isAuth = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(checkAuth());
    }
  }, [token, dispatch]);

  if (authStatus && !isAuth) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEndpoints.Main} element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path={RoutesEndpoints.Favorites} element={
            <PrivateRoutes>
              <Favorites/>
            </PrivateRoutes>
          }
          />
          <Route path={RoutesEndpoints.Offers} element={<Offer/>} />
        </Route>
        <Route path={RoutesEndpoints.Login} element={
          <PrivateRoutes>
            <Login/>
          </PrivateRoutes>
        }
        />
        <Route path={RoutesEndpoints.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
