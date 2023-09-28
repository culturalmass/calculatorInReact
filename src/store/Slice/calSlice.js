import { createSlice } from "@reduxjs/toolkit";

export const calSlice = createSlice({
  name: "cal",
  initialState: {
    cal: {
      displayA: 0,
      displayB: "",
      currentA: 0,
      currentB: 0,
      operation: "none",
      equal: { repeat: false, currentResult: 0, operation: "none" },
    },
  },
  reducers: {
    onUpdate: (state, { payload }) => {
      state.cal = payload.cal;
    },
  },
});
export const { onUpdate } = calSlice.actions;
