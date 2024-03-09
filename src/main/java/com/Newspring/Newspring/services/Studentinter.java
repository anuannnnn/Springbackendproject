package com.Newspring.Newspring.services;

import java.util.List;
import com.Newspring.Newspring.Dao.EmployeeDao;
import com.Newspring.Newspring.Entity.Registration;
import com.Newspring.Newspring.Entity.Student;
public interface Studentinter {
	public Registration AddEmpl(Registration registration) ;
	public List<Student>  getStudents();
	public Student getStudent(long  studId);
	public Student AddStud(Student student);
	public Student updateStudent(Student student);
	public void deleteStudent(Student student);
	public boolean authenticateUser(String username, String password);

}
