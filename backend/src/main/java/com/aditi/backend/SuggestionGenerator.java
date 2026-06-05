package com.aditi.backend;

import java.util.ArrayList;
import java.util.List;

public class SuggestionGenerator {

    public static List<String> generateSuggestions(List<String> missingSkills) {

        List<String> suggestions = new ArrayList<>();

        for (String skill : missingSkills) {

            if (skill.equals("python")) {
                suggestions.add("Learn Python for backend and AI development");
            }

            else if (skill.equals("react")) {
                suggestions.add("Build React projects for frontend skills");
            }

            else if (skill.equals("mysql")) {
                suggestions.add("Practice MySQL database queries");
            }

            else if (skill.equals("java")) {
                suggestions.add("Improve Java programming concepts");
            }
        }

        return suggestions;
    }
}