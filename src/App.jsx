import React, { useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import SnackBar from '@components/SnackBar';
import Router from '@routes/Router';
import THEME from '@theme/theme';
import { isUserAuthenticated } from './utils/commonUtils';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/slice/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const isUser = await isUserAuthenticated();
      if (isUser) {
        dispatch(setUser());
      }
    })();
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <SnackBar />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
};

export default App;
