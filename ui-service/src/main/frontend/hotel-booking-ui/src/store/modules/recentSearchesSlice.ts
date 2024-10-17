import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "..";
import { FormData } from "../../components/search-components/HotelSearchSectionComponent";

const MAX_SEARCHES = 4;
const STORAGE_KEY = "recentSearch";

export interface RecentSearch {
  id: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  rooms: number;
  adults: number;
  children: number;
}

interface RecentSearchesState {
  searches: RecentSearch[];
}

const initialState: RecentSearchesState = {
  searches: [],
};

const recentSearchesSlice = createSlice({
  name: "recentSearches",
  initialState,
  reducers: {
    loadSearches: (state, action: PayloadAction<RecentSearch[]>) => {
      state.searches = action.payload;
    },
    addSearch: (state, action: PayloadAction<Omit<FormData, "id">>) => {
      const newSearch: RecentSearch = {
        id: Date.now().toString(),
        destination: action.payload.destination,
        startDate: action.payload.startDate || new Date(),
        endDate: action.payload.endDate || new Date(),
        rooms: action.payload.rooms,
        adults: action.payload.adults,
        children: action.payload.children,
      };
      state.searches = [newSearch, ...state.searches].slice(0, MAX_SEARCHES);
    },
    deleteSearch: (state, action: PayloadAction<string>) => {
      state.searches = state.searches.filter(
        (search) => search.id !== action.payload
      );
    },
    clearExpiredSearches: (state) => {
      const currentDate = new Date();
      state.searches = state.searches.filter(
        (search) => search.startDate >= currentDate
      );
    },
  },
});

export const initializeRecentSearches = () => {
  return (dispatch: AppDispatch) => {
    const storedSearches = localStorage.getItem(STORAGE_KEY);
    if (storedSearches) {
      const parsedSearches = JSON.parse(storedSearches);
      const currentDate = new Date();
      const validSearches = parsedSearches
        .map((search: any) => ({
          ...search,
          startDate: new Date(search.startDate),
          endDate: new Date(search.endDate),
        }))
        .filter((search: RecentSearch) => search.startDate >= currentDate);

      dispatch(loadSearches(validSearches));
    }
  };
};

export const saveRecentSearches = (searches: RecentSearch[]) => {
  return (dispatch: AppDispatch) => {
    const serializedSearches = searches.map((search) => ({
      ...search,
      startDate: search.startDate.toISOString(),
      endDate: search.endDate.toISOString(),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializedSearches));
  };
};

export const { loadSearches, addSearch, deleteSearch, clearExpiredSearches } =
  recentSearchesSlice.actions;
export default recentSearchesSlice.reducer;
