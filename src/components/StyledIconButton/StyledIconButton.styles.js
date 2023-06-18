import { alpha, IconButton, styled } from '@mui/material';

import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

const StyledIconButton = styled(IconButton)(
  ({
    theme: {
      typography: { pxToRem },
      palette,
      breakpoints: { up: breakpointUp },
    },
  }) => {
    const {
      primary: { light: primaryLight },
      black,
    } = palette;

    return {
      borderRadius: '50%',
      fontSize: pxToRem(27),
      padding: 0,
      background: primaryLight,

      [breakpointUp(md)]: {
        fontSize: pxToRem(25),
        padding: pxToRem(4),
      },

      '&:hover,&:focus': {
        boxShadow: `0 ${pxToRem(6)} ${pxToRem(5)} ${alpha(black, 0.35)}`,
      },
    };
  }
);

export default StyledIconButton;
