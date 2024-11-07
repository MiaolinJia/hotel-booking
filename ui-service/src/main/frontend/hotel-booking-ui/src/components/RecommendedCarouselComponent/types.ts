export interface RecommendedProperty {
  cityName: string;
  country?: string;
  countryCode?: string;
  imageUrl: string;
  id: number;
  propertyName: string;
  propertyType?: string;
  isGenius?: boolean;
  nbWishList?: number;
  review?: Review;
  price?: Price;
}

export interface Review {
  rateText: string;
  rateScore: number;
  reviewCount: number;
  formattedReviewCount: string;
}

export interface Price {
  formattedPrice: string;
  formattedCrossedOutPrice: string;
  priceText: string;
  priceTextEnd: string;
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
