import { useState, useEffect, useRef } from "react";
import { RecentActivity, UseRecentActivitiesReturn } from "./types";

const STORAGE_KEY = "recentActivity";
const MAX_ACTIVITIES = 4;

export function useRecentActivity(): UseRecentActivitiesReturn {
  // State for initial render and delete re-render
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  // Ref for adding new activity and avoid re-render
  const activitiesRef = useRef<RecentActivity[]>([]);

  // Initial render
  useEffect(() => {
    const storedActivities = localStorage.getItem(STORAGE_KEY);
    if (storedActivities) {
      const parsedActivities = JSON.parse(storedActivities);

      const currentDate = new Date().toISOString().split("T")[0];
      const validActivities = parsedActivities.filter(
        (activity: RecentActivity) => activity.startDate >= currentDate
      );

      if (parsedActivities.length > validActivities.length) {
        saveActivities(validActivities);
      }

      setActivities(validActivities);
      activitiesRef.current = validActivities;
    }
  }, []);

  const saveActivities = (updatedActivities: RecentActivity[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedActivities));

    // Update activitiesRef to ensure up-to-date data
    activitiesRef.current = updatedActivities;
  };

  const addActivity = (newActivity: Omit<RecentActivity, "id">) => {
    const updatedActivities = [
      { ...newActivity, id: Date.now().toString() },
      ...activitiesRef.current,
    ].slice(0, MAX_ACTIVITIES);

    saveActivities(updatedActivities); // Do not use setActivities to avoid re-render
  };

  const deleteActivity = (idToDelete: string) => {
    // Update activitiesRef to ensure up-to-date data
    const updatedActivities = activitiesRef.current.filter(
      (activity) => activity.id !== idToDelete
    );

    saveActivities(updatedActivities);
    setActivities(updatedActivities); // Trigger re-render when delete
  };

  return { activities, addActivity, deleteActivity };
}
