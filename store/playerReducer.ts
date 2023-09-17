import { createSlice } from "@reduxjs/toolkit";

const initialState = { isConnect: true };

export const playerReducer = createSlice({
  name: "player",
  initialState,
  reducers: {
    handleConnect: (state, action) => {
      state.isConnect = action.payload;
    },
  },
});

export const { handleConnect } = playerReducer.actions;

export default playerReducer.reducer;
