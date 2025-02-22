import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.tsx';
import {JSX} from 'react';

const Layout = (): JSX.Element => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
