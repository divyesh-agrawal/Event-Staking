import { createTheme } from '@mui/material/styles';

import BREAKPOINTS from './breakpoints';
import { ALTO, PRIMARY_MAIN, SECONDARY_MAIN, WHITE } from './colors';
import PALETTE from './palette';
import STYLE_OVERRIDES from './styleOverrides';
import TYPOGRAPHY from './typography';

const defaultTheme = createTheme();
const { pxToRem } = defaultTheme.typography;

/** Defines all global styles including Colors, Breakpoints and Typography */
const THEME = createTheme({
  palette: PALETTE,
  breakpoints: BREAKPOINTS,
  typography: TYPOGRAPHY,
  spacing: pxToRem,
  components: {
    MuiCssBaseline: {
      styleOverrides: STYLE_OVERRIDES,
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlinedBlue' },
          style: {
            background: PRIMARY_MAIN,
            color: WHITE,
            border: `1px solid ${PRIMARY_MAIN}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            '&:disabled': { color: ALTO.dark },

            '&:hover': {
              background: 'transparent',
              color: PRIMARY_MAIN,
            },
          },
        },
        {
          props: { variant: 'outlinedWhite' },
          style: {
            background: WHITE,
            color: PRIMARY_MAIN,
            border: `1px solid ${WHITE}`,
            whiteSpace: 'nowrap',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:disabled': { color: SECONDARY_MAIN },

            '&:hover': {
              background: 'transparent',
              color: WHITE,
            },
          },
        },
      ],
      defaultProps: {
        variant: 'outlinedBlue',
      },
    },
    MuiAvatar: {
      defaultProps: {
        variant: 'rounded',
      },
    },
  },
});

export default THEME;
