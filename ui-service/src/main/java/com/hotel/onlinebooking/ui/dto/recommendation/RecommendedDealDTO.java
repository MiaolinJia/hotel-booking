package com.hotel.onlinebooking.ui.dto.recommendation;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecommendedDealDTO {
    private String cityName;
    private String imageUrl;
    private long id;
    private String propertyName;
    private boolean isGenius;
    private Review review;
    private Price price;
}
