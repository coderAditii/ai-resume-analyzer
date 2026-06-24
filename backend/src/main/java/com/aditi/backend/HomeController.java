package com.aditi.backend;

import java.io.IOException;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("*")
public class HomeController {
    private final GeminiService geminiService;

    public HomeController(GeminiService geminiService) {
    this.geminiService = geminiService;
}

    @PostMapping("/upload")
    public ResumeResponse uploadResume(@RequestParam("file") MultipartFile file) {

        try {

            PDDocument document = Loader.loadPDF(file.getBytes());

            PDFTextStripper pdfStripper = new PDFTextStripper();

            String text = pdfStripper.getText(document);

            document.close();
            geminiService.generateSuggestions(text);

            var skills = SkillExtractor.extractSkills(text);

            int score = ATSScorer.calculateScore(skills);
            var missing = ATSScorer.missingSkills(skills);
            var suggestions = SuggestionGenerator.generateSuggestions(missing);


            return new ResumeResponse(
        skills,
        score,
        suggestions,
        text
);
        } catch (IOException e) {
            return new ResumeResponse(
        null,
        0,
        null,
        "Error reading PDF"
);
        }
    }
}