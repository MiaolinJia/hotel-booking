import HomePageExampleComponent from "../components/HomePageExampleComponent";
import ActivityCard from "../components/RecentActivity/ActivityCard";
import { useRecentActivity } from "../components/RecentActivity/useRecentActivity";
import { RecentActivity } from "../components/RecentActivity/types";
import RecentActivityComponent from "../components/RecentActivity/RecentActivityComponent";

const HomePage: React.FC = () => {
  const { activities, deleteActivity } = useRecentActivity();

  return (
    <>
      <HomePageExampleComponent>
        <h1>"Here is a placeholder for homepage components"</h1>
      </HomePageExampleComponent>
      <RecentActivityComponent
        activities={activities}
        deleteActivity={deleteActivity}
      >
        {(
          activities: RecentActivity[],
          deleteActivity: (idToDelete: string) => void
        ) =>
          activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onDelete={deleteActivity}
            />
          ))
        }
      </RecentActivityComponent>
    </>
  );
};

export default HomePage;
