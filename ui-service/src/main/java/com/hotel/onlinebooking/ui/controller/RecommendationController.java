package com.hotel.onlinebooking.ui.controller;

import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedBundleDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedDealDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedPropertyDTO;
import com.hotel.onlinebooking.ui.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/recommendation")
public class RecommendationController {
    private final RecommendationService recommendationService;

    @Autowired
    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }


    @GetMapping("/recommended_properties")
    public ResponseEntity<List<RecommendedPropertyDTO>>  getRecommendedProperties() {
        return ResponseEntity.ok(recommendationService.getRecommendedProperties());
    }

    @GetMapping("/recommended_hotels")
    public ResponseEntity<List<RecommendedDealDTO>> getRecommendedDeals() {
        return ResponseEntity.ok(recommendationService.getRecommendedDeals());
    }

    @GetMapping("/recommended_Bundles")
    public ResponseEntity<List<RecommendedBundleDTO>> getRecommendedBundles() {
        return ResponseEntity.ok(recommendationService.getRecommendedBundles());
    }
}
