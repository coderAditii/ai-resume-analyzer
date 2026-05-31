package com.aditi.backend;

import java.util.ArrayList;
import java.util.List;

public class SkillExtractor {

    public static List<String> extractSkills(String text) {

        String[] skills = {
                "java",
                "python",
                "react",
                "spring boot",
                "mysql",
                "html",
                "css",
                "javascript",
                "mongodb",
                "c++"
        };

        List<String> foundSkills = new ArrayList<>();

        text = text.toLowerCase();

        for (String skill : skills) {

            if (text.contains(skill)) {
                foundSkills.add(skill);
            }
        }

        return foundSkills;
    }
}