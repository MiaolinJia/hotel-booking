import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import RecentSearchCard from "./RecentSearchCard";
import {
  deleteSearchAndSave,
  initializeRecentSearches,
} from "../../store/modules/recentSearches";

const RecentSearchComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searches = useSelector(
    (state: RootState) => state.recentSearches.searches
  );

  useEffect(() => {
    // During initialization, load recent searches from local storage
    // and update the states to be the same as local storage
    dispatch(initializeRecentSearches());
  }, [dispatch]);

  const handleDeleteSearch = (id: string) => {
    dispatch(deleteSearchAndSave(id));
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
          <RecentSearchCard
            key={search.id}
            search={search}
            onDelete={handleDeleteSearch}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentSearchComponent;
