import React from 'react';

import { Box, Typography } from '@mui/material';

import StyledButton from '@components/Button';
import StyledLink from '@components/Link';
import StyledNotFoundSvg from '@components/NotFound/NotFound.styles';
import { LINK_PATHS } from '@constants/routeConstants';
import { scrollToTop } from '@utils/commonUtils';

const { root: rootRoute } = LINK_PATHS;

/** Main Not Found Component */
const NotFound = () => (
  <Box
    pb={48}
    pt={{ xs: 35, md: 29 }}
    minHeight="100vh"
    bgcolor="primary.light"
  >
    <StyledNotFoundSvg />
    <Box mt={{ xs: 45, md: 0 }} px={12}>
      <Typography variant="h1" align="center">
        Page Not Found
      </Typography>
      <Typography variant="body1" align="center" color="primary" mt={8}>
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </Typography>
      <StyledLink onClick={scrollToTop} to={rootRoute}>
        <StyledButton variant="outlined">Go back home</StyledButton>
      </StyledLink>
    </Box>
  </Box>
);

export default NotFound;
