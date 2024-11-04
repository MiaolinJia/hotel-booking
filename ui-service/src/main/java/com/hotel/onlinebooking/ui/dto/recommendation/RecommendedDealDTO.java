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

    @Data
    @Builder
    public static class Review {
        String rating;
        double score;
        int reviewCount;
        String formattedReviewCount;
    }

    @Data
    @Builder
    public static class Price {
        String formattedPrice;
        String formattedCrossedOutPrice;
        String priceText;
        String priceTextEnd;
    }

}
