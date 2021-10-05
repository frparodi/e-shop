import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: authInitialState,
  reducers: {
    saveToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    clearSession(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
