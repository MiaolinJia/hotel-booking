package com.hotel.onlinebooking.ui.dto.hotelListing;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PayLaterPolicy {
    private boolean isPayLaterAvailable;
    private int daysPayBeforeCheckInDate;
}
