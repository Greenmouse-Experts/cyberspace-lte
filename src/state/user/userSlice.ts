import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./user.types";
import { RootState } from "../store";

const initialState: IUser = {
  user: {
    name: "",
    email: "",
    phone_number: "",
    id: 0,
    user_type: "",
    email_verified_at: "",
    gender: null,
    residence_address: null,
    city: null,
    region: null,
    country: null,
    status: "",
    token: null,
    created_at: "",
    updated_at: "",
    tokens: [],
  },
  token: "",
  isLoggedIn: false,
  verifyEmail:""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      console.log("user saved")
    },
    setToken: (state, action) => {
      state.token = action.payload;
      console.log("token saved")
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setVerifyEmail:(state, action)=>{
      state.verifyEmail = action.payload
    },
    removeToken: (state) => {
      state.isLoggedIn = false;
      Object.assign(state, initialState);
    },
  },
});

export const { setToken, saveUser, removeToken, setIsLoggedIn, setVerifyEmail } = userSlice.actions;
export const getToken = (state: RootState) => state.user.token;
export const getVerifyEmail = (state: RootState) => state?.user?.verifyEmail;
export const isLoggedIn = (state: RootState) => state.user.isLoggedIn

export default userSlice.reducer;
