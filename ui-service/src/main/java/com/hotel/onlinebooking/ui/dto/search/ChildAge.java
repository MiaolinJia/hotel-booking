package com.hotel.onlinebooking.ui.dto.search;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChildAge {
    @Min(value = 0)
    @Max(value = 17)
    private int age;
}