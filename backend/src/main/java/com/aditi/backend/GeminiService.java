package com.aditi.backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {
    @Value("${gemini.api.key}")
    private String apiKey;

    public String generateSuggestions(String resumeText){
        System.out.println("API key loaded" + (apiKey != null));
        return "Gemini Ai Integration";
    }
    
}
