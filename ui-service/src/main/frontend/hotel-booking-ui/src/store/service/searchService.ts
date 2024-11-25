import axios from "axios";
import { FormData } from "../../types/HotelSearchFormTypes";
import { Property } from "../../types/HotelSearchResult";

class SearchService {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = "http://localhost:80/api/hotels";
  }

  async getSearchResults(formData: FormData): Promise<Property[]> {
    try {
      const response = await axios.post<Property[]>(
        `${this.apiUrl}/initial_search`,
        formData
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching search result:", error);
      throw error;
    }
  }
}

export const searchService = new SearchService();
