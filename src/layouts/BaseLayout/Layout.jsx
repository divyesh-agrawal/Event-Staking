import React, { Fragment } from 'react';

import Box from '@mui/material/Box';

import HeaderContainer from '@containers/HeaderContainer';

import StyledContainer from './Layout.styles';

/** Layout for rendering different components in single page */
const Layout = (props) => {
  const { children, showHeader } = props;
  
  return (
    <Fragment key="layout">
      {showHeader && <HeaderContainer />}
      <Box display="flex" width="100%">
        <StyledContainer maxWidth="lg">{children}</StyledContainer>
      </Box>
    </Fragment>
  );
};

export default Layout;
