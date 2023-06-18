import { Badge, Drawer, ListItemButton, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

const StyledDrawer = styled(Drawer)(
  ({
    theme: {
      transitions,
      breakpoints: { up: breakpointUp },
    },
  }) => ({
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
    flexShrink: 0,
    width: 304,

    [breakpointUp(md)]: {
      width: 250,
    },

    '& .MuiDrawer-paper': {
      width: 304,

      [breakpointUp(md)]: {
        width: 250,
      },

      boxSizing: 'border-box',
    },
  })
);

const StyledItemButton = styled(ListItemButton)(
  ({
    theme: {
      typography: { pxToRem },
      palette: { common },
      breakpoints: { up: breakpointUp },
    },
    open,
  }) => {
    const { 100: COOL_GRAY100 } = common.COOL_GRAY;

    return {
      paddingLeft: pxToRem(19),
      marginBlock: pxToRem(12),
      paddingBlock: 0,

      ...(open && {
        paddingLeft: 6,
        paddingRight: 2,
        marginLeft: 13,
        marginRight: 14,
        background: COOL_GRAY100,
        borderRadius: pxToRem(32),
      }),

      '& .MuiListItemIcon-root': {
        minWidth: pxToRem(42),
      },

      '& .MuiListItemText-root': {
        maxWidth: pxToRem(198),

        [breakpointUp(md)]: {
          maxWidth: pxToRem(152),
        },
      },

      '& > .nestedList-Text': {
        maxWidth: pxToRem(200),
        margin: '0 auto',
        [breakpointUp(md)]: {
          maxWidth: pxToRem(136),
        },
      },
    };
  }
);

const StyledNavLink = styled(NavLink)(
  ({
    theme: {
      palette: { black, success },
    },
  }) => {
    const { main: successMain } = success;

    return {
      color: black,
      textDecoration: 'none',

      '&.active': {
        color: successMain,
      },
    };
  }
);

const StyledBadge = styled(Badge)(
  ({
    theme: {
      palette: { warning },
    },
  }) => {
    const { light: lightRed, dark: darkRed } = warning;

    return {
      '& .MuiBadge-badge.MuiBadge-standard': {
        background: lightRed,
        color: darkRed,
        position: 'relative',
        transform: 'unset',
      },
    };
  }
);

export { StyledBadge, StyledDrawer, StyledNavLink, StyledItemButton };
