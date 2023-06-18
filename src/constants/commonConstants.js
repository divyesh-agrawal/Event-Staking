import Logout from '@mui/icons-material/Logout';
import Person from '@mui/icons-material/Person';

import ROUTE_PATHS from './routeConstants';

import abi from './abi.json';

const { myProfile: profilePath, logout: logoutPath } = ROUTE_PATHS;

/** Account Menu definitions */
const ACCOUNT_MENU = [
  {
    name: 'My Profile',
    icon: Person,
    link: profilePath,
  },
  {
    name: 'Logout',
    icon: Logout,
    link: logoutPath,
  },
];

/** Regular Expressions for Validating Email and Passwords */
const REGULAR_EXPRESSIONS = {
  email: '^\\w+\\.?\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$',
  password:
    '^(ghp_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59}|v[0-9].[0-9a-f]{40})$',
};

/** Key in which User PAT and Expiry Date will be stored */
const LOCAL_STORAGE_KEY = 'Personal Access Token';

/** Auto Hide Duration for Snackbar */
const SNACKBAR_AUTO_HIDE_DURATION = 5000;

/** Variants of Snackbar */
const SNACKBAR_VARIANTS = {
  success: 'success',
  error: 'error',
};

/** Messages for Different Conditions */
const MESSAGES = {
  login: {
    /** Message if login was success */
    success: 'Logged In Successfully',
    /** Message if Invalid Credentials is passed */
    invalidCredentials: 'Invalid Credentials',
    email: {
      /** Message if Empty Email is passed */
      empty: 'Email should not be empty',
      /** Message if Invalid Email is passed */
      invalid: 'Invalid Email',
    },
    /** Message if Invalid Password is passed */
    password: { invalid: 'Invalid Password' },
  },
  generic: {
    /** 403: Rate Limit Exceeded Error Message */
    rateLimit: 'API Rate Limit Exceeded',
    /** 404: Not Found Error Message */
    notFound: '404: Not Found',
    /** Rest all error will have same message */
    other: 'Something went wrong',
  },
};

const INPUT_TYPES = {
  email: 'email',
  password: 'password',
};

const contractAddress = '0x97285a96c74cb4b068c151efbcb978e4f8c49743';
const contractABI = abi;

export {
  ACCOUNT_MENU,
  contractAddress,
  contractABI,
  REGULAR_EXPRESSIONS,
  LOCAL_STORAGE_KEY,
  SNACKBAR_AUTO_HIDE_DURATION,
  SNACKBAR_VARIANTS,
  MESSAGES,
  INPUT_TYPES,
};
