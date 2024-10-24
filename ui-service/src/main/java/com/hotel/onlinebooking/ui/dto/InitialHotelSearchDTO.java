package com.hotel.onlinebooking.ui.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class InitialHotelSearchDTO {
    public enum HotelType {
        SINGLE,
        MULTI
    }
    
    @NotNull(message = "Hotel type is required")
    private HotelType hotelType;

    @Valid
    private List<StayInfo> stays = new ArrayList<>();

    @Valid
    private OccupancyDetails occupancy;

    @Data
    public static class StayInfo {
        @Valid
        @NotNull(message = "Location information is required")
        private LocationInfo location;

        @NotNull(message = "Check-in date is required")
        @JsonFormat(pattern = "yyyy-MM-dd")
        private Date checkInDate;

        @NotNull(message = "Check-out date is required")
        @JsonFormat(pattern = "yyyy-MM-dd")
        private Date checkOutDate;
    }

    @Data
    public static class LocationInfo {
        @NotBlank(message = "City is required")
        private String city;
        
        private String state; // Optional for non-US locations
        
        @NotBlank(message = "Country is required")
        private String country;
        
        private String postalCode;
    }

    @Data
    public static class OccupancyDetails {
        @Min(value = 1, message = "At least one room is required")
        private int rooms;

        @Min(value = 1, message = "At least one adult is required")
        private int adults;

        @Min(value = 0, message = "Number of children cannot be negative")
        private int children;

        @Valid
        private List<ChildAge> childrenAges = new ArrayList<>();
    }

    @Data
    public static class ChildAge {
        @Min(value = 0)
        @Max(value = 17)
        private int age;
    }
}