import { configureStore } from "@reduxjs/toolkit";
import s_AuthReducer from "./rdx/authSlice.js";

// import authReducer from "./rdx/slice.js";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    s_auth: s_AuthReducer,
  },
});

export default store;
