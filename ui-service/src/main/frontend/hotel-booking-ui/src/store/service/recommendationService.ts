import axios from "axios";
import { RecommendedBundle } from "../../components/FeaturedCarouselComponent/types";

class RecommendationService {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = "http://localhost:80/api/recommendation";
  }

  async getRecommendedBundles(): Promise<RecommendedBundle[]> {
    try {
      const response = await axios.get<RecommendedBundle[]>(
        `${this.apiUrl}/recommended_Bundles`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching recommended bundles:", error);
      throw error;
    }
  }
}

export const recommendationService = new RecommendationService();
