package com.hotel.onlinebooking.ui.dto.hotelListing;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Amenity {
    private String amenityIcon;
    private String amenityName;
}
