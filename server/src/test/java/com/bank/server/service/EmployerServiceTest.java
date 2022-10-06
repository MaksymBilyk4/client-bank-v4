package com.bank.server.service;

import com.bank.server.dao.EmployerRepository;
import com.bank.server.entity.Employer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class EmployerServiceTest {
    @Mock
    EmployerRepository employerRepository;

    @InjectMocks
    EmployerService employerService;

    @Test
    public void findAll () {
        Employer emp1 = new Employer();
        Employer emp2 = new Employer();

        when(employerRepository.findAll())
                .thenReturn(List.of(emp1, emp2));

        List<Employer> employers = employerService.findAll();

        assertNotNull(employers);
        assertFalse(employers.isEmpty());
        assertEquals(2, employers.size());
        assertEquals(emp1, employers.get(0));
        assertEquals(emp2, employers.get(1));
    }

    @Test
    public void findById () {
        Employer emp = new Employer();

        when(employerRepository.findById(1L))
                .thenReturn(Optional.of(emp));

        Optional<Employer> optionalEmployer = employerService.findById(1L);

        assertEquals(emp, optionalEmployer.get());
        assertNotNull(optionalEmployer.get());
    }
}
