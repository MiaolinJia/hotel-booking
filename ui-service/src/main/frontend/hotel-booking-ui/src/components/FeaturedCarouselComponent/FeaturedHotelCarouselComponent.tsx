import CarouselComponent from "../CarouselComponent/CarouselComponent";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import { recommendedHotels } from "./recommendedHotelsMockData";

const FeaturedHotelCarouselComponent = () => {
  return (
    <CarouselComponent
      title="Make your travel dreams come true"
      sliderSettings={{ slidesToShow: 4 }}
    >
      {recommendedHotels.map((item, index) => (
        <FeaturedPropertyCard key={index} {...item} />
      ))}
    </CarouselComponent>
  );
};

export default FeaturedHotelCarouselComponent;
