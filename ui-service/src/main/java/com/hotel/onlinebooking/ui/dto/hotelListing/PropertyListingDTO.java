package com.hotel.onlinebooking.ui.dto.hotelListing;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PropertyListingDTO {
    private List<Amenity> amenityList;
    private List<Badge> badgeList;
    private List<Theme> propertyThemeList;
    private Location location;
    private RateSummary rateSummary;
    private RefundPolicy refundPolicy;
    private PayLaterPolicy payLaterPolicy;
    private List<Integer> beddingList;
    private List<String> ImageList;
    private String brandId;
    private String propertyId;
    private PropertyType propertyType;
    private String propertyName;
    private String propertyDescription;
    private double starRating;
    private int totalReviewCount;
    private String formattedTotalReviewCount;
    private double overallGuestRating;
    private boolean displayRoomsLeft;
    private int roomsLeft;
    private boolean displayTopBooked;
    private boolean displayMostSaved;
    private int mostSaved;
}
