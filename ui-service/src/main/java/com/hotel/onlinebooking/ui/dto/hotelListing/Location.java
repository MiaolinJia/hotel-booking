package com.hotel.onlinebooking.ui.dto.hotelListing;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Location {
    private Address address;
    private String cityId;
    private double latitude;
    private double longitude;
    private String neighborhoodDescription;
    private String neighborhoodID;
    private String neighborhoodName;
    private String timeZone;
    private String zoneId;
}
