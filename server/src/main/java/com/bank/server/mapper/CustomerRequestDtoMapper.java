package com.bank.server.mapper;

import com.bank.server.dao.EmployerRepository;
import com.bank.server.dto.CustomerRequestDto;
import com.bank.server.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerRequestDtoMapper extends DtoMapperFacade<Customer, CustomerRequestDto>{
    public CustomerRequestDtoMapper() {
        super(Customer.class, CustomerRequestDto.class);
    }

    @Autowired
    EmployerRepository employerRepository;

    @Override
    protected void decorateEntity(Customer entity, CustomerRequestDto dto) {
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setPhoneNumber(dto.getPhoneNumber());
    }
}
