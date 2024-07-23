package com.example.demo.model;

public class Preference {
    
    //enum class ensures only limited values to be given to variable
    public enum TimePreference{
        MORNING,
        AFTERNOON,
        EVENING
    }

    private int length;
    private TimePreference time;
    private int uid;

    public Preference() {}

    public Preference(int uid, TimePreference time, int length){
        this.time = time;
        this.length = length;
        this.uid = uid;
    }

    /* Getters & Setters */

    public int getLength() {
        return length;
    }

    public TimePreference getTime() {
        return time;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public void setTime(TimePreference time) {
        this.time = time;
    }

    public int getUID() {
        return uid;
    }

    public void setUID(int uid) {
        this.uid = uid;
    }
}
