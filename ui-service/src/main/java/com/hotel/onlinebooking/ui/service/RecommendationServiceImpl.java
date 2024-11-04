package com.hotel.onlinebooking.ui.service;

import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedBundleDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedDealDTO;
import com.hotel.onlinebooking.ui.dto.recommendation.RecommendedPropertyDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecommendationServiceImpl implements RecommendationService{
    @Override
    public List<RecommendedBundleDTO> getRecommendedBundles() {
        List<RecommendedBundleDTO> bundles = new ArrayList<>();

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Las Vegas, NV")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/LASVEGAS_600x714.jpg")
                .priceAmount(260)
                .retailPriceAmount(294)
                .searchLink("/shop/search/?origin=PHL&origin-type=AIRPORT&departure-date=20241129&destination=Las+Vegas%2C+NV&destination-type=CITY&return-date=20241202&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Orlando, FL")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/ORLANDO_600x714.jpg")
                .priceAmount(158)
                .retailPriceAmount(197)
                .searchLink("/shop/search/?origin=NYC&origin-type=AIRPORT&departure-date=20241115&destination=Orlando%2C+FL&destination-type=CITY&return-date=20241118&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Miami, FL")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/MIAMIBEACH_600x714.jpg")
                .priceAmount(233)
                .retailPriceAmount(308)
                .searchLink("/shop/search/?origin=NYC&origin-type=AIRPORT&departure-date=20241115&destination=Miami%2C+FL&destination-type=CITY&return-date=20241118&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Atlanta, GA")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/ATLANTA_600x714.jpg")
                .priceAmount(179)
                .retailPriceAmount(185)
                .searchLink("/shop/search/?origin=EWR&origin-type=AIRPORT&departure-date=20241115&destination=Atlanta%2C+GA&destination-type=CITY&return-date=20241118&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Cancun, MEXICO")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/CANCUN_600x714.jpg")
                .priceAmount(308)
                .retailPriceAmount(320)
                .searchLink("/shop/search/?origin=PHL&origin-type=AIRPORT&departure-date=20241122&destination=Cancun%2C+MEXICO&destination-type=CITY&return-date=20241125&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Miami Beach, FL")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/MIAMIBEACH_600x714.jpg")
                .priceAmount(317)
                .retailPriceAmount(383)
                .searchLink("/shop/search/?origin=BWI&origin-type=AIRPORT&departure-date=20241115&destination=Miami+Beach%2C+FL&destination-type=CITY&return-date=20241118&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Fort Lauderdale, FL")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/FORTLAUDERDALE_600x714.jpg")
                .priceAmount(213)
                .retailPriceAmount(235)
                .searchLink("/shop/search/?origin=NYC&origin-type=AIRPORT&departure-date=20241115&destination=Fort+Lauderdale%2C+FL&destination-type=CITY&return-date=20241118&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Los Angeles, CA")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/LOSANGELES_600x714.jpg")
                .priceAmount(298)
                .retailPriceAmount(298)
                .searchLink("/shop/search/?origin=NYC&origin-type=AIRPORT&departure-date=20241115&destination=Los+Angeles%2C+CA&destination-type=CITY&return-date=20241118&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("New Orleans, LA")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/NEWORLEANS_600x714.jpg")
                .priceAmount(234)
                .retailPriceAmount(241)
                .searchLink("/shop/search/?origin=NYC&origin-type=AIRPORT&departure-date=20241115&destination=New+Orleans%2C+LA&destination-type=CITY&return-date=20241118&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        bundles.add(RecommendedBundleDTO.builder()
                .cityName("Cancun, MX")
                .cityImageUrl("//s1.pclncdn.com/cityimages/thumb/w600/CANCUN_600x714.jpg")
                .priceAmount(345)
                .retailPriceAmount(348)
                .searchLink("/shop/search/?origin=PHL&origin-type=AIRPORT&departure-date=20241122&destination=Cancun%2C+MX&destination-type=CITY&return-date=20241125&package-type-code=AH&num-adults=2&num-children=0&num-lap-infants=0&num-rooms=1")
                .productName("Hotel + Flight")
                .description("3 nights hotel + Round-trip flight")
                .build());

        return bundles;
    }

    @Override
    public List<RecommendedPropertyDTO> getRecommendedProperties() {
        List<RecommendedPropertyDTO> properties = new ArrayList<>();

        properties.add(RecommendedPropertyDTO.builder()
                .cityName("Neuruppin")
                .imageUrl("/xdata/images/hotel/square600/239946673.webp?k=d4af6d47b2b73bc9e179d0433d12302101342eb891ffb7d0ac40b31d4142dcb7&o=")
                .id(6063591)
                .propertyName("Waldschenke Stendenitz Übernachten im Wald am See")
                .isGenius(false)
                .nbWishList(1)
                .country("Germany")
                .countryCode("de")
                .review(RecommendedPropertyDTO.Review.builder()
                        .rating("Wonderful")
                        .score(8.7)
                        .formattedReviewCount("382 reviews")
                        .build())
                .build());

        properties.add(RecommendedPropertyDTO.builder()
                .cityName("Uig")
                .imageUrl("/xdata/images/hotel/square600/261566046.webp?k=823cbc5e59ac91784d1c262d35ba4b89082a27d1222994e08e4647c29bd1c6db&o=")
                .id(5837006)
                .propertyName("Harbor View")
                .isGenius(false)
                .nbWishList(0)
                .country("United Kingdom")
                .countryCode("gb")
                .review(RecommendedPropertyDTO.Review.builder()
                        .rating("Excellent")
                        .score(8.9)
                        .formattedReviewCount("133 reviews")
                        .build())
                .build());

        properties.add(RecommendedPropertyDTO.builder()
                .cityName("Valera de Abajo")
                .imageUrl("/xdata/images/hotel/square600/236967822.webp?k=767dbb831d2109499cf73d2880a88e021a73781d7206cb812a328fd344756951&o=")
                .id(5724684)
                .propertyName("Casa rural La Marquesa - Cuenca")
                .isGenius(false)
                .nbWishList(0)
                .country("Spain")
                .countryCode("es")
                .review(RecommendedPropertyDTO.Review.builder()
                        .rating("Exceptional")
                        .score(9.5)
                        .formattedReviewCount("63 reviews")
                        .build())
                .build());

        properties.add(RecommendedPropertyDTO.builder()
                .cityName("Jastrzębia Góra")
                .imageUrl("/xdata/images/hotel/square600/210942190.webp?k=0ad754ae6e916d21e9ec026fcf188284b6b8e6cb951561721cd416270a0af51a&o=")
                .id(5399147)
                .propertyName("Domki ROSSE niedaleko plaży")
                .isGenius(true)
                .nbWishList(0)
                .country("Poland")
                .countryCode("pl")
                .review(RecommendedPropertyDTO.Review.builder()
                        .rating("Exceptional")
                        .score(9.8)
                        .formattedReviewCount("135 reviews")
                        .build())
                .build());

        properties.add(RecommendedPropertyDTO.builder()
                .cityName("Putten")
                .imageUrl("/xdata/images/hotel/square600/218529186.webp?k=497b590292b9828d1e4ad797cfe30a51d40a193bca4a28efe88ee8a9d6809dd3&o=")
                .id(4567554)
                .propertyName("Casaprisco")
                .isGenius(true)
                .nbWishList(1)
                .country("Netherlands")
                .countryCode("nl")
                .review(RecommendedPropertyDTO.Review.builder()
                        .rating("Wonderful")
                        .score(9.2)
                        .formattedReviewCount("66 reviews")
                        .build())
                .build());

        properties.add(RecommendedPropertyDTO.builder()
                .cityName("Simonsberg")
                .imageUrl("/xdata/images/hotel/square240/178421525.webp?k=6c9cfca83aa49631c55eaed32fb7a6eb68573ffa76a47b23346504830249b853&o=")
                .id(4540189)
                .propertyName("Das rote Haus hinterm Deich")
                .isGenius(false)
                .nbWishList(1)
                .country("Germany")
                .countryCode("de")
                .review(RecommendedPropertyDTO.Review.builder()
                        .rating("Wonderful")
                        .score(9.4)
                        .formattedReviewCount("48 reviews")
                        .build())
                .build());

        return properties;
    }

    @Override
    public List<RecommendedDealDTO> getRecommendedDeals() {
        List<RecommendedDealDTO> deals = new ArrayList<>();

        deals.add(RecommendedDealDTO.builder()
                .cityName("New York, United States of America")
                .imageUrl("/xdata/images/hotel/square240/180596947.jpg?k=cf4410d3ada8fcc33f005f6c3cc6524793719debc58cc598927d32786475dc68&o=")
                .id(1294230)
                .propertyName("Baccarat Hotel and Residences New York")
                .isGenius(false)
                .review(RecommendedDealDTO.Review.builder()
                        .rating("Wonderful")
                        .score(9.0)
                        .reviewCount(292)
                        .formattedReviewCount("292 reviews")
                        .build())
                .price(RecommendedDealDTO.Price.builder()
                        .formattedPrice("$3,186")
                        .formattedCrossedOutPrice("$3,540")
                        .priceText("2 nights")
                        .priceTextEnd("")
                        .build())
                .build());

        deals.add(RecommendedDealDTO.builder()
                .cityName("Ocean City, United States of America")
                .imageUrl("/xdata/images/hotel/square240/315744922.jpg?k=6b772b6ce4bad143671a221d80b4f12a3fb750ed6a4c5ea6b7156d9578f46a44&o=")
                .id(307489)
                .propertyName("Grand Hotel Ocean City Oceanfront")
                .isGenius(true)
                .review(RecommendedDealDTO.Review.builder()
                        .rating("Excellent")
                        .score(8.6)
                        .reviewCount(4675)
                        .formattedReviewCount("4,675 reviews")
                        .build())
                .price(RecommendedDealDTO.Price.builder()
                        .formattedPrice("$278")
                        .formattedCrossedOutPrice("$348")
                        .priceText("2 nights")
                        .priceTextEnd("")
                        .build())
                .build());

        deals.add(RecommendedDealDTO.builder()
                .cityName("Orlando, United States of America")
                .imageUrl("/xdata/images/hotel/square240/183281202.jpg?k=ccef0be72c883ef46aa63beb35c368d1c28eb558418a7817186d89c13aa9bb5e&o=")
                .id(3316249)
                .propertyName("Margaritaville Resort Orlando")
                .isGenius(false)
                .review(RecommendedDealDTO.Review.builder()
                        .rating("Excellent")
                        .score(8.7)
                        .reviewCount(2797)
                        .formattedReviewCount("2,797 reviews")
                        .build())
                .price(RecommendedDealDTO.Price.builder()
                        .formattedPrice("$439")
                        .formattedCrossedOutPrice("$488")
                        .priceText("2 nights")
                        .priceTextEnd("")
                        .build())
                .build());

        deals.add(RecommendedDealDTO.builder()
                .cityName("New York, United States of America")
                .imageUrl("/xdata/images/hotel/square240/303276079.jpg?k=7c641bb6a05b102ca99c07bf59d21a5c07eac5db177ac370139ca79ea1a4c348&o=")
                .id(4700797)
                .propertyName("The Belvedere Hotel")
                .isGenius(false)
                .review(RecommendedDealDTO.Review.builder()
                        .rating("Good")
                        .score(7.9)
                        .reviewCount(5980)
                        .formattedReviewCount("5,980 reviews")
                        .build())
                .price(RecommendedDealDTO.Price.builder()
                        .formattedPrice("$746")
                        .formattedCrossedOutPrice("$848")
                        .priceText("2 nights")
                        .priceTextEnd("")
                        .build())
                .build());

        deals.add(RecommendedDealDTO.builder()
                .cityName("Ocean City, United States of America")
                .imageUrl("/xdata/images/hotel/square240/560249073.jpg?k=98fc05818db9aab940f8b3bac6662562bda75637c3cb18966bf6b22282e7d39c&o=")
                .id(3278354)
                .propertyName("Bay Club Resort")
                .isGenius(true)
                .review(RecommendedDealDTO.Review.builder()
                        .rating("Very Good")
                        .score(8.2)
                        .reviewCount(308)
                        .formattedReviewCount("308 reviews")
                        .build())
                .price(RecommendedDealDTO.Price.builder()
                        .formattedPrice("$275")
                        .formattedCrossedOutPrice("$367")
                        .priceText("2 nights")
                        .priceTextEnd("")
                        .build())
                .build());
        return deals;
    }
}
