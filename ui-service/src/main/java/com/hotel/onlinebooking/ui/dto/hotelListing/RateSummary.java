package com.hotel.onlinebooking.ui.dto.hotelListing;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class RateSummary {
    private double totalRate;
    private double nightlyRate;
    private double crossOutTotalRate;
    private double crossOutNightlyRate;
    private String formattedTotalRate;
    private String formattedNightlyRate;
    private String formattedCrossOutTotalRate;
    private String formattedCrossOutNightlyRate;
    private String discountRate;
}
