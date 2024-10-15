import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../index";

interface Hotel {
    id: string;
    name: string;
    address: string,
    rating: number,
    price: number,
    currency: string,
    amenities: string[]
}

interface HotelsState {
    hotelList: Hotel[],

}

const initialState: HotelsState = {
    hotelList: [],
};

const hotelsStore = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setHotelsList: (state, action: PayloadAction<Hotel[]>) => {
            state.hotelList = action.payload;
        }
    }
});
const { setHotelsList } = hotelsStore.actions;

// async
const fetchHotelList = () => {
    return async (dispatch: AppDispatch)=> {
        try {
            const response = await axios.get("http://localhost:3004/hotels");
            dispatch(setHotelsList(response.data))
        } catch (error) {
            console.error("Failed to fetch hotels:", error);
        }
    }
}

const searchHotelList = () => {
    return async (dispatch: AppDispatch)=> {
        try {
            const response = await axios.get("http://localhost:3004/searchHotels");
            dispatch(setHotelsList(response.data))
        } catch (error) {
            console.error("Failed to fetch hotels:", error);
        }
    }
}

export { fetchHotelList, searchHotelList }
const reducer = hotelsStore.reducer
export default reducer