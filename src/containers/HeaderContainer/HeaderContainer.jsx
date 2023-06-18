import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '@components/Header';
import { LOCAL_STORAGE_KEY } from '@constants/commonConstants';
import ROUTE_PATHS from '@constants/routeConstants';
import { clearUser } from '@redux/slice/authSlice';
import { clearData } from '@utils/commonUtils';

const { login: loginPath } = ROUTE_PATHS;

/** Container for Managing Header */
const HeaderContainer = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  /** To Logout User */
  const handleLogout = () => {
    clearData({ key: LOCAL_STORAGE_KEY });
    dispatch(clearUser());
    navigate(loginPath);
  };

  return (
    <Header
      avatar={user.avatar}
      logout={handleLogout}
      username={user.name || 'user'}
    />
  );
};

export default HeaderContainer;
