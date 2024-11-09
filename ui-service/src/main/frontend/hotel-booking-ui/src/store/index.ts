import {configureStore} from "@reduxjs/toolkit";
import recentSearchReducer from "./modules/recentSearches";
import hotelReducer from './modules/hotels'
const store = configureStore({
    reducer: {
        recentSearches: recentSearchReducer,
        hotels: hotelReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
