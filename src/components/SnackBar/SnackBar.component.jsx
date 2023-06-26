import React from 'react';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';

import { SNACKBAR_AUTO_HIDE_DURATION } from '@constants/commonConstants';
import { SnackbarClear } from '@redux/slice/snackbarSlice';

const SnackBar = () => {
  const dispatch = useDispatch();

  const { isOpen, variant, message } = useSelector(
    (state) => state.snackbar
  );

  /** Closes Snackbar
   * @param {React.SyntheticEvent | Event} event - Event which triggered the function
   * @param {string} reason - Reason why the event was triggered (can be: "timeout" (autoHideDuration expired), "clickaway", or "escapeKeyDown")
   */
  const handleClose = (
    event,
    reason
  ) => {
    /** If a click event is triggered in area other than on snackbar then, it should not close */
    if (reason === 'clickaway') {
      return;
    }
    dispatch(SnackbarClear());
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={variant}
        sx={{ width: '100%', typography: 'subtitle1' }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackBar;
