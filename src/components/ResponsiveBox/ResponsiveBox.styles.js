import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

/** Component to hide things in Particular View */
const ResponsiveBox = styled(Box, {
  shouldForwardProp: (props) => props !== 'hideOnDesktop',
})(({ theme, hideOnDesktop = false }) => {
  const {
    breakpoints: { up: breakpoint },
  } = theme;

  return {
    display: hideOnDesktop ? 'block' : 'none',
    [breakpoint(md)]: {
      display: hideOnDesktop ? 'none' : 'block',
    },
  };
});

export default ResponsiveBox;
