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
