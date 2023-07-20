package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Login")
public class Model {
	@Id
	@Column(name="UserName") 
	private String username;
	@Column(name="Email")
	private String email;
	@Column(name="PhoneNo")
	private String PhoneNo;
	@Column(name="Password")
	private String Password;
	@Column(name="ConformPassword")
	private String ConformPassword;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNo() {
		return PhoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		PhoneNo = phoneNo;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getConformPassword() {
		return ConformPassword;
	}
	public void setConformPassword(String conformPassword) {
		ConformPassword = conformPassword;
	}
	public Model(String username, String email, String phoneNo, String password, String conformPassword) {
		super();
		this.username = username;
		this.email = email;
		PhoneNo = phoneNo;
		Password = password;
		ConformPassword = conformPassword;
	}
    public Model() {
    	
    }
}
