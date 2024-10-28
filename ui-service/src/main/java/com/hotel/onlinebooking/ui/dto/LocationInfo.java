package com.hotel.onlinebooking.ui.dto;

import lombok.Data;

@Data
public class LocationInfo {
    private String city;
    private String state;
    private String country;
    private String postalCode;
    private String neighborhood;
    private Coordinates coordinates;

    @Data
    public static class Coordinates {
        private Double latitude;
        private Double longitude;
    }
}
