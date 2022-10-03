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
@AllArgsConstructor
@NoArgsConstructor
public class EmployerResponseDto {
    private Long id;

    private String name;

    private String address;

    @JsonSerialize(using = CustomDateSerializer.class)
    private Date createdDate;

    @JsonSerialize(using = CustomDateSerializer.class)
    private Date lastModifiedDate;

    @JsonProperty("customers")
    private Set<Long> customersIds = new HashSet<>();

    @Override
    public String toString() {
        return "EmployerResponseDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", creationDate=" + createdDate +
                ", lastModifiedDate=" + lastModifiedDate +
                ", customersIds=" + customersIds +
                '}';
    }
}
