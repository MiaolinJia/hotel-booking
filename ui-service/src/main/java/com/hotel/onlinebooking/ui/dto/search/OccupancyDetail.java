package com.hotel.onlinebooking.ui.dto.search;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class OccupancyDetail {
    @Min(value = 1, message = "At least one room is required")
    private int rooms;

    @Min(value = 1, message = "At least one adult is required")
    private int adults;

    @Min(value = 0, message = "Number of children cannot be negative")
    private int children;

    @Valid
    private List<ChildAge> childrenAges;
}
