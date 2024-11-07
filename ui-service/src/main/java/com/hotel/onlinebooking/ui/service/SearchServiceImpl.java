package com.hotel.onlinebooking.ui.service;

import com.hotel.onlinebooking.ui.dto.hotelListing.*;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class SearchServiceImpl implements SearchService{
    @Override
    public List<PropertyListingDTO> getProperties() {
        return Arrays.asList(
                createSampleHotel("Luxury Hotel", "Manhattan", 4.5),
                createSampleHotel("Beach Resort", "Miami", 4.8),
                createSampleHotel("Mountain Lodge", "Denver", 4.2)
        );
    }

    private PropertyListingDTO createSampleHotel(String name, String city, double rating) {
        return PropertyListingDTO.builder()
                .amenityList(Arrays.asList(
                        Amenity.builder()
                                .amenityIcon("wifi-icon")
                                .amenityName("Free WiFi")
                                .build(),
                        Amenity.builder()
                                .amenityIcon("pool-icon")
                                .amenityName("Swimming Pool")
                                .build()
                ))
                .badgeList(Collections.singletonList(
                        Badge.builder()
                                .isFamilyFriendly(true)
                                .build()
                ))
                .propertyThemeList(Arrays.asList(
                        Theme.builder()
                                .hotelThemeId("theme-001")
                                .hotelThemeName("Luxury")
                                .build(),
                        Theme.builder()
                                .hotelThemeId("theme-002")
                                .hotelThemeName("Comfort")
                                .build()
                ))
                .location(Location.builder()
                        .address(Address.builder()
                                .addressLine1("123 Main St")
                                .cityName(city)
                                .isoCountryCode("US")
                                .provinceCode("NY")
                                .build())
                        .latitude(40.7128)
                        .longitude(-74.0060)
                        .neighborhoodName("Downtown")
                        .timeZone("America/New_York")
                        .build())
                .rateSummary(RateSummary.builder()
                        .totalRate(299.99)
                        .nightlyRate(149.99)
                        .formattedTotalRate("$299.99")
                        .formattedNightlyRate("$149.99")
                        .discountRate("20% OFF")
                        .build())
                .refundPolicy(RefundPolicy.builder()
                        .isFullyRefundable(true)
                        .daysFullyRefundableBeforeCheckInDate(1)
                        .build())
                .payLaterPolicy(PayLaterPolicy.builder()
                        .isPayLaterAvailable(true)
                        .daysPayBeforeCheckInDate(0)
                        .build())
                .beddingList(Arrays.asList(1, 2))
                .ImageList(Arrays.asList("hotel-exterior.jpg", "room-interior.jpg"))
                .brandId("brand-001")
                .propertyId(java.util.UUID.randomUUID().toString())
                .propertyType(PropertyType.HOTEL)
                .propertyName(name)
                .propertyDescription("Luxurious hotel in the heart of " + city)
                .starRating(rating)
                .totalReviewCount(1250)
                .formattedTotalReviewCount("1,250")
                .overallGuestRating(4.5)
                .displayRoomsLeft(true)
                .roomsLeft(5)
                .displayTopBooked(true)
                .displayMostSaved(true)
                .mostSaved(50)
                .build();
    }
}
