import {createSlice} from "@reduxjs/toolkit";


const googleSlice = createSlice({
  name:"logInOut",
  initialState:{
   googleState:false
  },

  reducers:{
    googleOn:(state)=>{
      state.googleState = true;
    },
    googleOff:(state)=>{
      state.googleState =false;
    },
  },
});

export const {googleOn,googleOff} = googleSlice.actions;

export default googleSlice.reducer;