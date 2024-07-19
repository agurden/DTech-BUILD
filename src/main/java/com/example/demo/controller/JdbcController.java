// Java Program to Illustrate Controller of Spring Application

package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.demo.model.User;

@Controller
@RequestMapping(path="/demo")
public class JdbcController {

	/*@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}*/
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
