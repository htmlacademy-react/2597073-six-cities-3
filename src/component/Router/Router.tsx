import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main-page/Main.tsx';
import NotFound from '../../pages/not-found-page/NotFound.tsx';
import Favorites from '../../pages/favorites-page/Favorites.tsx';
import Offer from '../../pages/offer-page/Offer.tsx';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes.tsx';
import { RoutesEndpoints } from './const.ts';
import Login from '../../pages/login-page/Login.tsx';
import {getToken} from '../../axios/token.ts';
import {useEffect} from 'react';
import {checkAuth} from '../../store/thunk/user.ts';
import {useAppDispatch} from '../../hooks/store.ts';

function Router() {
  const token = getToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(checkAuth());
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEndpoints.Main} element={<Main/>} />
        <Route path={RoutesEndpoints.Login} element={
          <PrivateRoutes>
            <Login/>
          </PrivateRoutes>
        }
        />
        <Route path={RoutesEndpoints.Favorites} element={
          <PrivateRoutes>
            <Favorites/>
          </PrivateRoutes>
        }
        />
        <Route path={RoutesEndpoints.Offers} element={<Offer/>} />
        <Route path={RoutesEndpoints.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
