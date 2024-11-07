export interface FeaturedProperty {
  image: string;
  showWishlist: boolean | null;
  propertyType: string | null;
  isGenius: boolean;
  name: string;
  location: string | null;
  rating: number;
  reviewCount: number;
  price: number | null;
  originalPrice: number | null;
}

export interface RecommendedBundle {
  cityName: string;
  cityImageUrl: string;
  priceAmount: number;
  retailPriceAmount: number;
  startDate: string;
  endDate: string;
  searchLink: string;
  productName: string;
  description: string;
}
