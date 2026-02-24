package com.skyscanner;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.skyscanner.api.SearchResult;
import com.skyscanner.resources.SearchResource;
import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class HoenScannerApplication extends Application<HoenScannerConfiguration> {

    public static void main(final String[] args) throws Exception {
        new HoenScannerApplication().run(args);
    }

    @Override
    public String getName() {
        return "hoen-scanner";
    }

    @Override
    public void initialize(final Bootstrap<HoenScannerConfiguration> bootstrap) {

    }

    @Override
    public void run(final HoenScannerConfiguration configuration, final Environment environment) {
        ObjectMapper mapper = new ObjectMapper();
        List<SearchResult> searchResults = new ArrayList<>();
        try {
            SearchResult[] cars = mapper.readValue(getClass().getResourceAsStream("/rental_cars.json"),
                    SearchResult[].class);
            for (SearchResult car : cars) {
                car.setKind("car");
                searchResults.add(car);
            }
            SearchResult[] hotels = mapper.readValue(getClass().getResourceAsStream("/hotels.json"),
                    SearchResult[].class);
            for (SearchResult hotel : hotels) {
                hotel.setKind("hotel");
                searchResults.add(hotel);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        final SearchResource resource = new SearchResource(searchResults);
        environment.jersey().register(resource);
    }

}
