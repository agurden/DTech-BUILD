package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;

import java.util.Date;

@RestController
public class Controls {
    private static JDBC sqlDatabaseConnection = new JDBC();
    @GetMapping("/api/time")
    public String time() {
        return new Date() + "\n";
    }

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewUser (@RequestParam String name
            , @RequestParam String email) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        User n = new User();
        n.setFirstName(name);
        n.setEmail(email);
        int result = sqlDatabaseConnection.insertUser(n);
        if(result == 1) {return "Saved";}
        return "FAILED";
    }
}
