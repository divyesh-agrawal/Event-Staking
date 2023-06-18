import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

const StyledContainer = styled(Container)(({ theme }) => {
  const {
    breakpoints: { up: breakpointUp },
  } = theme;

  return {
    [breakpointUp(md)]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  };
});

export default StyledContainer;
