export interface Property {
  amenityList: [
    {
      amenityIcon: string;
      amenityName: string;
    }
  ];
  badgeList: [
    {
      isFamilyFriendly: boolean;
    }
  ];
  propertyThemeList: [
    {
      hotelThemeId: string;
      hotelThemeName: string;
    }
  ];
  location: {
    address: {
      addressLine1: string;
      addressLine2: string;
      cityName: string;
      isoCountryCode: string;
      provinceCode: string;
    };
    cityId: string;
    latitude: number;
    longitude: number;
    neighborhoodDescription: string;
    neighborhoodID: string;
    neighborhoodName: string;
    timeZone: string;
    zoneId: string;
  };
  rateSummary: {
    totalRate: number;
    nightlyRate: number;
    crossOutTotalRate: number;
    crossOutNightlyRate: number;
    formattedTotalRate: string;
    formattedNightlyRate: string;
    formattedCrossOutTotalRate: string;
    formattedCrossOutNightlyRate: string;
    discountRate: string;
  };
  refundPolicy: {
    isFullyRefundable: boolean;
    daysFullyRefundableBeforeCheckInDate: number;
  };
  payLaterPolicy: {
    isPayLaterAvailable: boolean;
    daysPayBeforeCheckInDate: number;
  };
  beddingList: number[];
  ImageList: string[];
  brandId: string;
  propertyId: string;
  propertyType:
    | "HOTEL"
    | "GUESTHOUSE"
    | "APARTMENT"
    | "Inn"
    | "ApartHotel"
    | "CapsuleHotel"
    | "HolidayHome"
    | "Villa";
  propertyName: string;
  propertyDescription: string;
  starRating: number;
  totalReviewCount: number;
  formattedTotalReviewCount: string;
  overallGuestRating: number;
  displayRoomsLeft: boolean;
  roomsLeft: number;
  displayTopBooked: boolean;
  displayMostSaved: boolean;
  mostSaved: number;
}
