import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routeReducer";
import menuReducer from "./menuReducer";
import playerReducer from "./playerReducer";

export default configureStore({
  reducer: {
    route: routeReducer,
    menu: menuReducer,
    player: playerReducer,
  },
});
