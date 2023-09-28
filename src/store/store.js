import { configureStore } from "@reduxjs/toolkit";
import { calSlice } from "./";

export const store = configureStore({
  reducer: {
    cal: calSlice.reducer,
  },
  devTools: false, //CHECK
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
