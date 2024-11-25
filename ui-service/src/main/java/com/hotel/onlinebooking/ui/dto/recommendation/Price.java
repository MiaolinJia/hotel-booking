package com.hotel.onlinebooking.ui.dto.recommendation;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Price {
    String formattedPrice;
    String formattedCrossedOutPrice;
    String priceText;
    String priceTextEnd;
}