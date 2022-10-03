package com.bank.server.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

import static javax.persistence.TemporalType.TIMESTAMP;

@Getter
@Setter
@MappedSuperclass
@EntityListeners({AuditingEntityListener.class})
public class AbstractEntity {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "createdDate", insertable = true, updatable = false)
    @CreatedDate
    @Temporal(TIMESTAMP)
    protected Date createdDate;

    @Column(name = "lastModifiedDate", insertable = false, updatable = true)
    @LastModifiedBy
    @Temporal(TIMESTAMP)
    protected Date lastModifiedDate;
}
