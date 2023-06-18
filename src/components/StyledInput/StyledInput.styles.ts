import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const StyledInput = styled(TextField)<TextFieldProps>(({ theme }) => {
  const {
    palette: {
      secondary: { main: secondary },
    },
    typography: { pxToRem },
  } = theme;

  return {
    color: secondary,

    '& .MuiInputBase-root': {
      color: secondary,
    },

    '& .MuiInputBase-input': {
      paddingBlock: pxToRem(16),
    },
  };
});

export default StyledInput;
