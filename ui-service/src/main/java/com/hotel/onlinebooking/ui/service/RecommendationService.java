package com.hotel.onlinebooking.ui.service;

import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedBundleDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedDealDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedPropertyDTO;

import java.util.List;

public interface RecommendationService {
    public List<RecommendedBundleDTO> getRecommendedBundles();
    public List<RecommendedPropertyDTO> getRecommendedProperties();
    public List<RecommendedDealDTO> getRecommendedDeals();
}
