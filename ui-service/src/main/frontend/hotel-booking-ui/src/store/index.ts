import { configureStore } from "@reduxjs/toolkit";
import recentSearchReducer from "./modules/recentSearches";

const store = configureStore({
  reducer: {
    recentSearches: recentSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
