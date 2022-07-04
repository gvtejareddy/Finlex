package com.finlex.orderapp.service;

import com.finlex.orderapp.entity.PersonEntity;
import com.finlex.orderapp.model.Person;
import com.finlex.orderapp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PersonServiceImpl implements  PersonService{

    @Autowired
    private PersonRepository personRepository;

    @Override
    public List<Person> getAllUsers() {
        List<Person> person= personRepository.findAll().stream().
                map(s -> {
                    Person u = new Person();
                   u.setEmail(s.getEmailId());
                   u.setName(s.getName());
                    return u;
                }).collect(Collectors.toList());

        return person ;
    }

    @Override
    public void addUser(Person person) {
        personRepository.save(new PersonEntity(person.getEmail(),person.getName()));
    }
}
