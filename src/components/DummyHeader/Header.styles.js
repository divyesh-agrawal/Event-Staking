import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

const HeaderAppBar = styled(AppBar)(({ theme }) => {
  const {
    zIndex: { drawer: zIndexDrawer },
    typography: { pxToRem },
  } = theme;

  return {
    zIndex: zIndexDrawer + 1,
    paddingInline: pxToRem(15),
  };
});

const HeaderToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export { HeaderAppBar, HeaderToolBar };
