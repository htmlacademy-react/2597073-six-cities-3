import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main-page/Main.tsx';
import NotFound from '../../pages/notFound-page/NotFound.tsx';
import Login from '../../pages/login-page/Login.tsx';
import Favorites from '../../pages/favorites-page/Favorites.tsx';
import Offer from '../../pages/offer-page/Offer.tsx';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main amountPlacesRent={312} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={
          <PrivateRoutes>
            <Favorites/>
          </PrivateRoutes>
        }
        />
        <Route path="/offer" element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
