package com.bank.server.mapper;

import com.bank.server.dto.EmployerResponseDto;
import com.bank.server.entity.Customer;
import com.bank.server.entity.Employer;
import org.springframework.stereotype.Service;

@Service
public class EmployerResponseDtoMapper extends DtoMapperFacade<Employer, EmployerResponseDto>{

    public EmployerResponseDtoMapper() {
        super(Employer.class, EmployerResponseDto.class);
    }

    @Override
    protected void decorateDto(EmployerResponseDto dto, Employer entity) {
        for (Customer customer : entity.getCustomers()) {
            dto.getCustomersIds().add(customer.getId());
        }
    }
}
