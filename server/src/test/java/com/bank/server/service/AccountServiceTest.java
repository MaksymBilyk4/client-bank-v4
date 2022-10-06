package com.bank.server.service;

import com.bank.server.dao.AccountRepository;
import com.bank.server.entity.Account;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
public class AccountServiceTest {

    @Mock
    AccountRepository accountRepository;

    @InjectMocks
    private AccountService accountService;

    @Test
    void findAll() {
        Account a1 = new Account();
        Account a2 = new Account();
        when(accountRepository.findAll())
                .thenReturn(List.of(a1, a2));

        List<Account> accounts = accountRepository.findAll();

        assertNotNull(accounts);
        assertFalse(accounts.isEmpty());
        assertEquals(2, accounts.size());
        assertEquals(a1, accounts.get(0));
        assertEquals(a2, accounts.get(1));
    }

    @Test
    void getById() {
        Account account = new Account();

        when(accountRepository.findById(1L)).thenReturn(Optional.of(account));
        Optional<Account> optionalAccount = accountService.findById(1L);

        assertEquals(account, optionalAccount.get());
        assertNotNull(optionalAccount.get());
    }
}
