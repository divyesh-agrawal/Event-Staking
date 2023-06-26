import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => {
  const {
    palette: {
      primary: { main: primary },
    },
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: primary,
    height: '100vh',
    paddingInline: pxToRem(50),
  };
});

export default StyledBox;
