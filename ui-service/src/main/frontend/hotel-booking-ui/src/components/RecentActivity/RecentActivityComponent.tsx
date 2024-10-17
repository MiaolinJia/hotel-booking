import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import {
  deleteSearch,
  initializeRecentSearches,
  saveRecentSearches,
} from "../../store/modules/recentSearchesSlice";
import ActivityCard from "./ActivityCard";

const RecentActivityComponent = () => {
  const dispatch = useDispatch();
  const searches = useSelector(
    (state: RootState) => state.recentSearches.searches
  );

  useEffect(() => {
    dispatch(initializeRecentSearches());
  }, [dispatch]);

  useEffect(() => {
    if (searches.length > 0) {
      dispatch(saveRecentSearches(searches));
    }
  }, [searches, dispatch]);

  const handleDeleteSearch = (id: string) => {
    dispatch(deleteSearch(id));
  };

  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 p-6 rounded-lg shadow-sm bg-blue-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="inline-block align-middle text-2xl font-bold text-blue-900 mb-6">
          Pick up where you left off
        </h2>
        <div>
          <span className="inline-block align-middle bg-white rounded-full p-4  text-blue-500 cursor-pointer hover:bg-slate-50 hover:text-blue-600 font-bold">
            View All Recent Activity
          </span>
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {searches.map((search) => (
          <ActivityCard
            key={search.id}
            activity={search}
            onDelete={handleDeleteSearch}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivityComponent;
