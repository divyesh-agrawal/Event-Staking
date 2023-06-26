import { isRejectedWithValue } from '@reduxjs/toolkit';

import { STATUS_CODES } from '@constants/apiConstants';
import { MESSAGES, SNACKBAR_VARIANTS } from '@constants/commonConstants';
import { SnackbarLoad } from '@redux/slice/snackbarSlice';

const { error: errorVariant } = SNACKBAR_VARIANTS;

const { rateLimitExceeded: rateLimitExceededCode, notFound: notFoundCode } =
  STATUS_CODES;

const {
  generic: {
    rateLimit: rateLimitError,
    notFound: notFoundError,
    other: otherError,
  },
} = MESSAGES;

/** Handles Generic errors in API Request */
const errorLogger = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.meta.baseQueryMeta.response.status === rateLimitExceededCode) {
      api.dispatch(
        SnackbarLoad({
          variant: errorVariant,
          message: rateLimitError,
        })
      );
    } else if (action.meta.baseQueryMeta.response.status === notFoundCode) {
      api.dispatch(
        SnackbarLoad({
          variant: errorVariant,
          message: notFoundError,
        })
      );
    } else {
      api.dispatch(
        SnackbarLoad({ variant: errorVariant, message: otherError })
      );
    }
  }

  return next(action);
};

export default errorLogger;
