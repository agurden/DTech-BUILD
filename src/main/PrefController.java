package com.example.demo;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrefController {
    
    @GetMapping("/findbuddy")
    public List<Preference> getAllPreferences() {
        return Arrays.asList(
            new Preference("Morning", 60),
            new Preference("Afternoon", 90),
            new Preference("Evening", 30)
        );
    }
}
