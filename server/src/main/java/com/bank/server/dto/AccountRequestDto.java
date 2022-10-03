package com.bank.server.dto;

import com.bank.server.enums.Currency;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Min;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountRequestDto {
    @Min(1)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    @Min(0)
    private Double balance;

    @Override
    public String toString() {
        return "AccountRequestDto{" +
                "id=" + id +
                ", currency=" + currency +
                ", balance=" + balance +
                '}';
    }
}
