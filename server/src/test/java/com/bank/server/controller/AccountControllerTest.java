package com.bank.server.controller;

import com.bank.server.dto.AccountResponseDto;
import com.bank.server.entity.Account;
import com.bank.server.mapper.AccountResponseDtoMapper;
import com.bank.server.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.checkerframework.checker.units.qual.A;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.hamcrest.Matchers;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;


@WebMvcTest(AccountController.class)
@Slf4j
public class AccountControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    AccountService accountService;

    @MockBean
    AccountResponseDtoMapper accountResponseDtoMapper;

    @Test
    public void findAllTest() throws Exception {
        Account account = new Account();

        AccountResponseDto accountResponseDto = new AccountResponseDto();
        accountResponseDto.setId(2L);
        accountResponseDto.setNumber("qwerty12345");

        when(accountService.findAll()).thenReturn(List.of(account));
        when(accountResponseDtoMapper.convertToDto(account)).thenReturn(accountResponseDto);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/accounts").contentType("application/json"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", Matchers.is(2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].number", Matchers.is("qwerty12345")));
    }

    @Test
    public void findByIdTest () throws Exception {
        Account account = new Account();

        AccountResponseDto accountResponseDto = new AccountResponseDto();
        accountResponseDto.setId(6L);
        accountResponseDto.setNumber("123456789");

        when(accountService.findById(6L)).thenReturn(Optional.of(account));
        when(accountResponseDtoMapper.convertToDto(account)).thenReturn(accountResponseDto);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/accounts/6"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(6)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.number", Matchers.is("123456789")));
    }
}
