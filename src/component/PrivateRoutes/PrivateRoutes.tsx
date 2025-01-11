import {Navigate} from 'react-router-dom';
import {ReactNode} from 'react';

type PrivateRouteProp = {
  children: ReactNode;
  hasAccess?: boolean;
}

function PrivateRoutes({children, hasAccess = true}: PrivateRouteProp): ReactNode {
  return hasAccess ? children : <Navigate to='/login'/>;
}

export default PrivateRoutes;
