package com.hotel.onlinebooking.ui.dto.search;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChildAge {
    @Min(value = 0)
    @Max(value = 17)
    private int age;
}