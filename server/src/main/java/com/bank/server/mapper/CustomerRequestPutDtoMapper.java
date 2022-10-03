package com.bank.server.mapper;

import com.bank.server.dao.CustomerRepository;
import com.bank.server.dao.EmployerRepository;
import com.bank.server.dto.CustomerRequestPutDto;
import com.bank.server.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerRequestPutDtoMapper extends DtoMapperFacade<Customer, CustomerRequestPutDto>{

    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    EmployerRepository employerRepository;

    public CustomerRequestPutDtoMapper() {
        super(Customer.class, CustomerRequestPutDto.class);
    }
    @Override
    protected void decorateEntity(Customer entity, CustomerRequestPutDto dto) {
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setAge(dto.getAge());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setPhoneNumber(dto.getPhoneNumber());

//        Customer customer = customerRepository.findById(dto.getId()).get();
//        for (Long ids: dto.getEmployers()) {
//            Employer employer = employerRepository.findById(ids).get();
//            employer.addCustomer(customer);
//        }
    }
}
