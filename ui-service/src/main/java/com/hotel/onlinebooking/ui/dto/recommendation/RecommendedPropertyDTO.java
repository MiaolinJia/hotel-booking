package com.hotel.onlinebooking.ui.dto.recommendation;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecommendedPropertyDTO {
    private String cityName;
    private String country;
    private String countryCode;
    private String imageUrl;
    private long id;
    private String propertyName;
    private boolean isGenius;
    private int nbWishList;
    private Review review;
}
