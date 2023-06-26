import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Login from '@assets/images/login.jpg';
import ResponsiveBox from '@components/ResponsiveBox';
import StyledInput from '@components/StyledInput';
import { connectWallet } from '@utils/commonUtils';

import StyledBox from './Login.styles';

/** Container for Managing Login */
const LoginContainer = () => (
  <StyledBox>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ flexGrow: 1, paddingInline: 25 }}
    >
      <Box>
        <Box marginBottom={30}>
          <Typography align="center" variant="h2">
            Welcome Back!
          </Typography>
          <Typography variant="body1" align="center">
            Login to access your MetaMask Account
          </Typography>
        </Box>
        <Button
          sx={{
            typography: 'subtitle2',
            paddingBlock: 10,
            paddingInline: 30,
            margin: '0 auto',
          }}
          onClick={connectWallet}
        >
          Login&nbsp;
        </Button>
      </Box>
    </Box>
    <ResponsiveBox width="60%" overflow="hidden">
      <img src={Login} alt="Login Page" />
    </ResponsiveBox>
  </StyledBox>
);

export default LoginContainer;
