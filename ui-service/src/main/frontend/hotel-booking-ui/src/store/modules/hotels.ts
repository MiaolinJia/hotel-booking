import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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
    sortBy: 'rating' | 'price' | null
}

const initialState: HotelsState = {
    hotelList: [],
    sortBy: null
};

const hotelsStore = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setHotelsList: (state, action: PayloadAction<Hotel[]>) => {
            state.hotelList = action.payload;
        },
        sortHotels: (state, action: PayloadAction<'rating' | 'price'>) => {
            state.sortBy = action.payload;
            if(action.payload === 'rating') {
                state.hotelList = [...state.hotelList].sort((a, b) => b.rating - a.rating);
            } else if (action.payload === 'price') {
                state.hotelList = [...state.hotelList].sort((a, b) => a.price - b.price);
            }
        }
    }
});

const { setHotelsList, sortHotels } = hotelsStore.actions;

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

const sortHotelList = (sortBy: 'rating' | 'price') => {
    return (dispatch: AppDispatch) => {
        dispatch(sortHotels(sortBy));
    }
};

export { fetchHotelList, searchHotelList, sortHotelList }
const reducer = hotelsStore.reducer
export default reducer