import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { BREAKPOINT_NAMES } from '@constants/themeConstants';

const { md } = BREAKPOINT_NAMES;

const ProfileBox = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
    palette: {
      secondary: { main: secondary },
    },
    breakpoints: { up: breakpointUp },
  } = theme;

  return {
    paddingInline: pxToRem(30),
    paddingBlock: pxToRem(10),
    color: secondary,

    [breakpointUp(md)]: {
      paddingInline: pxToRem(150),
      paddingBlock: pxToRem(80),
    },
  };
});

const ImgContainer = styled(Box)(({ theme }) => {
  const {
    typography: { pxToRem },
    breakpoints: { up: breakpointUp },
  } = theme;

  return {
    width: pxToRem(100),
    aspectRatio: '1',
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    marginBottom: pxToRem(10),

    [breakpointUp(md)]: {
      width: pxToRem(200),
      marginRight: pxToRem(32),
      marginBottom: 0,
    },
  };
});

const ResponsiveBox = styled(Box)(({ theme }) => {
  const {
    breakpoints: { up: breakpointUp },
  } = theme;

  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    [breakpointUp('md')]: {
      flexDirection: 'row',
    },
  };
});

const SuggestionBox = styled(Box)(({ theme }) => {
  const {
    breakpoints: { up: breakpointUp },
    typography: { pxToRem },
  } = theme;

  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: pxToRem(16),

    [breakpointUp(md)]: {
      justifyContent: 'space-between',
    },
  };
});

export { ImgContainer, ProfileBox, ResponsiveBox, SuggestionBox };
