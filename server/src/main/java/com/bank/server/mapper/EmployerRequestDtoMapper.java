package com.bank.server.mapper;

import com.bank.server.dao.CustomerRepository;
import com.bank.server.dao.EmployerRepository;
import com.bank.server.dto.EmployerRequestDto;
import com.bank.server.entity.Employer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class EmployerRequestDtoMapper extends DtoMapperFacade<Employer, EmployerRequestDto> {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    EmployerRepository employerRepository;
    public EmployerRequestDtoMapper() {
        super(Employer.class, EmployerRequestDto.class);
    }

    @Override
    protected void decorateEntity(Employer entity, EmployerRequestDto dto) {
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setAddress(dto.getAddress());
    }
}