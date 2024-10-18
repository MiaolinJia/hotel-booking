import CarouselComponent from "../CarouselComponent/CarouselComponent";
import FeaturedBundleCard from "./FeaturedBundleCard";
import { bundles } from "./featuredBundlesMockData";

const FeaturedBundleCarouselComponent = () => {
  return (
    <CarouselComponent title="Don't miss these hotel + flight deals">
      {bundles.map((item, index) => (
        <FeaturedBundleCard key={index} {...item} />
      ))}
    </CarouselComponent>
  );
};

export default FeaturedBundleCarouselComponent;
