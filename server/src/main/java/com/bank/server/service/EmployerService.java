package com.bank.server.service;

import com.bank.server.dao.EmployerRepository;
import com.bank.server.entity.Customer;
import com.bank.server.entity.Employer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class EmployerService {

    private final EmployerRepository employerRepository;

    @Transactional(readOnly = true)
    public List<Employer> findAll () {
        return employerRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Employer> findById (Long id) {
        return employerRepository.findById(id);
    }

    public void deleteById (Long id) {
        Optional<Employer> employer = employerRepository.findById(id);

        if (employer.isPresent()) {
            Employer e = employer.get();

            // Возникает АНАЛОГИЧНА ошибка
            // https://stackoverflow.com/questions/58669474/concurrentmodificationexception-when-deleting-a-manytomany-associations-spring

            for (Customer customer : new HashSet<Customer>(e.getCustomers())) {
                e.removeCustomer(customer);
            }
        }

        employerRepository.deleteById(id);
    }

    public Employer create (Employer employer) {
        return employerRepository.save(employer);
    }

    public Employer update (Employer employer) {
        return employerRepository.save(employer);
    }
}
