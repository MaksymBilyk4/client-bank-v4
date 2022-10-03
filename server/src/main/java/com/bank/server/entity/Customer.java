package com.bank.server.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "customers")
@Entity
public class Customer extends AbstractEntity{
    private String name;
    private String email;
    private Integer age;
    private String password;
    @Column(name = "phone_number")
    private String phoneNumber;

    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    private Set<Account> accounts = new LinkedHashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "customers_employers",
            joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "employer_id")
    )
    @JsonIgnore
    private Set<Employer> employers = new HashSet<>();

    @Override
    public String toString() {
        return "Customer{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", password='" + password + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", accounts=" + accounts +
                ", employers=" + employers +
                '}';
    }

    public void addAccount (Account account) {
        accounts.add(account);
        account.setCustomer(this);
    }

    public void addEmployer (Employer employer) {
        employers.add(employer);
        employer.getCustomers().add(this);
    }

    public void removeEmployer (Employer employer) {
        employers.remove(employer);
        employer.getCustomers().remove(this);
    }
}
