package com.finlex.orderapp.controller;

import com.finlex.orderapp.model.Order;
import com.finlex.orderapp.model.Person;
import com.finlex.orderapp.model.Response;
import com.finlex.orderapp.repository.PersonRepository;
import com.finlex.orderapp.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin(origins ={"http://127.0.0.1:4200","http://localhost:4200"})
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping("/all")
    public ResponseEntity<List<Person>> getAll() {
        try {
            return new ResponseEntity<>(personService.getAllUsers(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Response> addPerson(@RequestBody Person person) {
        String message = "";
        try {
            personService.addUser(person);
            message = "User successfully added: ";
            return ResponseEntity.status(HttpStatus.OK).body(new Response(message));
        } catch (Exception e) {
            message = "User Save Failed" ;
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new Response(message));
        }

    }
}
