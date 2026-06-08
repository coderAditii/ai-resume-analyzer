package com.aditi.backend;

import java.util.List;

public class ResumeResponse {

    private List<String> skills;
    private int score;
    private List<String> suggestions;
    private String resumeText;

    public ResumeResponse(
            List<String> skills,
            int score,
            List<String> suggestions,
            String resumeText
    ) {
        this.skills = skills;
        this.score = score;
        this.suggestions = suggestions;
        this.resumeText = resumeText;
    }

    public List<String> getSkills() {
        return skills;
    }

    public int getScore() {
        return score;
    }

    public List<String> getSuggestions() {
        return suggestions;
    }

    public String getResumeText() {
        return resumeText;
    }
}
