package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment,Integer> {

}


