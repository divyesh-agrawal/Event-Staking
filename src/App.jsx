import React from "react";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import SnackBar from '@components/SnackBar';
import AuthenticationContainer from '@containers/AuthenticationContainer';
import Router from '@routes/Router';
import THEME from '@theme/theme';

const App = () => (
    <ThemeProvider theme={THEME}>
    <CssBaseline />
    <SnackBar />
    <AuthenticationContainer>
      <RouterProvider router={Router} />
    </AuthenticationContainer>
  </ThemeProvider>
);

export default App;
