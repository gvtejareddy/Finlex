package com.finlex.orderapp.service;

import com.finlex.orderapp.model.Order;
import com.finlex.orderapp.model.Person;

import java.util.List;

public interface OrderService {

    List<Order> getAllOrders();
    List<Order> findByEmailId(String email);
    void addOrder(Order order);
}
