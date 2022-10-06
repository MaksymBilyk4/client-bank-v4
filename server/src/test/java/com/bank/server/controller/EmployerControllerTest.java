package com.bank.server.controller;

import com.bank.server.dto.EmployerResponseDto;
import com.bank.server.entity.Employer;
import com.bank.server.mapper.EmployerRequestDtoMapper;
import com.bank.server.mapper.EmployerRequestPutDtoMapper;
import com.bank.server.mapper.EmployerResponseDtoMapper;
import com.bank.server.service.EmployerService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.hamcrest.Matchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;


@WebMvcTest(EmployerController.class)
@Slf4j
public class EmployerControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    EmployerService employerService;

    @MockBean
    EmployerRequestDtoMapper employerRequestDtoMapper;

    @MockBean
    EmployerResponseDtoMapper employerResponseDtoMapper;

    @MockBean
    EmployerRequestPutDtoMapper employerRequestPutDtoMapper;

    @Test
    public void findAllTest () throws Exception {
        Employer employer = new Employer();

        EmployerResponseDto employerResponseDto = new EmployerResponseDto();
        employerResponseDto.setId(2L);
        employerResponseDto.setName("Company");

        when(employerService.findAll()).thenReturn(List.of(employer));
        when(employerResponseDtoMapper.convertToDto(employer)).thenReturn(employerResponseDto);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/employers").contentType("application/json"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", Matchers.is(2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", Matchers.is("Company")));
    }

    @Test
    public void findByIdTest () throws Exception {
        Employer employer = new Employer();

        EmployerResponseDto employerResponseDto = new EmployerResponseDto();
        employerResponseDto.setId(3L);
        employerResponseDto.setName("John");

        when(employerService.findById(3L)).thenReturn(Optional.of(employer));
        when(employerResponseDtoMapper.convertToDto(employer)).thenReturn(employerResponseDto);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/employers/3"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(3)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Matchers.is("John")));
    }
}
