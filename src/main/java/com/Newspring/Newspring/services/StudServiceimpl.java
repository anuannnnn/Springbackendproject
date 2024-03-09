package com.Newspring.Newspring.services;

import java.util.List;
import com.Newspring.Newspring.Entity.Registration;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Newspring.Newspring.Entity.Student;
import  com.Newspring.Newspring.Dao.StudentDao;
import com.Newspring.Newspring.Dao.EmployeeDao;
@Service
public class StudServiceimpl implements Studentinter {

	@Autowired
	private StudentDao studDao;
	@Autowired
	private EmployeeDao regDao;
	public List<Student>  getStudents()
	{
		return studDao.findAll();
	}
	
	public Student getStudent(long  studId)
	{
		
		 Optional<Student> courseOptional = studDao.findById(studId);
		    
		    if (courseOptional.isPresent()) {
		        return courseOptional.get();
		    } else {
		        // Handle the case where the course with the specified ID doesn't exist.
		        // You can throw an exception or return a default value as needed.
		        return null; // For simplicity, returning null in this example.
		    }
		}
	@Override
	public Registration AddEmpl(Registration registration) {
		// TODO Auto-generated method stub
		return regDao.save(registration);
	}
	public boolean authenticateUser(String username, String password) {
	    // Fetch the user based on the username
	    Registration reg = regDao.findByUsername(username);
	    
	    // Check if user exists and if the password matches
	    if (reg != null && reg.getPasswor().equals(password)) {
	        return true;
	    }
	    
	    return false;
	}
	
	public Student AddStud(Student student)
	{
		return studDao.save(student);
	}
	public Student updateStudent(Student student)
	{
		return studDao.save(student);
	}
	public void deleteStudent(Student student)
	{
		 studDao.delete(student);
	}
		
	}


