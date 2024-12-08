import RecentSearchComponent from "../components/RecentSearch/RecentSearchComponent";
import PromotionComponent from "../components/PromotionComponent/PromotionComponent";
import FeaturedPropertyCarouselComponent
    from "../components/FeaturedCarouselComponent/FeaturedPropertyCarouselComponent";
import FeaturedHotelCarouselComponent from "../components/FeaturedCarouselComponent/FeaturedHotelCarouselComponent";
import FeaturedBundleCarouselComponent from "../components/FeaturedCarouselComponent/FeaturedBundleCarouselComponent";
import React from "react";
import SearchHotelComponent from "../components/SearchHotelComponent/SearchComponent.tsx";

const HomePage: React.FC = () => {
    return (
        <>
            <SearchHotelComponent/>

            <RecentSearchComponent/>

            <FeaturedPropertyCarouselComponent/>

            <FeaturedHotelCarouselComponent/>

            <PromotionComponent/>

            <FeaturedBundleCarouselComponent/>
        </>
    );
};

export default HomePage;
