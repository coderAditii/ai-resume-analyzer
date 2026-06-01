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

    @PostMapping("/upload")
    public String uploadResume(@RequestParam("file") MultipartFile file) {

        try {

            PDDocument document = Loader.loadPDF(file.getBytes());

            PDFTextStripper pdfStripper = new PDFTextStripper();

            String text = pdfStripper.getText(document);

            document.close();

            var skills = SkillExtractor.extractSkills(text);

            int score = ATSScorer.calculateScore(skills);

            return "Skills Found: " + skills + "\nATS Score: " + score + "/100";

        } catch (IOException e) {
            return "Error reading PDF";
        }
    }
}