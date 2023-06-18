import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import ROUTE_PATHS from '@constants/routeConstants';
import { checkUser, isUserAuthenticated } from '@utils/commonUtils';

const { root, home } = ROUTE_PATHS;

/** To allow only authorized users to access the Page */
const ProtectedRoute = (props) => {
  const { component, loginPath } = props;

  const location = useLocation();

  /** Checks if key is present in local storage, and if yes then checks if data is expired */
  if (checkUser()) {
    return location.pathname === loginPath ? <Navigate to={home} /> : component;
  }
  return location.pathname === loginPath ? component : <Navigate to={root} />;
};

ProtectedRoute.defaultProps = {
  loginPath: root,
};

export default ProtectedRoute;
