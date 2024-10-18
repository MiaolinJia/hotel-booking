import CarouselComponent from "../CarouselComponent/CarouselComponent";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import { properties } from "./featuredPropertiesMockData";

const FeaturedPropertyCarouselComponent = () => {
  return (
    <CarouselComponent
      title="Looking for the perfect stay?"
      sliderSettings={{ slidesToShow: 4 }}
    >
      {properties.map((item, index) => (
        <FeaturedPropertyCard key={index} {...item} />
      ))}
    </CarouselComponent>
  );
};

export default FeaturedPropertyCarouselComponent;
