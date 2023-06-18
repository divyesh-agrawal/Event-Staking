import { createSlice } from '@reduxjs/toolkit';

import { SNACKBAR_VARIANTS } from '@constants/commonConstants';

const { success: successVariant } = SNACKBAR_VARIANTS;

/** Slice to display Snackbar */
const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    variant: successVariant,
    message: '',
    isOpen: false,
  },
  reducers: {
    SnackbarLoad: (state, action) => ({
      ...state,
      ...action.payload,
      isOpen: true,
    }),
    SnackbarClear: (state) => ({
      ...state,
      variant: successVariant,
      message: '',
      isOpen: false,
    }),
  },
});

export const { SnackbarClear, SnackbarLoad } = snackbarSlice.actions;

export default snackbarSlice;
