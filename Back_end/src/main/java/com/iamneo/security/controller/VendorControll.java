package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.VendorEntity;
import com.iamneo.security.service.Servicess;

@CrossOrigin

@RestController
public class VendorControll {
	@Autowired

	Servicess employeeService;

	@PostMapping("/addproducts")

	public boolean addEmployee(@RequestBody VendorEntity employee)

	{

	return employeeService.addEmployee(employee);

	}

	@GetMapping("/getproducts")

	public List <VendorEntity> getAllEmployees()

	{

	return employeeService.getAllEmployees();

	}

	@DeleteMapping("/deleteproducts/{id}")

	public String deleteCarts(@PathVariable int id) {

	return employeeService.deleteCart(id);

	}

	}
