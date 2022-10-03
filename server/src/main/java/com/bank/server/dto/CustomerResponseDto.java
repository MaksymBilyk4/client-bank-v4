package com.bank.server.dto;

import com.bank.server.utils.CustomDateSerializer;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerResponseDto {
    private Long id;

    private String name;

    private Integer age;

    private String email;

    private String phoneNumber;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @JsonSerialize(using = CustomDateSerializer.class)
    private Date createdDate;

    @JsonSerialize(using = CustomDateSerializer.class)
    private Date lastModifiedDate;

    @JsonProperty("accounts")
    private Set<Long> accountsIds = new HashSet<>();

    @JsonProperty("employers")
    private Set<Long> employersIds = new HashSet<>();

    @Override
    public String toString() {
        return "CustomerResponseDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", password='" + password + '\'' +
                ", creationDate=" + createdDate +
                ", lastModifiedDate=" + lastModifiedDate +
                ", accounts=" + accountsIds +
                ", employersIds=" + employersIds +
                '}';
    }
}
