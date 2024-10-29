import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import {
  RecentSearch,
  RecentSearchesState,
  SearchFormData,
} from "../../components/RecentSearch/types";

const MAX_SEARCHES = 4;
const STORAGE_KEY = "recentSearch";

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
    addSearch: (state, action: PayloadAction<RecentSearch>) => {
      state.searches = [action.payload, ...state.searches].slice(
        0,
        MAX_SEARCHES
      );
    },
    deleteSearch: (state, action: PayloadAction<string>) => {
      state.searches = state.searches.filter(
        (search) => search.id !== action.payload
      );
    },
  },
});

export const saveRecentSearches = () => {
  return (_dispatch: AppDispatch, getState: () => RootState) => {
    const searches = getState().recentSearches.searches;
    if (searches.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(searches));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };
};

export const addSearchAndSave = (searchData: Omit<SearchFormData, "id">) => {
  return (dispatch: AppDispatch) => {
    const newSearch: RecentSearch = {
      id: Date.now().toString(),
      destination: searchData.destination,
      startDate: searchData.startDate.toISOString(),
      endDate: searchData.endDate.toISOString(),
      rooms: searchData.rooms,
      adults: searchData.adults,
      children: searchData.children,
    };

    if (isDateStringTodayOrFuture(newSearch.startDate)) {
      dispatch(addSearch(newSearch));
      dispatch(saveRecentSearches());
    }
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
      const validSearches = parsedSearches.filter((search: RecentSearch) =>
        isDateStringTodayOrFuture(search.startDate)
      );
      dispatch(loadSearches(validSearches));
    }
  };
};

const isDateStringTodayOrFuture = (date: string) => {
  return new Date(date).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0);
};

export const { loadSearches, addSearch, deleteSearch } =
  recentSearchesSlice.actions;
export default recentSearchesSlice.reducer;
