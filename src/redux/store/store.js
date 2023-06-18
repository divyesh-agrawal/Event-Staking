import { configureStore } from '@reduxjs/toolkit';

import errorLogger from '@redux/middleware/errorLogger';
import apiSlice from '@redux/slice/apiSlice';
import auth from '@redux/slice/authSlice';
import snackbar from '@redux/slice/snackbarSlice';
import suggestions from '@redux/slice/suggestionSlice';

/** Redux Store Definition */
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [auth.name]: auth.reducer,
    [snackbar.name]: snackbar.reducer,
    [suggestions.name]: suggestions.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(errorLogger),
});

export default store;
