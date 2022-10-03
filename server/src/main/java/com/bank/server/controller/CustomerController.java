package com.bank.server.controller;

import com.bank.server.dto.AccountRequestDto;
import com.bank.server.dto.CustomerRequestDto;
import com.bank.server.dto.CustomerRequestPutDto;
import com.bank.server.dto.CustomerResponseDto;
import com.bank.server.entity.Account;
import com.bank.server.entity.Customer;
import com.bank.server.mapper.AccountRequestDtoMapper;
import com.bank.server.mapper.CustomerRequestDtoMapper;
import com.bank.server.mapper.CustomerRequestPutDtoMapper;
import com.bank.server.mapper.CustomerResponseDtoMapper;
import com.bank.server.service.AccountService;
import com.bank.server.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/customers")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerResponseDtoMapper customerResponseDtoMapper;
    private final CustomerRequestDtoMapper customerRequestDtoMapper;

    private final CustomerRequestPutDtoMapper customerRequestPutDtoMapper;
    private final AccountRequestDtoMapper accountRequestDtoMapper;
    private final CustomerService customerService;

    private final AccountService accountService;

    @GetMapping
    public List<CustomerResponseDto> findAll() {
        return customerService.findAll().stream()
                .map(customerResponseDtoMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{pageSize}/{pageNumber}")
    public List<CustomerResponseDto> findAll(
            @PathVariable("pageSize") int pageSize,
            @PathVariable("pageNumber") int pageNumber
    ) {
        List<Customer> customers = customerService.findAll(pageSize, pageNumber);
        return customers.stream()
                .map(customerResponseDtoMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public Optional<CustomerResponseDto> findById(@PathVariable(name = "id") Long id) {
        return customerService.findById(id)
                .map(customerResponseDtoMapper::convertToDto);
    }


    // использую такой кривой меппинг, потому что много менять на фронте
    @DeleteMapping("/{customerId}/account/{accountId}")
    public void deleteById (
            @PathVariable (name = "customerId") Long customerId,
            @PathVariable (name = "accountId") Long accountId
    ) {
        accountService.deleteById(accountId);
    }

    @PostMapping
    public Customer create(@Valid @RequestBody CustomerRequestDto customerDto) {
        Customer customer = customerRequestDtoMapper.convertToEntity(customerDto);
        return customerService.create(customer);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(name = "id") Long id) {
        customerService.deleteById(id);
    }

    @PostMapping("/{id}/account")
    public Account createAccount (
            @Valid @RequestBody AccountRequestDto accountRequestDto,
            @PathVariable (name = "id") Long id
    ) {
        Account account = accountRequestDtoMapper.convertToEntity(accountRequestDto);
        return customerService.createAccount(account, id);
    }

    @PutMapping
    public Customer update (
            @Valid
            @RequestBody CustomerRequestPutDto customerRequestPutDto
    ) {
        Customer customer = customerRequestPutDtoMapper.convertToEntity(customerRequestPutDto);
        return customerService.update(customer);
    }
}
