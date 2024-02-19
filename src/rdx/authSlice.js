// authSlice.js save it in slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  s_username: "",
  s_email: "",
  s_password: "",
  s_token: null,
  s_isLoggedIn: false,
  id: null,
  iat: null, // initiated time
  exp: null, // expire time
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
    setprofile: (state, action) => {
      console.log(action.payload, "from setProfile");
      state.s_username = action.payload.profile.username;
      state.s_email = action.payload.profile.email;
      state.s_password = action.payload.profile.password;
      state.s_isLoggedIn = action.payload.isLoggedIn;
      state.id = action.payload.profile.userId;
      state.iat = action.payload.profile.iat;
      state.exp = action.payload.profile.exp;
    },
    signout: (state) => {
      state.s_email = "";
      state.s_password = "";
      state.s_token = null;
      state.s_isLoggedIn = false;
    },
  },
});

export const { signin, signout, settoken, setprofile } = authSlice.actions;

export default authSlice.reducer;
