package com.Newspring.Newspring.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Newspring.Newspring.Entity.Student;
import com.Newspring.Newspring.Entity.Registration;

public interface EmployeeDao extends JpaRepository<Registration,Long>
{

	
	Registration findByUsername(String username);
	
	

}