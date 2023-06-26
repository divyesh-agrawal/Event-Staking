import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';

import { WEIGHTS } from '@constants/themeConstants';

const { semiBold } = WEIGHTS;

const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'isTableHead',
})(
  ({
    theme: {
      typography: { pxToRem },
      palette: {
        primary: { light: primaryLight, main: primaryMain },
      },
      spacing,
    },
    isTableHead,
  }) => ({
    padding: spacing(14, 16),
    whiteSpace: 'nowrap',
    ...(isTableHead && { textTransform: 'uppercase' }),

    [`&.${tableCellClasses.head}`]: {
      backgroundColor: primaryLight,
      color: primaryMain,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(18),
      fontWeight: semiBold,
    },
  })
);

const StyledTableRow = styled(TableRow)(
  ({
    theme: {
      palette: {
        primary: { light: primaryLight },
      },
    },
  }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: primaryLight,
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },
  })
);

export { StyledTableCell, StyledTableRow };
