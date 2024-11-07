package com.hotel.onlinebooking.ui.dto.recommendation;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class RecommendedBundleDTO {
    private String cityName;
    private String cityImageUrl;
    private double priceAmount;
    private double retailPriceAmount;
    private LocalDate startDate;
    private LocalDate endDate;
    private String searchLink;
    private String productName;
    private String description;
}
