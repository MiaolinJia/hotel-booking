import axios from "axios";
import {
  RecommendedBundle,
  RecommendedProperty,
} from "../../components/RecommendedCarouselComponent/types";

class RecommendationService {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = "http://localhost:80/api/recommendation";
  }

  async getRecommendedBundles(): Promise<RecommendedBundle[]> {
    try {
      const response = await axios.get<RecommendedBundle[]>(
        `${this.apiUrl}/recommended_bundles`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching recommended bundles:", error);
      throw error;
    }
  }

  async getRecommendedProperties(): Promise<RecommendedProperty[]> {
    try {
      const response = await axios.get<RecommendedProperty[]>(
        `${this.apiUrl}/recommended_properties`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching recommended properties:", error);
      throw error;
    }
  }

  async getRecommendedHotels(): Promise<RecommendedProperty[]> {
    try {
      const response = await axios.get<RecommendedProperty[]>(
        `${this.apiUrl}/recommended_hotels`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching recommended hotels:", error);
      throw error;
    }
  }
}

export const recommendationService = new RecommendationService();
