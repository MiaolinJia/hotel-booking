import hotelReducer from './modules/hotels'
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        hotels: hotelReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store