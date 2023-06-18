import { Paper, styled } from '@mui/material';

import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

const StyledPaper = styled(Paper)(
  ({
    theme: {
      spacing,
      breakpoints: { up: breakpointUp },
    },
  }) => ({
    padding: spacing(16, 16, 24, 13),
    marginTop: 16,
    borderRadius: 4,

    [breakpointUp(md)]: {
      padding: spacing(24, 24, 32),
      minWidth: 380,
    },
  })
);

export default StyledPaper;
