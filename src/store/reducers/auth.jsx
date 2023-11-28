import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    message: '',
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.message = action.payload.message;
    },
    registerFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.message = action.payload.message;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.message = 'User logged out successfully';
    },
  },
});

export const { loginSuccess, registerSuccess, loginFailure, registerFailure, logout } = authSlice.actions;
export default authSlice.reducer;