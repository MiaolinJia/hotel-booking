import RecentSearchComponent from "../components/RecentSearch/RecentSearchComponent";
import PromotionComponent from "../components/PromotionComponent/PromotionComponent";
import React from "react";
import SearchHotelComponent from "../components/search-components/SearchComponent.tsx";
import RecommendedPropertyCarouselComponent from "../components/RecommendedCarouselComponent/RecommendedPropertyCarouselComponent";
import RecommendedHotelCarouselComponent from "../components/RecommendedCarouselComponent/RecommendedHotelCarouselComponent";
import RecommendedBundleCarouselComponent from "../components/RecommendedCarouselComponent/RecommendedBundleCarouselComponent.tsx";

const HomePage: React.FC = () => {
  return (
    <>
      <SearchHotelComponent />

      <RecentSearchComponent />

      <RecommendedPropertyCarouselComponent />

      <RecommendedHotelCarouselComponent />

      <PromotionComponent />

      <RecommendedBundleCarouselComponent />
    </>
  );
};

export default HomePage;
