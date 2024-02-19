// slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  loggedIn: true,
  authToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setauthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setLogin: (state, action) => {
      state.username = action.payload;
      state.password = action.payload;
    },
    setAuth: (state, action) => {
      state.loggedIn = action.payload;
      state.authToken = action.payload;
    },
    setLogout: (state) => {
      // // Reset authentication-related state on sign-out
      state.username = "";
      state.password = "";
      state.loggedIn = false;
      state.authToken = null;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setLoggedIn,
  setauthToken,
  setLogout,
} = authSlice.actions;
export default authSlice.reducer;
