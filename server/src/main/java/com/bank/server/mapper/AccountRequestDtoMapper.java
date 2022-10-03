package com.bank.server.mapper;

import com.bank.server.dto.AccountRequestDto;
import com.bank.server.entity.Account;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AccountRequestDtoMapper extends DtoMapperFacade<Account, AccountRequestDto>{
    public AccountRequestDtoMapper() {
        super(Account.class, AccountRequestDto.class);
    }

    @Override
    protected void decorateEntity(Account entity, AccountRequestDto dto) {
        entity.setCurrency(dto.getCurrency());
        entity.setNumber(UUID.randomUUID().toString());
        entity.setBalance(dto.getBalance());
    }
}
