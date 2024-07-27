package com.example.demo.controller;

import com.example.demo.services.PreferenceServices;
import com.example.demo.model.Preference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@GetMapping("/api")
public class PrefController {
    @Autowired
    private PreferenceServices preferenceServices;
    
    @PostMapping(produces = "preferences/json")
    public ResponseEntity<Preference> add(@RequestBody Preference preference){

        Preference addedPreference = this.preferenceServices.add(preference);
        return new ResponseEntity<>(addedPreference, HttpStatus.CREATED);
    }
}
//sql query to return results