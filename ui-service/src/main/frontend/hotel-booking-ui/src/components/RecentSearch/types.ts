export interface SearchFormData {
  hotelType: "single" | "multi";
  destination: string;
  startDate: Date;
  endDate: Date;
  rooms: number;
  adults: number;
  children: number;
  bundleSave: boolean;
  addCar: boolean;
  addFlight: boolean;
}

export interface RecentSearch {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  rooms: number;
  adults: number;
  children: number;
}

export interface RecentSearchesState {
  searches: RecentSearch[];
}

export interface RecentSearchCardProps {
  search: RecentSearch;
  onDelete: (id: string) => void;
}
