package com.hotel.onlinebooking.ui.dto.hotelListing;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Address { 
    private String addressLine1;
    private String addressLine2;
    private String cityName;
    private String isoCountryCode;
    private String provinceCode;
}
