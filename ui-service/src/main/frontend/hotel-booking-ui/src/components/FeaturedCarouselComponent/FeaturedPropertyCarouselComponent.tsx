import { useEffect, useState } from "react";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import FeaturedPropertyCard, {
  FeaturedPropertyCardSkeleton,
} from "./FeaturedPropertyCard";
import { properties } from "./featuredPropertiesMockData";

const FeaturedPropertyCarouselComponent = () => {
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
      title="Looking for the perfect stay?"
      sliderSettings={{ slidesToShow: 4 }}
    >
      {properties.map((item, index) =>
        isLoading ? (
          <FeaturedPropertyCardSkeleton key={index} />
        ) : (
          <FeaturedPropertyCard key={index} {...item} />
        )
      )}
    </CarouselComponent>
  );
};

export default FeaturedPropertyCarouselComponent;
