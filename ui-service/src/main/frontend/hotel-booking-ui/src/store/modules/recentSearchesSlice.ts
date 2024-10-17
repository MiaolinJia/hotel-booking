import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
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
      if (isDateTodayOrFuture(newSearch.startDate)) {
        state.searches = [newSearch, ...state.searches].slice(0, MAX_SEARCHES);
      }
    },
    deleteSearch: (state, action: PayloadAction<string>) => {
      state.searches = state.searches.filter(
        (search) => search.id !== action.payload
      );
    },
    // ... other reducers
  },
});

export const saveRecentSearches = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const searches = getState().recentSearches.searches;
    const serializedSearches = searches.map((search) => ({
      ...search,
      startDate: search.startDate.toISOString(),
      endDate: search.endDate.toISOString(),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializedSearches));
  };
};

export const addSearchAndSave = (searchData: Omit<FormData, "id">) => {
  return (dispatch: AppDispatch) => {
    dispatch(addSearch(searchData));
    dispatch(saveRecentSearches());
  };
};

export const deleteSearchAndSave = (id: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(deleteSearch(id));
    dispatch(saveRecentSearches());
  };
};

export const initializeRecentSearches = () => {
  return (dispatch: AppDispatch) => {
    const storedSearches = localStorage.getItem(STORAGE_KEY);
    if (storedSearches) {
      const parsedSearches = JSON.parse(storedSearches);
      const validSearches = parsedSearches
        .map((search: any) => ({
          ...search,
          startDate: new Date(search.startDate),
          endDate: new Date(search.endDate),
        }))
        .filter((search: RecentSearch) =>
          isDateTodayOrFuture(search.startDate)
        );
      dispatch(loadSearches(validSearches));
    }
  };
};

const isDateTodayOrFuture = (date: Date) => {
  return date.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0);
};

export const { loadSearches, addSearch, deleteSearch } =
  recentSearchesSlice.actions;
export default recentSearchesSlice.reducer;
