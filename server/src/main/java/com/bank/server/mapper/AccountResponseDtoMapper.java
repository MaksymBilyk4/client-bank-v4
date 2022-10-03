package com.bank.server.mapper;

import com.bank.server.dto.AccountResponseDto;
import com.bank.server.entity.Account;
import org.springframework.stereotype.Service;

@Service
public class AccountResponseDtoMapper extends DtoMapperFacade<Account, AccountResponseDto>{
    public AccountResponseDtoMapper() {
        super(Account.class, AccountResponseDto.class);
    }

    @Override
    protected void decorateDto(AccountResponseDto dto, Account entity) {
        dto.setCustomerId(entity.getCustomer().getId());
    }
}
