import hotelReducer from "./modules/hotels";
import { configureStore } from "@reduxjs/toolkit";
import recentSearchesReducer from "./modules/recentSearchesSlice";

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    recentSearches: recentSearchesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
