import HomePageExampleComponent from "../components/HomePageExampleComponent";
import ActivityCard from "../components/RecentActivity/ActivityCard";
import { useRecentActivity } from "../components/RecentActivity/useRecentActivity";
import RecentActivityComponent from "../components/RecentActivity/RecentActivityComponent";
import AddActivityForm from "../components/RecentActivity/AddRecentActivityForm";

const HomePage: React.FC = () => {
  const { activities, addActivity, deleteActivity } = useRecentActivity();

  return (
    <>
      <HomePageExampleComponent>
        <h1>"Here is a placeholder for homepage components"</h1>
      </HomePageExampleComponent>
      <AddActivityForm addActivity={addActivity} />
      <RecentActivityComponent
        activities={activities}
        deleteActivity={deleteActivity}
      >
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onDelete={deleteActivity}
          />
        ))}
      </RecentActivityComponent>
    </>
  );
};

export default HomePage;
