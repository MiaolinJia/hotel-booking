import { useEffect, useState } from "react";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import RecommendedPropertyCard, {
  FeaturedPropertyCardSkeleton,
} from "./RecommendedPropertyCard";
import { RecommendedProperty } from "../../types/RecommendedCarouselComponentTypesypes";
import { recommendationService } from "../../store/service/recommendationService";

const RecommendedHotelCarouselComponent = () => {
  const [hotels, setHotels] = useState<RecommendedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBundles = async () => {
      try {
        setLoading(true);
        const data = await recommendationService.getRecommendedHotels();
        setHotels(data);
      } catch (err) {
        setError(
          "Failed to load recommended properties. Please try again later. " +
            err
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBundles();
  }, []);

  if (error) return;

  return (
    <CarouselComponent
      title="Make your travel dreams come true"
      sliderSettings={{ slidesToShow: 4 }}
    >
      {hotels.map((item, index) =>
        loading ? (
          <FeaturedPropertyCardSkeleton key={index} />
        ) : (
          <RecommendedPropertyCard key={index} {...item} />
        )
      )}
    </CarouselComponent>
  );
};

export default RecommendedHotelCarouselComponent;
