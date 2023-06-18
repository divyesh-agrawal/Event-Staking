import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

/** Component to have Responsive Font Sizes to Typography */
const ResponsiveTypography = styled(Typography, {
  shouldForwardProp: (props) => props !== 'lg' && props !== 'sm',
})(({ theme, lg = 20, sm = 10 }) => {
  const {
    breakpoints: { up: breakpoint },
    typography: { pxToRem },
  } = theme;

  return {
    fontSize: pxToRem(sm),

    [breakpoint(md)]: {
      fontSize: pxToRem(lg),
    },
  };
});

export default ResponsiveTypography;
