import React, { Fragment, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NotificationsIcon from '@mui/icons-material/Notifications';
import map from 'lodash/map';

import defaultAvatar from '@assets/images/avatar.png';
import StyledLink from '@components/Link';
import { BREAKPOINT_NAMES } from '@constants/themeConstants';
import { scrollToTop } from '@utils/commonUtils';

import { StyledIconButton, StyledMenu } from './Menu.styles';

const { md } = BREAKPOINT_NAMES;

/** Renders Dropdown Menu */
const Menu = (props) => {
  const { menuItems, avatarImg, avatarVariant, userName, logout, isIcon, noText } = props;

  /** To store an HTML element, used to set the position of the menu. */
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    breakpoints: { up: breakpointUp },
  } = useTheme();

  const isDesktop = useMediaQuery(breakpointUp(md));

  const menuOpen = Boolean(anchorEl);

  /** To change the state on Avatar click
   * @param {*} event: Click Event Object
   */
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /** To clear the state on Menu close */
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment key="menu">
      <StyledIconButton
        onClick={handleMenuOpen}
        {...(menuOpen && { 'aria-controls': 'account-menu' })}
        aria-haspopup="true"
        {...(menuOpen && { 'aria-controls': 'true' })}
        sx={{ color: 'white' }}
        disableRipple
      >
        {isIcon ? <NotificationsIcon />:
        <Avatar
          src={avatarImg}
          variant={avatarVariant}
          sx={{ ...(isDesktop && { marginRight: 10 }) }}
        />}

        {isDesktop && userName !== undefined && !noText && (
          <Fragment key="userDropDown">
            {userName} <KeyboardArrowDownIcon />
          </Fragment>
        )}
      </StyledIconButton>
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={menuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
      >
        {map(menuItems, ({ link, icon: Icon, name }) => (
          <MenuItem
            key={link}
            onClick={name.toLowerCase() !== 'logout' ? handleMenuClose : logout}
            sx={{ cursor: 'pointer' }}
          >
            {name.toLowerCase() !== 'logout' ? (
              <StyledLink onClick={scrollToTop} to={link}>
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
                {name}
              </StyledLink>
            ) : (
              <Fragment key="logout">
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
                {name}
              </Fragment>
            )}
          </MenuItem>
        ))}
      </StyledMenu>
    </Fragment>
  );
};

Menu.defaultProps = {
  avatarImg: defaultAvatar,
  avatarVariant: 'rounded',
  userName: 'User',
};

export default Menu;
