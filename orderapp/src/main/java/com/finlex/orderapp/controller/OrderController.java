package com.finlex.orderapp.controller;

import com.finlex.orderapp.model.Order;
import com.finlex.orderapp.model.Person;
import com.finlex.orderapp.model.Response;
import com.finlex.orderapp.repository.OrderRepository;
import com.finlex.orderapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins ={"http://127.0.0.1:4200","http://localhost:4200"})
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/all")
    public ResponseEntity<List<Order>> getAllOrders(){
        try {
            return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/find/{emailid}")
    public ResponseEntity<List<Order>> getAllOrders(@PathVariable("emailid") String emailId){
        try {
            return new ResponseEntity<>(orderService.findByEmailId(emailId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @PostMapping("/save")
    public ResponseEntity<Response> addOrder(@RequestBody Order order) {
        String message = "";
        try {
            orderService.addOrder(order);
            message = "Order successfully added: ";
            return ResponseEntity.status(HttpStatus.OK).body(new Response(message));
        } catch (Exception e) {
            message = "Order Save Failed" ;
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new Response(message));
        }

    }

}
