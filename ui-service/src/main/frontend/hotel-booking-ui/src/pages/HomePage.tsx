import HomePageExampleComponent from "../components/HomePageExampleComponent";
import SearchHotelComponent from "../components/search-components/SearchComponent.tsx";
import RecentActivityComponent from "../components/RecentActivity/RecentActivityComponent";
import { bundles as mockBundles } from "../components/FeaturedBundle/featuredBundlesMockData";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import FeaturedBundleCard from "../components/FeaturedBundle/FeaturedBundleCard";
import FeaturedPropertyCard from "../components/FeaturedProperties/FeaturedPropertyCard";
import { properties as mockProperties } from "../components/FeaturedProperties/featuredPropertiesMockData";
import { recommendedHotels as mockRecommendedHotels } from "../components/FeaturedProperties/recommendedHotelsMockData";
import PromotionComponent from "../components/PromotionComponent/PromotionComponent";
import { Provider } from "react-redux";
import store from "../store/index.ts";

const HomePage: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <HomePageExampleComponent>
          <h1>"Here is a placeholder for homepage components"</h1>
        </HomePageExampleComponent>

        <SearchHotelComponent />

        <RecentActivityComponent />

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
      </Provider>
    </>
  );
};

export default HomePage;
