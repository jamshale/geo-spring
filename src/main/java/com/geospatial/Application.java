package com.geospatial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.geospatial"})
// @RestController
public class Application{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}