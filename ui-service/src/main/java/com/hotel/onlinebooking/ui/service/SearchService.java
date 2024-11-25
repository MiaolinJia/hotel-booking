package com.hotel.onlinebooking.ui.service;

import com.hotel.onlinebooking.ui.dto.hotelListing.PropertyListingDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedBundleDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedDealDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedPropertyDTO;

import java.util.List;

public interface SearchService {
    public List<PropertyListingDTO> getProperties();
}
