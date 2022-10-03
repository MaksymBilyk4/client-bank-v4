package com.bank.server.controller;

import com.bank.server.dto.AccountResponseDto;
import com.bank.server.mapper.AccountRequestDtoMapper;
import com.bank.server.mapper.AccountResponseDtoMapper;
import com.bank.server.service.AccountService;
import com.bank.server.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/accounts")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;
    private final CustomerService customerService;
    private final AccountResponseDtoMapper accountResponseDtoMapper;
    private final AccountRequestDtoMapper accountRequestDtoMapper;

    @GetMapping
    public List<AccountResponseDto> findAll() {
        return accountService.findAll().stream()
                .map(accountResponseDtoMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public Optional<AccountResponseDto> findById (
            @PathVariable (name = "id") Long id
    ) {
        return accountService.findById(id)
                .map(accountResponseDtoMapper::convertToDto);
    }

    @PutMapping("/withdraw")
    public void withdrawMoney (
            @RequestParam (name = "number") String number,
            @RequestParam (name = "amount") Double amount
    ) {
        accountService.withdrawMoney(number, amount);
    }

    @PutMapping("/up")
    public void upMoney (
            @RequestParam (name = "number") String number,
            @RequestParam (name = "amount") Double amount
    ) {
        accountService.upMoney(number, amount);
    }

    @PutMapping("/transfer")
    public void transferMoney (
            @RequestParam (name = "from") String from,
            @RequestParam (name = "to") String to,
            @RequestParam (name = "amount") Double amount
    ) {
        accountService.transfer(from, to, amount);
    }
}
