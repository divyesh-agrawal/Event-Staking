import React from 'react';

import { Box, Typography } from '@mui/material';

import StyledButton from '@components/Button';
import StyledErrorSvg from '@components/Error/Error.style';
import StyledLink from '@components/Link';
import { LINK_PATHS } from '@constants/routeConstants';
import { scrollToTop } from '@utils/commonUtils';

const { root: rootRoute } = LINK_PATHS;

/** Component to Display Error */
const ErrorComponent = () => (
  <Box pb={40} pt={24} minHeight="100vh" bgcolor="primary.light">
    <StyledErrorSvg />
    <Box
      mt={{
        xs: 38,
        md: 48,
      }}
      px={12}
    >
      <Typography variant="h1" align="center">
        Something has gone seriously wrong
      </Typography>
      <Typography variant="body1" align="center" color="primary" mt={10}>
        It&apos;s always time for a coffee break We should be back by the time
        you finish your coffee.
      </Typography>
      <StyledLink onClick={scrollToTop} to={rootRoute}>
        <StyledButton variant="outlined">Go back home</StyledButton>
      </StyledLink>
    </Box>
  </Box>
);

export default ErrorComponent;
