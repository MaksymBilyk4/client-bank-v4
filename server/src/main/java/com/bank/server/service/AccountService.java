package com.bank.server.service;

import com.bank.server.dao.AccountRepository;
import com.bank.server.entity.Account;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    @Transactional(readOnly = true)
    public List<Account> findAll () {
        return accountRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Account> findById (Long id) {
        return accountRepository.findById(id);
    }

    public void deleteById (Long id) {
        accountRepository.deleteById(id);
    }

    public void withdrawMoney (String number, Double amount) {
        Optional<Account> account = accountRepository.findAccountByNumber(number);
        account.get().setBalance(account.get().getBalance() - amount);
        accountRepository.save(account.get());
    }

    public void upMoney (String number, Double amount) {
        Optional<Account> account = accountRepository.findAccountByNumber(number);
        account.get().setBalance(account.get().getBalance() + amount);
        accountRepository.save(account.get());
    }

    public void transfer (String from, String to, Double amount) {
        withdrawMoney(from, amount);
        upMoney(to, amount);
    }
}
