package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class Controls {
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
        JDBC SQL = new JDBC();
        int result = SQL.insert(n);
        if(result == 1) {return "Saved";}
        return "FAILED";
    }
}
