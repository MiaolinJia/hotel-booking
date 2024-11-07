package com.hotel.onlinebooking.ui.dto.search;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class InitialSearchDTO {
    @NotNull(message = "Hotel type is required")
    private HotelType hotelType;

    @Valid
    private List<StayInfo> stays;

    @Valid
    private OccupancyDetail occupancy;
}