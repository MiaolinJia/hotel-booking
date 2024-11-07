package com.hotel.onlinebooking.ui.dto.hotelListing;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RefundPolicy {
    private boolean isFullyRefundable;
    private int daysFullyRefundableBeforeCheckInDate;
}
