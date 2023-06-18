import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

// import { ReactComponent as Logo } from '@assets/images/logo.svg';
import questionMark from '@assets/images/question-mark.png';
import StyledLink from '@components/Link';
import ResponsiveBox from '@components/ResponsiveBox';
import ResponsiveTypography from '@components/ResponsiveTypography';
import ROUTE_PATHS from '@constants/routeConstants';
import { BREAKPOINT_NAMES } from '@constants/themeConstants';
import Layout from '@src/layouts/BaseLayout';

import StyledBox from './ErrorPage.styles';

const { root: rootPath } = ROUTE_PATHS;

const { md } = BREAKPOINT_NAMES;

const ErrorPage = () => {
  const {
    breakpoints: { up: breakpoint },
  } = useTheme();

  const isDesktop = useMediaQuery(breakpoint(md));

  /** This hook returns any error thrown */
  const error = useRouteError();

  return (
    <Layout>
      <StyledBox>
        <ResponsiveBox>
          {/* <StyledLink to={rootPath}>
            <Logo width={300} />
          </StyledLink> */}
        </ResponsiveBox>
        <Box display="flex" marginTop={40} justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems={isDesktop ? 'flex-start' : 'center'}
            width="70%"
          >
            <Box marginBottom={20}>
              <ResponsiveTypography
                lg={150}
                sm={100}
                variant="h1"
                align={isDesktop ? 'left' : 'center'}
              >
                {/* It first checks that error thrown is of 4xx or 5xx and if not prints 500 */}
                {(isRouteErrorResponse(error) && error.status) || 500}
              </ResponsiveTypography>
              <Typography variant="body1" align={isDesktop ? 'left' : 'center'}>
                {(isRouteErrorResponse(error) && error?.error?.message) ||
                  'Unknown Error Occurred'}
              </Typography>
            </Box>
            <Button component={StyledLink} to={rootPath}>
              Back to Home
            </Button>
          </Box>
          {isDesktop && (
            <Box>
              <img
                src={questionMark}
                alt="Question Mark"
                width="70%"
                height="auto"
              />
            </Box>
          )}
        </Box>
      </StyledBox>
    </Layout>
  );
};

export default ErrorPage;
