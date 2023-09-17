import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

export const menuReducer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenu: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { handleMenu } = menuReducer.actions;

export default menuReducer.reducer;
