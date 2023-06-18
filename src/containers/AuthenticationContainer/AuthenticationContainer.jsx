import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useLazyAuthenticateUserQuery } from '@redux/slice/apiSlice';
import { setUser } from '@redux/slice/authSlice';
import { getUserData, isUserAuthenticated } from '@utils/commonUtils';

/** Container to check if User is Authenticated and if yes then stores user information in store */
const AuthenticationContainer = (props) => {
  const { children } = props;

  const dispatch = useDispatch();
  const [authenticateUser, { data: user }] = useLazyAuthenticateUserQuery();

  /** To Reload State on Page Reload */
  useEffect(() => {
    if (isUserAuthenticated()) {
      const { password } = getUserData();
      authenticateUser(password);
      if (user) {
        dispatch(setUser({ user }));
      }
    }
  }, [user]);

  return children;
};

export default AuthenticationContainer;
