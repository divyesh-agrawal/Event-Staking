import React from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ReactComponent as LogoIcon } from '@assets/images/logo-icon.svg';
import { ReactComponent as Logo } from '@assets/images/logo.svg';
import StyledLink from '@components/Link';
import Menu from '@components/Menu';
import { ACCOUNT_MENU } from '@constants/commonConstants';
import ROUTE_PATHS from '@constants/routeConstants';
import { BREAKPOINT_NAMES } from '@constants/themeConstants';

import { HeaderAppBar, HeaderToolBar } from './Header.styles';

const { root: rootPath, login: loginPath } = ROUTE_PATHS;

const { md } = BREAKPOINT_NAMES;

/** Main Header Component */
const Header = (props) => {
  const { isUserAuthenticated, username, avatar, logout } = props;

  const {
    breakpoints: { up: breakpointUp },
  } = useTheme();

  const isDesktop = useMediaQuery(breakpointUp(md));

  return (
    <Box minHeight={64}>
      <HeaderAppBar>
        <HeaderToolBar color="white">
          <StyledLink to={rootPath} isFlex>
            {isDesktop ? <Logo width={150} /> : <LogoIcon width={45} />}
          </StyledLink>
          <Box>
            {isUserAuthenticated ? (
              <Menu
                menuItems={ACCOUNT_MENU}
                userName={username}
                {...(avatar && { avatarImg: avatar })}
                logout={logout}
              />
            ) : (
              <StyledLink to={loginPath} isFlex>
                Login
              </StyledLink>
            )}
          </Box>
        </HeaderToolBar>
      </HeaderAppBar>
    </Box>
  );
};

Header.defaultProps = {
  username: 'user',
};

export default Header;
