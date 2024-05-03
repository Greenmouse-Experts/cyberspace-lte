import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItemTyping = {
  image: string[];
  id: string;
  name: string;
  quantity: number;
  price: number;
};
export type CartTyping = {
  totalPrice: number;
  items: CartItemTyping[];
};
const initialState: CartTyping = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = action.payload;
    },
    removeItem: (state, action) => {
      state.items = action.payload;
    },
    removeItems: (state) => {
      state.items = [];
      Object.assign(state, initialState);
    },
  },
});

export const { addItem, removeItem, removeItems } = cartSlice.actions;
export const getCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
