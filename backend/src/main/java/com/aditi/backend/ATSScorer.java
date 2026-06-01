package com.aditi.backend;

import java.util.List;

public class ATSScorer {

    public static int calculateScore(List<String> skills) {

        int score = skills.size() * 15;

        if (score > 100) {
            score = 100;
        }

        return score;
    }
}
