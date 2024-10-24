package com.hotel.onlinebooking.ui.controller;

import com.hotel.onlinebooking.ui.dto.InitialHotelSearchDTO;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hotels")
public class HotelSearchController {

    @PostMapping("/initial-search")
    public ResponseEntity initialSearch(
            @Valid @RequestBody InitialHotelSearchDTO searchRequest) {
        return ResponseEntity.ok().build();
    }
}
