package com.Newspring.Newspring.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity

public class Registration {

    public long getIdnew() {
		return idnew;
	}
	public void setIdnew(long idnew) {
		this.idnew = idnew;
	}
	public String getPasswor() {
		return passwor;
	}
	public void setPasswor(String passwor) {
		this.passwor = passwor;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Registration() {
		super();
	}
	@Id
    private long idnew;
    private String passwor;
    private String username;
	public Registration(long idnew, String passwor, String username) {
		super();
		this.idnew = idnew;
		this.passwor = passwor;
		this.username = username;
	}
    
  
}