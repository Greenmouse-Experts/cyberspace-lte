import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../state/store";


const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState = {
  isDarkMode: prefersDarkMode ? prefersDarkMode : false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", JSON.stringify(state.isDarkMode));
    },
  },
});

export const isDark = (state: RootState) => state.ui.isDarkMode;

export const { toggleMode } = uiSlice.actions;
export default uiSlice.reducer;
