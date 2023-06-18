import { createSlice } from '@reduxjs/toolkit';

const INITIAL_USER = {
  avatar: '',
  bio: null,
  blog: null,
  email: null,
  followers: 0,
  following: 0,
  githubUrl: '',
  id: 0,
  location: null,
  username: '',
  name: null,
};

/** Stores the Logged In User Data */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: INITIAL_USER,
    isUser: false,
  },
  reducers: {
    setUser: (state, action) => ({
      ...state,
      ...action.payload,
      isUser: true,
    }),
    clearUser: (state) => ({
      ...state,
      user: { ...state.user, ...INITIAL_USER },
      isUser: false,
    }),
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice;
