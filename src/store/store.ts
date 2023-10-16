import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { menuIconsReducer } from "./menuIcons";
import { watchlistReducer } from "./watchlist";
const store = configureStore({
  reducer: {
    auth: authReducer,
    menuIcons: menuIconsReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
