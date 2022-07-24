import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Home",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    updateCurrentPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators for each case reducer function

export const { updateCurrentPage } = navigationSlice.actions;

export default navigationSlice.reducer;
