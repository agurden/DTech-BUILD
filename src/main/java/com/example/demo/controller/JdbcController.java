// Java Program to Illustrate Controller of Spring Application

package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.demo.model.User;

@Controller
@RequestMapping("/jdbc")
public class JdbcController {
	
	@GetMapping
	public String get(Model model) {
		
	// Add object to be bound by user provided details
		model.addAttribute("obj", new User()); 
		return "template";
	}
	
	@PostMapping
	public String post(@ModelAttribute("obj") User user, Model model) {
		
		JDBC SQL = new JDBC();
		int result = SQL.insert(user);
		if(result == 1)
			model.addAttribute("message", "Successful JDBC connection and execution of SQL statement");
		else
			model.addAttribute("message", "Query not submitted!");
		return "Status";
	}
}
