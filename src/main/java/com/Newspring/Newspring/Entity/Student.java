package com.Newspring.Newspring.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Student {
	
	@Id
	private long id;
	private String name;
	private String course;
	public Student(long id, String name, String course) {
		super();
		this.id = id;
		this.name = name;
		this.course = course;
	}
	public Student() {
		super();
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", course=" + course + "]";
	}
	

}

