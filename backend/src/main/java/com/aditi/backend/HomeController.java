package com.aditi.backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) {

        return "File received: " + file.getOriginalFilename();
    }
}