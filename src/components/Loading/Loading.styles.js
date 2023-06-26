import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

const OverlayBox = styled(Box)(({ theme }) => {
  const {
    zIndex: { tooltip: TooltipZIndex },
    palette: { black },
  } = theme;

  return {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: alpha(black, 0.8),
    position: 'fixed',
    zIndex: TooltipZIndex + 1,
    inset: 0,
  };
});

const ProgressBox = styled(Box, {
  shouldForwardProp: (props) => props !== 'progressColor',
})(({ theme, progressColor = 'primary.main' }) => {
  const { palette } = theme;
  const colorValues = progressColor.split('.');

  let customColor;
  if (colorValues[1]) {
    const parentColor = colorValues[0];
    const childColor = colorValues[1];
    customColor =
      palette[parentColor][childColor];
  }
  if (progressColor === 'white') {
    customColor = palette.white;
  }
  if (progressColor === 'black') {
    customColor = palette.black;
  }

  return {
    color: customColor,
    display: 'inline-block',
  };
});

export { OverlayBox, ProgressBox };
