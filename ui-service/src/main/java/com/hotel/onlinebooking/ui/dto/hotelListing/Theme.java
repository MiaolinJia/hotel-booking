package com.hotel.onlinebooking.ui.dto.hotelListing;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Theme {
    private String hotelThemeId;
    private String hotelThemeName;
}
