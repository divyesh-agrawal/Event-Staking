import React, { useEffect, useState } from 'react';

import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Login from '@assets/images/login.jpg';
// import { ReactComponent as Logo } from '@assets/images/logo.svg';
import StyledLink from '@components/Link';
import Loading from '@components/Loading';
import ResponsiveBox from '@components/ResponsiveBox';
import StyledInput from '@components/StyledInput';
import {
  INPUT_TYPES,
  LOCAL_STORAGE_KEY,
  MESSAGES,
  SNACKBAR_VARIANTS,
} from '@constants/commonConstants';
import ROUTE_PATHS from '@constants/routeConstants';
import { WEIGHTS } from '@constants/themeConstants';
import { useLazyAuthenticateUserQuery } from '@redux/slice/apiSlice';
import { setUser } from '@redux/slice/authSlice';
import { SnackbarLoad } from '@redux/slice/snackbarSlice';
import { setData, validate } from '@utils/commonUtils';

import StyledBox from './Login.styles';

const { semiBold } = WEIGHTS;

const { myProfile: profilePath } = ROUTE_PATHS;

const { success: successVariant } = SNACKBAR_VARIANTS;

const {
  login: { success: successMessage },
} = MESSAGES;

const { email: emailType, password: passwordType } = INPUT_TYPES;

/** Container for Managing Login */
const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** Stores value of Email and Password */
  const [{ email, password }, setInput] = useState({ email: '', password: '' });

  /** Stores Error on Email and Password Fields */
  const [{ email: emailError, password: passwordError }, setError] = useState({
    email: '',
    password: '',
  });

  const [authenticateUser, { data: user, isFetching }] =
    useLazyAuthenticateUserQuery();

  /** To set User Data in Local Storage */
  useEffect(() => {
    if (user) {
      dispatch(setUser({ user }));
      /** Sets Data in Local Storage */
      setData({ key: LOCAL_STORAGE_KEY, value: { password } });
      /** Calls Snackbar for Logged In successfully */
      dispatch(
        SnackbarLoad({
          variant: successVariant,
          message: successMessage,
        })
      );
      navigate(profilePath);
    }
  }, [user]);

  const emailErrorState = Boolean(emailError?.trim());
  const passwordErrorState = Boolean(passwordError?.trim());

  /** Handles and validates Email and Password on Form Submit
   * @param e - Event Object
   */
  const submitHandler = (e) => {
    e.preventDefault();

    /** Checks if email is validated, if not then stores error message */
    const isEmailValidated = validate({ inputType: emailType, value: email });
    /** Checks if password is validated, if not then stores error message */
    const isPasswordValidated = validate({
      inputType: passwordType,
      value: password,
    });

    if (isEmailValidated || isPasswordValidated) {
      setError((prevState) => ({
        ...prevState,
        email: isEmailValidated,
        password: isPasswordValidated,
      }));
    } else {
      /** Triggers API request for the User */
      authenticateUser(password);
    }
  };

  /** Handles Fields on Input Change */
  const inputHandler = (
    e,
    inputType
  ) => {
    setInput((prevState) => ({
      ...prevState,
      [inputType]: e.target.value.trim(),
    }));
    setError((prevState) => ({
      ...prevState,
      [inputType]: ' ',
    }));
  };

  return (
    <StyledBox>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ flexGrow: 1, paddingInline: 25 }}
      >
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginBottom={50}
          >
            {/* <StyledLink to={rootPath} linkColor="primary">
              <Logo width={240} />
            </StyledLink> */}
          </Box>
          <Box marginBottom={30}>
            <Typography align="center" variant="h2">
              Welcome Back!
            </Typography>
            <Typography variant="body1" align="center">
              Login to access your MetaMask Account
            </Typography>
          </Box>
          <form onSubmit={submitHandler} noValidate>
            <Box marginBottom={16}>
              <Typography
                variant="subtitle1"
                fontWeight={semiBold}
                textTransform="uppercase"
                letterSpacing="3px"
              >
                Email Address:
              </Typography>
              <StyledInput
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon fontSize="medium" />
                    </InputAdornment>
                  ),
                }}
                type="email"
                placeholder="Email"
                fullWidth
                value={email}
                error={emailErrorState}
                helperText={emailErrorState ? emailError : ' '}
                onInput={(e) =>
                  inputHandler(e, 'email')
                }
              />
            </Box>
            <Box marginBottom={25}>
              <Typography
                variant="subtitle1"
                fontWeight={semiBold}
                textTransform="uppercase"
                letterSpacing="3px"
              >
                Password:
              </Typography>
              <StyledInput
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsOutlinedIcon fontSize="medium" />
                    </InputAdornment>
                  ),
                }}
                placeholder="Password"
                type="password"
                fullWidth
                value={password}
                error={passwordErrorState}
                helperText={passwordErrorState ? passwordError : ' '}
                onInput={(e) =>
                  inputHandler(e, 'password')
                }
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Button
                sx={{
                  typography: 'subtitle2',
                  paddingBlock: 10,
                  paddingInline: 30,
                }}
                type="submit"
                disabled={isFetching}
              >
                Login&nbsp;
                {isFetching && <Loading color="inherit" size={20} />}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <ResponsiveBox width="60%" overflow="hidden">
        <img src={Login} alt="Login Page" />
      </ResponsiveBox>
    </StyledBox>
  );
};

export default LoginContainer;
