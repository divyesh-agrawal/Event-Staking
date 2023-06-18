import {
  INPUT_TYPES,
  LOCAL_STORAGE_KEY,
  MESSAGES,
  REGULAR_EXPRESSIONS,
} from '@constants/commonConstants';

const { email: emailRegExp, password: passwordRegExp } = REGULAR_EXPRESSIONS;

const { email: emailType, password: passwordType } = INPUT_TYPES;

const {
  login: {
    email: { invalid: invalidEmail, empty: emptyEmail },
    password: { invalid: invalidPassword },
  },
} = MESSAGES;

/** scrolls window to top */
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

/** To Validate the Input */
const validate = ({ inputType, value }) => {
  const emailPattern = new RegExp(emailRegExp);

  const passwordPattern = new RegExp(passwordRegExp);

  switch (inputType) {
    case emailType:
      if (value === '') {
        return emptyEmail;
      }
      if (!emailPattern.test(value)) {
        return invalidEmail;
      }
      return null;
    case passwordType:
      if (!passwordPattern.test(value)) {
        return invalidPassword;
      }
      return null;
    default:
      return null;
  }
};

/** Sets Data in Local Storage */
const setData = ({ key, value }) => {
  const date = new Date();
  date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);
  localStorage.setItem(
    btoa(key),
    btoa(JSON.stringify({ ...value, expire: date.toUTCString() }))
  );
};

/** Clears Data of Local Storage */
const clearData = ({ key }) => {
  if (localStorage.getItem(btoa(key))) {
    localStorage.removeItem(btoa(key));
  }
};

/** To check if User is Logged In */
const isUserAuthenticated = () => {
  if (localStorage.getItem(btoa(LOCAL_STORAGE_KEY))) {
    const loginData = JSON.parse(
      atob(localStorage.getItem(btoa(LOCAL_STORAGE_KEY)))
    );
    const currentDate = new Date();
    const expireDate = new Date(loginData.expire);
    return expireDate > currentDate;
  }
  return false;
};

/** To Fetch User Data from Local Storage */
const getUserData = () =>
  JSON.parse(atob(localStorage.getItem(btoa(LOCAL_STORAGE_KEY))));

const getNestedKeys = (str, obj) => {
  const strArr = str.split('.');
  let newArr = obj;
  let value = 0;
  while (value < strArr.length) {
    newArr = newArr?.[strArr[value]];
    value += 1;
  }
  return newArr;
};

export {
  isUserAuthenticated,
  clearData,
  getUserData,
  getNestedKeys,
  scrollToTop,
  setData,
  validate,
};
