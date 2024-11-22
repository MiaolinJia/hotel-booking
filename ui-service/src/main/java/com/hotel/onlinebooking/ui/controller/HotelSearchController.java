package com.hotel.onlinebooking.ui.controller;

import com.hotel.onlinebooking.ui.dto.hotelListing.PropertyListingDTO;
import com.hotel.onlinebooking.ui.dto.search.InitialSearchDTO;
import com.hotel.onlinebooking.ui.service.SearchService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/hotels")
public class HotelSearchController {
    private final SearchService searchService;

    @Autowired
    public HotelSearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @PostMapping("/initial_search")
    public ResponseEntity<List<PropertyListingDTO>> initialSearch(@Valid @RequestBody InitialSearchDTO searchRequest) {
        log.info("Fetching property listings with search Request: {}", searchRequest);
        return ResponseEntity.ok(searchService.getProperties());
    }
}
/*
* TODO:
* 1. Validate search field before submit
* 2. Switch between Single/Multi hotel, the form is not properly initialized.
*    The input field contains the value, but the form model is undefined.
* 3. Plurals in the history card
* 4. Search location should be selected from list of locations fetched from backend.
* */