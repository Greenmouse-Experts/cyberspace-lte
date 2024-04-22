import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/darkmode/DarkModeSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch