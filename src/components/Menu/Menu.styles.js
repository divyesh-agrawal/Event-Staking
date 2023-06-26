import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { alpha, styled } from '@mui/material/styles';

const StyledMenu = styled(Menu)(({ theme }) => {
  const {
    typography: { pxToRem },
    palette: { black },
  } = theme;

  return {
    overflow: 'visible',
    filter: `drop-shadow(0 ${pxToRem(2)} ${pxToRem(8)} ${alpha(black, 0.32)})`,
    anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
    elevation: 0,
  };
});

const StyledIconButton = styled(IconButton)(({ theme }) => {
  const {
    palette: { black },
  } = theme;

  return {
    borderRadius: 0,

    '&:hover,&:focus,&:focus-visible': {
      background: alpha(black, 0.2),
    },
  };
});

export { StyledIconButton, StyledMenu };
