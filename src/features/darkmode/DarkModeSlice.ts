import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../state/store";

const storedIsDarkMode = localStorage.getItem("isDarkMode");
const initialState = {
  isDarkMode: storedIsDarkMode !== null ? JSON.parse(storedIsDarkMode) : false, // light mode is the default
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", state.isDarkMode);
    },
  },
});

export const isDark = (state: RootState) => state.ui.isDarkMode;

export const { toggleMode } = uiSlice.actions;
export default uiSlice.reducer;
