package com.hotel.onlinebooking.ui.controller;

import com.hotel.onlinebooking.ui.dto.hotelListing.PropertyListingDTO;
import com.hotel.onlinebooking.ui.dto.search.InitialSearchDTO;
import com.hotel.onlinebooking.ui.service.SearchService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/hotels")
public class HotelSearchController {
    private final SearchService searchService;

    @Autowired
    public HotelSearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @PostMapping("/initial-search")
    public ResponseEntity<List<PropertyListingDTO>> initialSearch(
            @Valid @RequestBody InitialSearchDTO searchRequest) {
        log.info("Fetching property listings with search Request: {}", searchRequest);
        return ResponseEntity.ok(searchService.getProperties());
    }
}
