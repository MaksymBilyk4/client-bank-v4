package com.bank.server.controller;

import com.bank.server.dto.CustomerResponseDto;
import com.bank.server.entity.Customer;
import com.bank.server.mapper.AccountRequestDtoMapper;
import com.bank.server.mapper.CustomerRequestDtoMapper;
import com.bank.server.mapper.CustomerRequestPutDtoMapper;
import com.bank.server.mapper.CustomerResponseDtoMapper;
import com.bank.server.service.AccountService;
import com.bank.server.service.CustomerService;
import org.hamcrest.Matchers;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CustomerController.class)
@Slf4j
public class CustomerControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    CustomerService customerService;

    @MockBean
    AccountService accountService;

    @MockBean
    CustomerResponseDtoMapper customerResponseDtoMapper;

    @MockBean
    CustomerRequestDtoMapper customerRequestDtoMapper;

    @MockBean
    CustomerRequestPutDtoMapper customerRequestPutDtoMapper;

    @MockBean
    AccountRequestDtoMapper accountRequestDtoMapper;


    @Test
    public void findAllTest() throws Exception {
        Customer customer = new Customer();

        CustomerResponseDto customerResponseDto = new CustomerResponseDto();
        customerResponseDto.setId(1L);
        customerResponseDto.setName("Max");

        when(customerService.findAll()).thenReturn(List.of(customer));
        when(customerResponseDtoMapper.convertToDto(customer)).thenReturn(customerResponseDto);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/customers").contentType("application/json"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", Matchers.is(1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", Matchers.is("Max")));
    }

    @Test
    public void findAllPagedTest() throws Exception {
        Customer customer = new Customer();
        CustomerResponseDto customerResponseDto = new CustomerResponseDto();
        customerResponseDto.setId(7L);
        customerResponseDto.setName("Roman");

        when(customerService.findAll(1, 1)).thenReturn(List.of(customer));
        when(customerResponseDtoMapper.convertToDto(customer)).thenReturn(customerResponseDto);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/customers/1/1").contentType("application/json"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", Matchers.is(7)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", Matchers.is("Roman")));
    }

    @Test
    public void findByIdTest() throws Exception {
        Customer customer = new Customer();

        CustomerResponseDto customerResponseDto = new CustomerResponseDto();
        customerResponseDto.setId(34L);
        customerResponseDto.setName("Maxym");

        when(customerService.findById(34L)).thenReturn(Optional.of(customer));
        when(customerResponseDtoMapper.convertToDto(customer)).thenReturn(customerResponseDto);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/customers/34"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(34)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Matchers.is("Maxym")));
    }
}
