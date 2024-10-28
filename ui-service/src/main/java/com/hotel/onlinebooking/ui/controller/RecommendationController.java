package com.hotel.onlinebooking.ui.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recommendation")
public class RecommendationController {
    @GetMapping("/featured_properties")
    public ResponseEntity getFeaturedProperties() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/featured_hotels")
    public ResponseEntity getFeaturedHotels() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/featured_Bundles")
    public ResponseEntity getFeaturedBundles() {
        return ResponseEntity.ok().build();
    }
}
