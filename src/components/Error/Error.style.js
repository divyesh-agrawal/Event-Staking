import { styled } from '@mui/material';

import { ReactComponent as ErrorSvg } from '@assets/images/error.svg';
import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { lg } = BREAKPOINT_NAMES;

const StyledErrorSvg = styled(ErrorSvg)(
  ({
    theme: {
      typography: { pxToRem },
      breakpoints: { up: breakpointUp },
    },
  }) => ({
    width: pxToRem(256),
    marginInline: 'auto',
    display: 'block',
    [breakpointUp(lg)]: {
      width: pxToRem(592),
    },
  })
);

export default StyledErrorSvg;
