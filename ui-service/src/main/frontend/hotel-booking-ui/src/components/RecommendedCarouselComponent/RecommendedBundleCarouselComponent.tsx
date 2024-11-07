import { useEffect, useState } from "react";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import RecommendedBundleCard, {
  RecommendedBundleSkeleton,
} from "./RecommendedBundleCard";
import { RecommendedBundle } from "./types";
import { recommendationService } from "../../store/service/recommendationService";

const RecommendedBundleCarouselComponent = () => {
  const [bundles, setBundles] = useState<RecommendedBundle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBundles = async () => {
      try {
        setLoading(true);
        const data = await recommendationService.getRecommendedBundles();
        setBundles(data);
      } catch (err) {
        setError("Failed to load travel deals. Please try again later. " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchBundles();
  }, []);

  if (error) return;

  return (
    <CarouselComponent title="Don't miss these hotel + flight deals">
      {bundles.map((item, index) =>
        loading ? (
          <RecommendedBundleSkeleton key={index} />
        ) : (
          <RecommendedBundleCard key={index} {...item} />
        )
      )}
    </CarouselComponent>
  );
};

export default RecommendedBundleCarouselComponent;
