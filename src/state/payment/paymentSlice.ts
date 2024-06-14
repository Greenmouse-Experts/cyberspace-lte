import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface PaymentDetails {
  first_name: string;
  last_name: string;
  address: string;
  email: string;
  phone_number: string;
  state: string;
  lga: string;
  routerId:string;
  plan_id: string;
}

interface PaymentState {
  paymentDetails: PaymentDetails;
}

const initialState: PaymentState = {
  paymentDetails: {
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    phone_number: "",
    state: "",
    lga: "",
    routerId:"",
    plan_id: "",
  },
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addPaymentDetails: (state, action) => {
      state.paymentDetails = { ...action.payload }; // Ensure immutability
    },
    clearPaymentDetails: (state) => {
      state.paymentDetails = { ...initialState.paymentDetails }; // Spread to avoid direct reference
    },
  },
});

export const { addPaymentDetails, clearPaymentDetails } = paymentSlice.actions;

export default paymentSlice.reducer;

export const getPaymentDetails = (state: RootState) =>
  state.payment.paymentDetails;
