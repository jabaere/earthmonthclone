import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentRoute: "Home" };

export const routeReducer = createSlice({
  name: "route",
  initialState,
  reducers: {
    handleRouteChange: (state, action) => {
      state.currentRoute = action.payload;
    },
  },
});

export const { handleRouteChange } = routeReducer.actions;

export default routeReducer.reducer;
