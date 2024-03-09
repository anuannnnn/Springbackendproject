package com.Newspring.Newspring.Dao;

import org.springframework.data.jpa.repository.JpaRepository;



import com.Newspring.Newspring.Entity.Student;
public interface StudentDao extends JpaRepository<Student,Long>
{
	
	

}