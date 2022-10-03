package com.bank.server.mapper;

import com.bank.server.dto.CustomerResponseDto;
import com.bank.server.entity.Account;
import com.bank.server.entity.Customer;
import com.bank.server.entity.Employer;
import org.springframework.stereotype.Service;


@Service
public class CustomerResponseDtoMapper extends DtoMapperFacade<Customer, CustomerResponseDto> {
    public CustomerResponseDtoMapper() {
        super(Customer.class, CustomerResponseDto.class);
    }

    @Override
    protected void decorateDto(CustomerResponseDto dto, Customer entity) {
        for (Account account : entity.getAccounts()) {
            dto.getAccountsIds().add(account.getId());
        }
        for (Employer employer : entity.getEmployers()) {
            dto.getEmployersIds().add(employer.getId());
        }
        dto.setCreatedDate(entity.getCreatedDate());
        entity.setPassword(dto.getPassword());
    }

}
