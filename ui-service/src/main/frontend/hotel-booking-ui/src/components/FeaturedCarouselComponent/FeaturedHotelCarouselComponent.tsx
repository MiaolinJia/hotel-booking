import { useEffect, useState } from "react";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import FeaturedPropertyCard, {
  FeaturedPropertyCardSkeleton,
} from "./FeaturedPropertyCard";
import { recommendedHotels } from "./recommendedHotelsMockData";

const FeaturedHotelCarouselComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CarouselComponent
      title="Make your travel dreams come true"
      sliderSettings={{ slidesToShow: 4 }}
    >
      {recommendedHotels.map((item, index) =>
        isLoading ? (
          <FeaturedPropertyCardSkeleton key={index} />
        ) : (
          <FeaturedPropertyCard key={index} {...item} />
        )
      )}
    </CarouselComponent>
  );
};

export default FeaturedHotelCarouselComponent;
