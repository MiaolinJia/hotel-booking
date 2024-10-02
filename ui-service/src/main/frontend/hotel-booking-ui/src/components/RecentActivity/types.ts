export interface RecentActivity {
  id: string;
  type: "hotel";
  city: string;
  state: string;
  startDate: string;
  endDate: string;
}

export interface RecentActivityProps {
  children: React.ReactNode;
  activities: RecentActivity[];
  deleteActivity: (id: string) => void;
}

export interface ActivityCardProps {
  activity: RecentActivity;
  onDelete: (id: string) => void;
}

export interface UseRecentActivitiesReturn {
  activities: RecentActivity[];
  addActivity: (newActivity: Omit<RecentActivity, "id">) => void;
  deleteActivity: (id: string) => void;
}
