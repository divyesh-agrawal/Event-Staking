import React from 'react';

import {
  Box,
  Divider,
} from '@mui/material';
import PropTypes from 'prop-types';

import {
  HeaderAppBar,
  HeaderBox,
  HeaderToolBar
} from '@components/Header/Header.styles';
import Menu from '@components/Menu';
import { ACCOUNT_MENU } from '@constants/commonConstants';

/** Main Header Component
 * @function logout - To enable user logout
 * @param avatar - Avatar of Logged In User
 * @param username - Name of User
 */
const Header = (headerProps) => {
  const {
    logout,
    avatar,
    username,
  } = headerProps;

  return (
    <HeaderBox>
      <HeaderAppBar>
        <HeaderToolBar>
          <Menu
                menuItems={ACCOUNT_MENU}
                noText
                isIcon
              />
          <Menu
                menuItems={ACCOUNT_MENU}
                userName={username}
                {...(avatar && { avatarImg: avatar })}
                logout={logout}
              />
        </HeaderToolBar>
        <Divider sx={{ zIndex: -2 }} />
      </HeaderAppBar>
      <Box component="main" flexGrow={1} p={3} />
    </HeaderBox>
  );
};

export default Header;
