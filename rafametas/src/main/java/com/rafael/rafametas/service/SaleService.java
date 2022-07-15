package com.rafael.rafametas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rafael.rafametas.entity.Sale;
import com.rafael.rafametas.repository.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	public List<Sale> findSales() {
		
		return saleRepository.findAll();
		
	}

}
