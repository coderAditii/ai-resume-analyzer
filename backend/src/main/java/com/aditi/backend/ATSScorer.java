package com.aditi.backend;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ATSScorer {

    static List<String> requiredSkills = Arrays.asList(
            "java",
            "python",
            "mysql",
            "react",
            "html",
            "css",
            "javascript"
    );

    public static int calculateScore(List<String> skills) {

        int score = skills.size() * 15;

        if (score > 100) {
            score = 100;
        }

        return score;
    }

    public static List<String> missingSkills(List<String> skills) {

        List<String> missing = new ArrayList<>();

        for (String skill : requiredSkills) {

            if (!skills.contains(skill)) {
                missing.add(skill);
            }
        }

        return missing;
    }
}