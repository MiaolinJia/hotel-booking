import { useEffect, useState } from "react";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import FeaturedBundleCard, {
  FeaturedBundleSkeleton,
} from "./FeaturedBundleCard";
import { bundles } from "./featuredBundlesMockData";

const FeaturedBundleCarouselComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CarouselComponent title="Don't miss these hotel + flight deals">
      {bundles.map((item, index) =>
        isLoading ? (
          <FeaturedBundleSkeleton key={index} />
        ) : (
          <FeaturedBundleCard key={index} {...item} />
        )
      )}
    </CarouselComponent>
  );
};

export default FeaturedBundleCarouselComponent;
