// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  p_username: "",
  p_email: "",
  p_password: "",
  iat: null, // initiated time
  exp: null, // expire time
  role: "",
};

const authSlice = createSlice({
  name: "authProfile",
  initialState,
  reducers: {
    profile: (state, action) => {
      console.log(action.payload);
      // const { email, password } = action.payload;
      // console.log(email, password);

      state.p_email = action.payload.email;
      state.p_password = action.payload.password;
      state.p_isLoggedIn = action.payload.isLoggedIn;
    },
    settoken: (state, action) => {
      state.p_token = action.payload;
    },
    signout: (state) => {
      state.p_email = "";
      state.p_password = "";
      state.p_token = null;
      state.p_isLoggedIn = false;
    },
  },
});

export const { signin, signout, settoken } = authSlice.actions;

export default authSlice.reducer;
