import {
  alpha,
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  styled,
  TextField,
  Toolbar
} from '@mui/material';

import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

const HeaderBox = styled(Box)(
  ({
    theme: {
      typography: { pxToRem },
      breakpoints: { up: breakpointUp },
    },
  }) => ({
    minHeight: pxToRem(64),
    paddingRight: pxToRem(8),

    [breakpointUp(md)]: {
      minHeight: pxToRem(65),
      paddingRight: pxToRem(9),
    },
  })
);

const HeaderAppBar = styled(AppBar)(
  ({
    theme: {
      zIndex: { drawer: zIndexDrawer },
      breakpoints: { up: breakpointUp },
      spacing,
      typography: { pxToRem },
    },
  }) => ({
    zIndex: zIndexDrawer + 1,
    boxShadow: 'none',

    '& .MuiToolbar-root': {
      padding: spacing(0, 8, 0, 16),
      minHeight: pxToRem(64),
      [breakpointUp(md)]: {
        minHeight: pxToRem(69),
        padding: spacing(0, 12, 0, 24),
      },
    },
  })
);

const Search = styled('div')(
  ({
    theme: {
      typography: { pxToRem },
      breakpoints: { up: breakpointUp },
      palette,
    },
  }) => {
    const {
      primary: { light: primaryLight },
      black,
    } = palette;

    return {
      position: 'relative',
      borderRadius: pxToRem(20),
      backgroundColor: primaryLight,
      marginLeft: pxToRem(21),
      minWidth: pxToRem(409),
      boxShadow: `0 ${pxToRem(2)} ${pxToRem(5)} ${alpha(black, 0.35)}`,
      display: 'none',
      [breakpointUp(md)]: {
        display: 'block',
      },
    };
  }
);

const SearchIconWrapper = styled('div')(({ theme: { spacing } }) => ({
  padding: spacing(0, 16),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledTextField = styled(TextField)(
  ({
    theme: {
      typography: { pxToRem },
      spacing,
      palette: { primary },
      transitions,
    },
  }) => ({
    color: primary.main,
    width: '100%',
    border: 0,

    '& .MuiOutlinedInput-root': {
      padding: pxToRem(4),
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },

    '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
      transition: transitions.create('width'),
      padding: spacing(8, 8, 8, 40),
    },
  })
);

const HeaderAvatar = styled(Avatar)(
  ({
    theme: {
      typography: { pxToRem },
      palette: { black },
    },
  }) => ({
    width: pxToRem(32),
    height: 'auto',

    '&:hover': {
      boxShadow: `0 ${pxToRem(6)} ${pxToRem(5)} ${alpha(black, 0.35)}`,
    },
  })
);

const StyledMenu = styled(Menu)(
  () =>
    ({
      theme: {
        typography: { pxToRem },
        palette: { black },
      },
    }) => ({
      overflow: 'visible',
      filter: `drop-shadow(0 ${pxToRem(2)} ${pxToRem(8)} ${alpha(
        black,
        0.32
      )})`,
      transformOrigin: { horizontal: 'right', vertical: 'top' },
      anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      elevation: 0,
    })
);

/** Icon Button Component which is visible on in one screen
 * @param visibleIn - Screen in which the Icon Button Component is visible
 */
const ResponsiveIconButton = styled(IconButton, {
  shouldForwardProp: (props) => props !== 'visibleIn',
})(
  ({
    visibleIn,
    theme: {
      breakpoints: { up: breakpointUp },
    },
  }) => ({
    ...(visibleIn === 'desktop' && {
      display: 'none',
      [breakpointUp(md)]: {
        display: 'block',
      },
    }),

    ...(visibleIn === 'mobile' && {
      [breakpointUp(md)]: {
        display: 'none',
      },
    }),
  })
);

const HeaderToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export {
  HeaderAppBar,
  HeaderAvatar,
  HeaderToolBar,
  HeaderBox,
  ResponsiveIconButton,
  Search,
  SearchIconWrapper,
  StyledMenu,
  StyledTextField,
};
