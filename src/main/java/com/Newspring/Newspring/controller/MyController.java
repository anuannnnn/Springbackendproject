package com.Newspring.Newspring.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Newspring.Newspring.services.Studentinter;

import com.Newspring.Newspring.Entity.Student;
import com.Newspring.Newspring.Entity.Registration;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MyController {

	@Autowired
	   private 	Studentinter courseServic;
		
		
	
		

	    
	    


		@GetMapping("/home")
		private String Home()
		{
			return "HELLO WELCOME TO MY APPLICATIONS";
			
		}
		@PostMapping("/registrations")
		private Registration AddEmpl(@RequestBody Registration registration)
		{
			return courseServic.AddEmpl(registration);
		}
		@PostMapping("/login")
		private ResponseEntity<String> login(@RequestBody Map<String, String> loginData) {
		    String username = loginData.get("username");
		    String password = loginData.get("password");
		    
		    // Perform authentication
		    boolean isAuthenticated = courseServic.authenticateUser(username, password);
		    
		    if (isAuthenticated) {
		        return new ResponseEntity<>("Login successful", HttpStatus.OK);
		    } else {
		        return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
		    }
		}

		@GetMapping("/students")
		private List<Student> getAllStudents()
		{
			return courseServic.getStudents();
		}
		@GetMapping("/students/{studId}")
	    private Student getAllStud(@PathVariable String studId)
	    {
	    	return courseServic.getStudent(Long.parseLong(studId));
	    }
		
		@PostMapping("/students")
		private Student AddStud(@RequestBody Student student)
		{
			return courseServic.AddStud(student);
		}
		
		@PutMapping("/students/{studId}")
	    private Student updateStudent(@PathVariable String studId, @RequestBody Student updatedStudent) {
	        long studentId = Long.parseLong(studId);

	        // Check if the student with the specified ID exists
	        Student existingStudent = courseServic.getStudent(studentId);

	        if (existingStudent != null) {
	            // Update the existing student with the new data
	            existingStudent.setName(updatedStudent.getName());
	            existingStudent.setCourse(updatedStudent.getCourse());
	            // Add more fields to update as needed

	            // Save the updated student
	            return courseServic.updateStudent(existingStudent);
	        } else {
	            // Handle the case where the student with the specified ID doesn't exist
	            // You can throw an exception or return a default value as needed.
	            return null; // For simplicity, returning null in this example.
	        }
	    }
		
		@DeleteMapping("/students/{studId}")
	    private Student deleteStudent(@PathVariable String studId) {
	        long studentId = Long.parseLong(studId);

	        // Check if the student with the specified ID exists
	        Student existingStudent = courseServic.getStudent(studentId);

	        if (existingStudent != null) {
	        
	         courseServic.deleteStudent(existingStudent);
	        }
	        return null;
		}
	        }
	    // Existing code...
