package com.bank.server.mapper;

import com.bank.server.dao.CustomerRepository;
import com.bank.server.dao.EmployerRepository;
import com.bank.server.dto.EmployerRequestPutDto;
import com.bank.server.entity.Customer;
import com.bank.server.entity.Employer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployerRequestPutDtoMapper extends DtoMapperFacade<Employer, EmployerRequestPutDto> {

    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    EmployerRepository employerRepository;

    public EmployerRequestPutDtoMapper() {
        super(Employer.class, EmployerRequestPutDto.class);
    }

    @Override
    protected void decorateEntity(Employer entity, EmployerRequestPutDto dto) {
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setAddress(dto.getAddress());

        // Знаю, не самое оптимальное решение добавить
        Employer employer = employerRepository.findById(dto.getId()).get();
        for (Long ids: dto.getCustomers()) {
            Customer customer = customerRepository.findById(ids).get();
            customer.addEmployer(employer);
        }
    }
}

