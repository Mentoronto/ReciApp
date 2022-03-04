import { configureStore } from "@reduxjs/toolkit";
import logInOutReducer from "./googleSlice";

export default configureStore({
  reducer:{
    logInOut: logInOutReducer,
  },
});