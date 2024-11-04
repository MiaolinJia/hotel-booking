package com.hotel.onlinebooking.ui.dto.recommendation;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecommendedBundleDTO {
    private String cityName;
    private String cityImageUrl;
    private double priceAmount;
    private double retailPriceAmount;
    private String searchLink;
    private String productName;
    private String description;
}
