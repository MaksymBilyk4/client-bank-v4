package com.bank.server.service;

import com.bank.server.dao.AccountRepository;
import com.bank.server.dao.CustomerRepository;
import com.bank.server.entity.Account;
import com.bank.server.entity.Customer;
import com.bank.server.entity.Employer;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;

    @Transactional(readOnly = true)
    public List<Customer> findAll () {
        return customerRepository.findAll();
    }

    public Customer create (Customer customer) {
        return customerRepository.save(customer);
    }

    public void deleteById (Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        if (customer.isPresent()) {
            Customer c = customer.get();

            for (Employer e : new HashSet<Employer>(c.getEmployers())) {
                c.removeEmployer(e);
            }
        }
        customerRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public Optional<Customer> findById (Long id) {
        return customerRepository.findById(id);
    }

    public Customer update (Customer customer) {
        return customerRepository.save(customer);
    }


    public Account createAccount (Account account, Long id) {
        Optional<Customer> customer = findById(id);
        customer.get().addAccount(account);
        account.setCustomer(customer.get());
        return accountRepository.save(account);
    }

    public List<Customer> findAll (int pageSize, int pageNumber) {
        Sort sort = Sort.by(new Sort.Order(Sort.Direction.ASC, "id"));
        Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
        Page<Customer> customerPage = customerRepository.findAll(pageable);
        return customerPage.toList();
    }

}
