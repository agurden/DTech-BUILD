package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Preference;

@RestController
public class PrefController {

    @RequestMapping("/preferences")
    public List<Preference> getAllPreferences() {
        List<Preference> pref = new ArrayList<>();
        pref.add(new Preference("Morning", 60));
        return pref;
    }

    //new post endpoint for adding preferences
}

