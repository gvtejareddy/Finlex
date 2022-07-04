package com.finlex.orderapp.repository;

import com.finlex.orderapp.entity.PersonEntity;
import com.finlex.orderapp.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<PersonEntity,String> {
}
