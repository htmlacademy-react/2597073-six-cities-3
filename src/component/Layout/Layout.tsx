import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.tsx';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
