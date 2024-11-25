import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../index";
import { searchService } from "../service/searchService";
import { FormData } from "../../types/HotelSearchFormTypes";
import { Property } from "../../types/HotelSearchResult";

interface HotelsState {
  hotelList: Property[];
}

const initialState: HotelsState = {
  hotelList: [],
};

const hotelsStore = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setHotelsList: (state, action: PayloadAction<Property[]>) => {
      state.hotelList = action.payload;
    },
  },
});
const { setHotelsList } = hotelsStore.actions;

// async
const fetchHotelList = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get("http://localhost:3004/hotels");
      dispatch(setHotelsList(response.data));
    } catch (error) {
      console.error("Failed to fetch hotels:", error);
    }
  };
};

const searchHotelList = (formData: FormData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await searchService.getSearchResults(formData);
      console.log("Fetch search result:", response);

      dispatch(setHotelsList(response));
    } catch (error) {
      console.error("Failed to fetch hotels:", error);
    }
  };
};

export { fetchHotelList, searchHotelList };
const reducer = hotelsStore.reducer;
export default reducer;
