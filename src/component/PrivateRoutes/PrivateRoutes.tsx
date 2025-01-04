import {Navigate} from 'react-router-dom';
import {JSX} from 'react';

type PrivateRouteProp = {
  children: JSX.Element;
}

function PrivateRoutes({children}: PrivateRouteProp, hasAccess: boolean): JSX.Element {
  hasAccess = false;
  return hasAccess ? children : <Navigate to='/login'/>;
}

export default PrivateRoutes;
