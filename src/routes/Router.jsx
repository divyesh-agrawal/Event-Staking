import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import ROUTE_PATHS from '@constants/routeConstants';
import ErrorPage from '@pages/ErrorPage';
import LoginPage from '@pages/LoginPage';
import ProfilePage from '@pages/ProfilePage';
import Home from '@src/pages/HomePage';

import ProtectedRoute from './ProtectedRoute';

/** To control components and corresponding URLs */
const Router = createBrowserRouter([
  {
    path: ROUTE_PATHS.root,
    element: 
      (<ProtectedRoute component={<LoginPage />} />),
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTE_PATHS.profile,
    element: (<ProtectedRoute component={<ProfilePage />} />),
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTE_PATHS.home,
    element: (<ProtectedRoute component={<Home />} />),
    errorElement: <ErrorPage />,
  },
]);

export default Router;
