package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Model;

public interface repo extends JpaRepository<Model,String>{

	
  
}