package com.bank.server.service;

import com.bank.server.dao.AccountRepository;
import com.bank.server.dao.CustomerRepository;
import com.bank.server.entity.Customer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class CustomerServiceTest {

    @Mock
    CustomerRepository customerRepository;

    @Mock
    AccountRepository accountRepository;

    @InjectMocks
    CustomerService customerService;

    @Test
    public void findAllPageable () {
        Customer customer = new Customer();

        when(customerRepository.findAll(ArgumentMatchers.any(Pageable.class)))
                .thenReturn(new PageImpl<>(List.of(customer)));

        List<Customer> customers = customerService.findAll(1, 2);

        assertNotNull(customers);
        assertEquals(customer, customers.get(0));
        assertFalse(customers.isEmpty());
        assertEquals(1, customers.size());
    }

    @Test
    public void findAll () {
        Customer c1 = new Customer();
        Customer c2 = new Customer();

        when(customerRepository.findAll())
                .thenReturn(List.of(c1, c2));

        List<Customer> customers = customerService.findAll();

        assertNotNull(customers);
        assertFalse(customers.isEmpty());
        assertEquals(2, customers.size());
        assertEquals(c1, customers.get(0));
        assertEquals(c2, customers.get(1));
    }

    @Test
    public void findById () {
        Customer customer = new Customer();

        when(customerRepository.findById(1L))
                .thenReturn(Optional.of(customer));

        Optional<Customer> optionalCustomer = customerService.findById(1L);

        assertEquals(customer, optionalCustomer.get());
        assertNotNull(optionalCustomer.get());
    }
}
