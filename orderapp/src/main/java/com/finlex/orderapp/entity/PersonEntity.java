package com.finlex.orderapp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="person")
@Data
@AllArgsConstructor
public class PersonEntity {

    @Id
    private String emailId;
    private String name;

    public PersonEntity() {

    }
}
