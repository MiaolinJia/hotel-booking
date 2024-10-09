import HomePageExampleComponent from "../components/HomePageExampleComponent";
import ActivityCard from "../components/RecentActivity/ActivityCard";
import { useRecentActivity } from "../components/RecentActivity/useRecentActivity";
import RecentActivityComponent from "../components/RecentActivity/RecentActivityComponent";
import AddActivityForm from "../components/RecentActivity/AddRecentActivityForm";
import FeaturedBundleComponent from "../components/FeaturedBundle/FeaturedBundleComponent";
import { bundles as mockBundles } from "../components/FeaturedBundle/featuredBundlesMockData";

const HomePage: React.FC = () => {
  const { activities, addActivity, deleteActivity } = useRecentActivity();

  return (
    <>
      <HomePageExampleComponent>
        <h1>"Here is a placeholder for homepage components"</h1>
      </HomePageExampleComponent>

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
      <FeaturedBundleComponent bundles={mockBundles} />
      <AddActivityForm addActivity={addActivity} />
    </>
  );
};

export default HomePage;
