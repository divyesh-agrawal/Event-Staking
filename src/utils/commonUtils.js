import {
  INPUT_TYPES,
  LOCAL_STORAGE_KEY,
  MESSAGES,
  REGULAR_EXPRESSIONS,
  contractABI,
  contractAddress,
} from '@constants/commonConstants';

import { useSelector } from 'react-redux';

import { ethers } from 'ethers';

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
const isUserAuthenticated = async () => {
  const { ethereum } = window;
  try {
    if (!ethereum) {
      return false;
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

const checkUser = () => {
  const { isUser } = useSelector((state) => state.auth);

  return isUser;
};

const connectWallet = async () => {
  try {
    if (!ethereum) return alert('Please install MetaMask.');

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    window.location.reload();
  } catch (error) {
    console.log(error);

    throw new Error('No ethereum object');
  }
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

const { ethereum } = window;

const createEthereumContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = await provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

export const sendTransaction = async (currentAccount, data) => {
  try {
    if (ethereum) {
      const { addressTo, amount } = data;
      const eventContract = createEthereumContract();
      const parsedAmount = ethers.formatEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208',
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await eventContract.addToBlockchain(
        addressTo,
        parsedAmount
      );

      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      console.log(`Success - ${transactionHash.hash}`);
    } else {
      console.log('No ethereum object');
    }
  } catch (error) {
    console.log(error);

    throw new Error('No ethereum object');
  }
};

export const getAllPersonEvents = async () => {
  try {
    if (ethereum) {
      const eventContract = await createEthereumContract();

      // await ethereum.request({
      //     method: "eth_sendTransaction",
      //     params: [{
      //         from: currentAccount,
      //         to: addressTo,
      //         gas: "0x5208",
      //         value: parsedAmount._hex,
      //     }],
      // });

      // const transactionHash = await eventContract.addToBlockchain(addressTo, parsedAmount);

      // console.log(`Loading - ${transactionHash.hash}`);
      // await transactionHash.wait();
      // console.log(`Success - ${transactionHash.hash}`);
      // setIsLoading(false);

      const events = await eventContract.getPersonEvents();
    } else {
      console.log('No ethereum object');
    }
  } catch (error) {
    console.log(error);

    throw new Error('No ethereum object');
  }
};

export {
  isUserAuthenticated,
  checkUser,
  connectWallet,
  createEthereumContract,
  clearData,
  getUserData,
  getNestedKeys,
  scrollToTop,
  setData,
  validate,
};
