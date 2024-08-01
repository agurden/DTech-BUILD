package com.example.demo.services;

import com.example.demo.model.Preference;
import com.example.demo.repository.PreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PreferenceServices {

    @Autowired
    private PreferenceRepository prefRepository;

    public Preference createPreference(Preference preference) {
        return prefRepository.save(preference);
    }

    public List<Preference> getAllPreferences() {
        return prefRepository.findAll();
    }

}

//delegating calls to the repository layer with no additional work.
