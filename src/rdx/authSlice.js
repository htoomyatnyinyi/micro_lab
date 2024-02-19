// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  s_username: "",
  s_email: "",
  s_password: "",
  s_token: null,
  s_isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, action) => {
      console.log(action.payload);
      // const { email, password } = action.payload;
      // console.log(email, password);

      state.s_email = action.payload.email;
      state.s_password = action.payload.password;
      state.s_isLoggedIn = action.payload.isLoggedIn;
    },
    settoken: (state, action) => {
      state.s_token = action.payload;
    },
    signout: (state) => {
      state.s_email = "";
      state.s_password = "";
      state.s_token = null;
      state.s_isLoggedIn = false;
    },
  },
});

export const { signin, signout, settoken } = authSlice.actions;

export default authSlice.reducer;
