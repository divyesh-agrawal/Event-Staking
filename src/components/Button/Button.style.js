import { Button, styled } from '@mui/material';

/** Component to add styled button */
const StyledButton = styled(Button)(({ theme: { typography, palette } }) => {
  const { pxToRem, button } = typography;
  const {
    success: { main: successMain },
    white,
  } = palette;

  return {
    background: successMain,
    typography: button,
    border: `0.1rem solid ${successMain}`,
    textAlign: 'center',
    paddingBlock: pxToRem(9),
    paddingInline: pxToRem(12),
    borderRadius: pxToRem(12),
    marginInline: 'auto',
    marginTop: pxToRem(22),
    display: 'block',
    color: white,

    '&:hover': {
      border: `1px solid ${successMain}`,
      background: white,
      color: successMain,
    },
  };
});

export default StyledButton;
