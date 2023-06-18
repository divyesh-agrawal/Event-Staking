import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

/** Styled Link Component */
const StyledLink = styled(Link, {
  shouldForwardProp: (props) => props !== 'linkColor' && props !== 'isFlex',
})(({ theme, linkColor, isFlex = false }) => {
  const { palette } = theme;

  return {
    textDecoration: 'none',
    color:
      linkColor && (palette[linkColor])
        ? (palette[linkColor]).main
        : 'inherit',
    display: 'inline-block',
    ...(isFlex && {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  };
});

export default StyledLink;
