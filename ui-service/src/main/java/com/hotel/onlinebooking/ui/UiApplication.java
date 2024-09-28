package com.hotel.onlinebooking.ui;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class UiApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(UiApplication.class, args);
	}

	@GetMapping({"/"})
	public String forward(HttpServletRequest httpServletRequest) {
        return "forward:/";
    }

}
