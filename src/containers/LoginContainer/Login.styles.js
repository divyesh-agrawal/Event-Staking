import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => {
  const {
    palette: {
      secondary: { main: secondary },
    },
  } = theme;

  return {
    color: secondary,
    display: 'flex',
    width: '100%',
    height: '100vh',
  };
});

export default StyledBox;
