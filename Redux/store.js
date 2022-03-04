import { configureStore } from "@reduxjs/toolkit";
import logInOutReducer from "../component/googleSlice";

export default configureStore({
  reducer:{
    logInOut: logInOutReducer,
  },
});