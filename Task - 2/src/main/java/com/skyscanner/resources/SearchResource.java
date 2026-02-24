package com.skyscanner.resources;

import com.skyscanner.api.Search;
import com.skyscanner.api.SearchResult;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.ArrayList;
import java.util.List;

@Path("/search")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class SearchResource {
    private final List<SearchResult> searchResults;

    public SearchResource(List<SearchResult> searchResults) {
        this.searchResults = searchResults;
    }

    @POST
    public List<SearchResult> search(@NotNull @Valid Search search) {
        List<SearchResult> results = new ArrayList<>();
        for (SearchResult result : searchResults) {
            if (result.getCity().toLowerCase().equals(search.getCity().toLowerCase())) {
                results.add(result);
            }
        }
        return results;
    }
}
