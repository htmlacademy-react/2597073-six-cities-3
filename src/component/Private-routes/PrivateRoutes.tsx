import {Location, Navigate, useLocation} from 'react-router-dom';
import {ReactNode} from 'react';
import {useAuth} from '../../hooks/store.ts';
import {RoutesEndpoints} from '../Router/const.ts';

type PrivateRouteProp = {
  children: ReactNode;
}

type TFrom = {
  from: Location;
}

function PrivateRoutes({children}: PrivateRouteProp): ReactNode {
  const hasAccess = useAuth();
  const location = useLocation() as Location<TFrom>;
  const pathLoginPage = location.pathname === RoutesEndpoints.Login;

  if (hasAccess && pathLoginPage) {
    const from = location.state?.from || RoutesEndpoints.Main;
    return <Navigate to={from} />;
  }

  if (!hasAccess && !pathLoginPage) {
    return <Navigate to={RoutesEndpoints.Login} state={{from: location}}/>;
  }

  return children;
}

export default PrivateRoutes;
