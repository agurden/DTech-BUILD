package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PreferenceServices {
    @Autowired
    private PreferenceRepository preferenceRepository;

    public Preference add(Preference preference){
        return this.preferenceRepository.add(preference);
    }
}

//delegating calls to the repository layer with no additional work.
