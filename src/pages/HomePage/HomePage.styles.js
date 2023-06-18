import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme: { spacing } }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: spacing(12, 18),
}));

export default StyledPaper;
