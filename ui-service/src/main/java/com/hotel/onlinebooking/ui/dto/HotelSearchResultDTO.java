package com.hotel.onlinebooking.ui.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class HotelSearchResultDTO {
    private List<HotelResult> hotels;

    @Data
    public static class HotelResult {
        private String id;
        private String name;
        private String propertyType;
        private LocationInfo location;
        private List<String> imageUrls;
        private PricingInfo pricing;
        private RatingInfo rating;
        private List<String> amenities;
        private List<String> tags;
        private String inventoryInfo;
        private boolean isAvailable;
        private boolean isPreferred;
        private boolean isPromoted;
        private boolean isRefundable;
        private boolean isPayLaterAvailable;

        @Data
        public static class PricingInfo {
            private BigDecimal currentPrice;
            private BigDecimal originalPrice;
            private String currency;
            private boolean isRefundable;
            private List<String> includedPerks;
        }

        @Data
        public static class RatingInfo {
            private Double score;
            private Integer reviewCount;
            private String category;
        }
    }
}