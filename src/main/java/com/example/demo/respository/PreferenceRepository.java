package com.example.demo.respository;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import com.example.demo.model.Preference;
import com.example.demo.model.Preference.TimePreference;

@Service
public class PreferenceRepository {
    private List<Preference> preferences;

    public PreferenceRepository(){ //add DB here
        this.preferences = buildFakePrefs();
    }

    //adding fake data
    private List<Preference> buildFakePrefs(){
        Preference pref1 = new Preference(1, TimePreference.MORNING, 30);
        Preference pref2 = new Preference(2, TimePreference.AFTERNOON, 60);
        Preference pref3 = new Preference(3, TimePreference.EVENING, 90);

        List<Preference> fakePrefs = new ArrayList<>();
        fakePrefs.add(pref1);
        fakePrefs.add(pref2);
        fakePrefs.add(pref3);
        return fakePrefs;
    }

    //adds new preference to list of preferences
    public Preference add(Preference pref){
        this.preferences.add(pref);
        return pref;
    }
}
