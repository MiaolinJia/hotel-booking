import { useEffect, useState } from "react";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import RecommendedPropertyCard, {
  FeaturedPropertyCardSkeleton,
} from "./RecommendedPropertyCard";
import { recommendationService } from "../../store/service/recommendationService";
import { RecommendedProperty } from "./types";

const RecommendedPropertyCarouselComponent = () => {
  const [properties, setProperties] = useState<RecommendedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBundles = async () => {
      try {
        setLoading(true);
        const data = await recommendationService.getRecommendedProperties();
        setProperties(data);
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
      title="Looking for the perfect stay?"
      sliderSettings={{ slidesToShow: 4 }}
    >
      {properties.map((item, index) =>
        loading ? (
          <FeaturedPropertyCardSkeleton key={index} />
        ) : (
          <RecommendedPropertyCard key={index} {...item} />
        )
      )}
    </CarouselComponent>
  );
};

export default RecommendedPropertyCarouselComponent;
