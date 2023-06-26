import { createSlice } from '@reduxjs/toolkit';

/** Stores the Logged In User Data */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isUser: false,
  },
  reducers: {
    setUser: (state) => ({
      ...state,
      isUser: true,
    }),
    clearUser: (state) => ({
      ...state,
      isUser: false,
    }),
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice;
