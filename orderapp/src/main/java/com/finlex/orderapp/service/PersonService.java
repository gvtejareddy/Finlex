package com.finlex.orderapp.service;

import com.finlex.orderapp.model.Person;

import java.util.List;

public interface PersonService {

    List<Person> getAllUsers();

    void addUser(Person person);

}
