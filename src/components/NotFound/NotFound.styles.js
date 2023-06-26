import { styled } from '@mui/material';

import { ReactComponent as NotFoundSvg } from '@assets/images/notfound.svg';
import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

const StyledNotFoundSvg = styled(NotFoundSvg)(
  ({
    theme: {
      typography: { pxToRem },
      breakpoints: { up: breakpointUp },
    },
  }) => ({
    [breakpointUp(md)]: {
      width: pxToRem(896),
      marginInline: 'auto',
      display: 'block',
    },
  })
);

export default StyledNotFoundSvg;
