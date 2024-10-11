import HomePageExampleComponent from "../components/HomePageExampleComponent";
import ActivityCard from "../components/RecentActivity/ActivityCard";
import { useRecentActivity } from "../components/RecentActivity/useRecentActivity";
import RecentActivityComponent from "../components/RecentActivity/RecentActivityComponent";
import AddActivityForm from "../components/RecentActivity/AddRecentActivityForm";
import { bundles as mockBundles } from "../components/FeaturedBundle/featuredBundlesMockData";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import FeaturedBundleCard from "../components/FeaturedBundle/FeaturedBundleCard";
import FeaturedPropertyCard from "../components/FeaturedProperties/FeaturedPropertyCard";
import { properties as mockProperties } from "../components/FeaturedProperties/featuredPropertiesMockData";
import { recommendedHotels as mockRecommendedHotels } from "../components/FeaturedProperties/recommendedHotelsMockData";
import PromotionComponent from "../components/PromotionComponent/PromotionComponent";

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

      <CarouselComponent
        title="Looking for the perfect stay?"
        sliderSettings={{ slidesToShow: 4 }}
      >
        {mockProperties.map((item, index) => (
          <FeaturedPropertyCard key={index} {...item} />
        ))}
      </CarouselComponent>

      <CarouselComponent
        title="Make your travel dreams come true"
        sliderSettings={{ slidesToShow: 4 }}
      >
        {mockRecommendedHotels.map((item, index) => (
          <FeaturedPropertyCard key={index} {...item} />
        ))}
      </CarouselComponent>

      <PromotionComponent />

      <CarouselComponent title="Don't miss these hotel + flight deals">
        {mockBundles.map((item, index) => (
          <FeaturedBundleCard key={index} {...item} />
        ))}
      </CarouselComponent>

      <AddActivityForm addActivity={addActivity} />
    </>
  );
};

export default HomePage;
