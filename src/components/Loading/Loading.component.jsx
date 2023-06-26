import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

import { OverlayBox, ProgressBox } from './Loading.styles';

/** Loading Component used to indicate something is loading */
const Loading = (props) => {
  const {
    typography: { pxToRem },
  } = useTheme();

  const { overlay, color, size } = props;

  return overlay ? (
    <OverlayBox>
      <CircularProgress size={pxToRem(size)} />
    </OverlayBox>
  ) : (
    <ProgressBox progressColor={color}>
      <CircularProgress color="inherit" size={pxToRem(size)} />
    </ProgressBox>
  );
};

Loading.defaultProps = {
  overlay: false,
  color: 'primary.main',
  size: 40,
};

export default Loading;
