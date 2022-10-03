package com.bank.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "employers")
@Entity
public class Employer extends AbstractEntity{
    private String name;
    private String address;

    @ManyToMany(mappedBy = "employers", cascade = CascadeType.MERGE)
    @JsonIgnore
    private Set<Customer> customers = new HashSet<>();

    public void addCustomer (Customer customer) {
        customers.add(customer);
        customer.getEmployers().add(this);
    }

    public void removeCustomer (Customer customer) {
        this.customers.remove(customer);
        customer.getEmployers().remove(this);
    }


    @Override
    public String toString() {
        return "Employer{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
