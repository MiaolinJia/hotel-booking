import RecentSearchComponent from "../components/RecentSearch/RecentSearchComponent";
import AddActivityForm from "../components/RecentSearch/AddRecentActivityForm";
import PromotionComponent from "../components/PromotionComponent/PromotionComponent";
import FeaturedPropertyCarouselComponent from "../components/FeaturedCarouselComponent/FeaturedPropertyCarouselComponent";
import FeaturedHotelCarouselComponent from "../components/FeaturedCarouselComponent/FeaturedHotelCarouselComponent";
import FeaturedBundleCarouselComponent from "../components/FeaturedCarouselComponent/FeaturedBundleCarouselComponent";

const HomePage: React.FC = () => {
  return (
    <>
      {/* This component is a mocking component for testing recent searches */}
      <AddActivityForm />

      <RecentSearchComponent />

      <FeaturedPropertyCarouselComponent />

      <FeaturedHotelCarouselComponent />

      <PromotionComponent />

      <FeaturedBundleCarouselComponent />
    </>
  );
};

export default HomePage;
