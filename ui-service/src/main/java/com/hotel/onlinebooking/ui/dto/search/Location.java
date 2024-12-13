package com.hotel.onlinebooking.ui.dto.search;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Location {
    private String city;
    private String state;
    private String country;
    private String id;
    private String postalCode;
    private String neighborhoodName;
    private Double latitude;
    private Double longitude;
}
