package com.hotel.onlinebooking.ui.dto.search;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class StayInfo {
    @Valid
    @NotNull(message = "Location information is required")
    private Location location;

    @NotNull(message = "Check-in date is required")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date checkInDate;

    @NotNull(message = "Check-out date is required")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date checkOutDate;
}