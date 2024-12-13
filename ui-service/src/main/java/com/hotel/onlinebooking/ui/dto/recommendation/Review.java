package com.hotel.onlinebooking.ui.dto.recommendation;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Review {
    String rateText;
    double rateScore;
    int reviewCount;
    String formattedReviewCount;
}