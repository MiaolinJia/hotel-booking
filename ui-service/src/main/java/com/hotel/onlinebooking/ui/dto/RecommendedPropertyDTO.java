package com.hotel.onlinebooking.ui.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class RecommendedPropertyDTO {
    private String id;
    private String name;
    private PropertyType propertyType;
    private String mainImage;
    private List<String> imageGallery;
    private LocationInfo location;
    private Double rating;
    private Integer reviewCount;
    private BigDecimal price;
    private BigDecimal originalPrice;
    private String currency;
    private boolean isGenius;
}
