package com.skyscanner.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public class Search {
    @JsonProperty
    @NotNull
    private String city;

    public Search() {
    }

    public Search(String city) {
        this.city = city;
    }

    public String getCity() {
        return city;
    }
}
