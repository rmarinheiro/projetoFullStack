package com.rafael.rafametas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rafael.rafametas.entity.Sale;
import com.rafael.rafametas.service.SaleService;
import com.rafael.rafametas.service.Smservice;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService saleService;

	@Autowired
	private Smservice smservice;
	
	@GetMapping
	public Page<Sale> findSales(@RequestParam(value = "minDate",defaultValue = "") String minDate, 
								@RequestParam(value = "maxDate",defaultValue = "") String maxDate, Pageable pageable){
		
		return saleService.findSales(pageable,minDate,maxDate);
	}
	
	@GetMapping("/{id}/notifications")
	public void notificationSms(@PathVariable Long id) {
		smservice.sendSms(id);
	}

}
