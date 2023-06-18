import { createTheme } from '@mui/material/styles';

import { BREAKPOINT_NAMES, WEIGHTS } from '@constants/themeConstants';

import BREAKPOINTS from './breakpoints';
import { WHITE } from './colors';

const THEME = createTheme({ breakpoints: BREAKPOINTS });

const {
  typography: { pxToRem },
  breakpoints: { up: breakpointUp },
} = THEME;

const { md } = BREAKPOINT_NAMES;

/** To define global typography styles */
const TYPOGRAPHY = {
  fontFamily: 'raleway, sans-serif',
  h1: {
    fontWeight: WEIGHTS.extraBold,
    fontSize: pxToRem(28),

    [breakpointUp(md)]: {
      fontSize: pxToRem(48),
    },
  },
  h2: {
    fontWeight: WEIGHTS.extraBold,
    fontSize: pxToRem(20),

    [breakpointUp(md)]: {
      fontSize: pxToRem(30),
    },
  },
  body1: {
    fontWeight: WEIGHTS.medium,
    fontSize: pxToRem(16),

    [breakpointUp(md)]: {
      fontSize: pxToRem(20),
    },
  },
  body2: {
    fontWeight: WEIGHTS.regular,
    fontSize: pxToRem(32),

    [breakpointUp(md)]: {
      fontSize: pxToRem(40),
    },
  },
  subtitle1: {
    fontWeight: WEIGHTS.regular,
    fontSize: pxToRem(19),

    [breakpointUp(md)]: {
      fontSize: pxToRem(16),
    },
  },
  subtitle2: {
    fontWeight: WEIGHTS.medium,
    fontSize: pxToRem(16),

    [breakpointUp(md)]: {
      fontSize: pxToRem(22),
    },
  },
  button: {
    fontWeight: WEIGHTS.regular,
    fontSize: pxToRem(14),
  },
  background: WHITE,
};

export default TYPOGRAPHY;
