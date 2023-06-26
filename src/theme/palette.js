import {
  ALTO,
  BLACK,
  GRAY,
  PRIMARY_LIGHT,
  PRIMARY_MAIN,
  SECONDARY_MAIN,
  WHITE,
} from './colors';

/** Overall Theme Color Definitions */
const PALETTE = {
  primary: {
    light: PRIMARY_LIGHT,
    main: PRIMARY_MAIN,
  },
  secondary: {
    main: SECONDARY_MAIN,
  },
  grey: {
    100: ALTO.light,
    200: ALTO.dark,
    800: GRAY,
  },
  white: WHITE,
  black: BLACK,
};

export default PALETTE;
