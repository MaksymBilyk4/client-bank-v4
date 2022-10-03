package com.bank.server.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountResponseDto {
    private Long id;

    private String currency;

    private Double balance;

    private String number;

    @JsonProperty("customerId")
    private Long customerId;

    @Override
    public String toString() {
        return "AccountDto{" +
                "id=" + id +
                ", currency='" + currency + '\'' +
                ", balance=" + balance +
                ", number=" + number +
                ", customerId=" + customerId +
                '}';
    }
}
