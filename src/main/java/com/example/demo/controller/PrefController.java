package com.example.demo.controller;

import com.example.demo.model.Preference;
import com.example.demo.services.PreferenceServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/preference")
public class PrefController {

    @Autowired
    private PreferenceServices prefService;

    @PostMapping
    public ResponseEntity<Preference> createUser(@RequestBody Preference pref) {
        Preference savedPref = prefService.createPreference(pref);
        return ResponseEntity.ok(savedPref);
    }

    @GetMapping
    public ResponseEntity<List<Preference>> getAllPreferences() {
        List<Preference> preferences = prefService.getAllPreferences();
        return ResponseEntity.ok(preferences);
    }
}