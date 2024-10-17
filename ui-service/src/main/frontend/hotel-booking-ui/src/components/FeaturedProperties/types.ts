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
