package com.finlex.orderapp.service;

import com.finlex.orderapp.entity.OrderEntity;
import com.finlex.orderapp.entity.PersonEntity;
import com.finlex.orderapp.model.Order;
import com.finlex.orderapp.model.Person;
import com.finlex.orderapp.repository.OrderRepository;
import com.finlex.orderapp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements  OrderService{

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private ProductService productService;

    @Override
    public List<Order> getAllOrders() {
        List<Order> orders= orderRepository.findAll().stream().
                map(s -> {
                    Order u = new Order();
                    u.setOrderId(s.getOrderId());
                    u.setEmail(s.getEmailId());
                    u.setOrderedDate(s.getOrderedDate());
                    u.setProductList(s.getProductIds());
                    u.setTotalPrice(productService.calculateTotalPrice(s.getProductIds()));
                    return u;
                }).sorted(Comparator.comparing(o -> o.getOrderedDate())).collect(Collectors.toList());

        return orders ;
    }

    @Override
    public List<Order> findByEmailId(String email) {
        List<Order> orders= orderRepository.findByEmailId(email).stream().
                map(s -> {
                    Order u = new Order();
                    u.setOrderId(s.getOrderId());
                    u.setEmail(s.getEmailId());
                    u.setOrderedDate(s.getOrderedDate());
                    u.setProductList(s.getProductIds());
                    u.setTotalPrice(productService.calculateTotalPrice(s.getProductIds()));
                    return u;
                }).sorted(Comparator.comparing(o -> o.getOrderedDate())).collect(Collectors.toList());

        return orders ;
    }

    @Override
    public void addOrder(Order order) {
        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setOrderedDate(new Date());
        orderEntity.setProductIds(order.getProductList());
        orderEntity.setEmailId(order.getEmail());
        orderEntity.setCreatedBy(personRepository.findById(order.getEmail()).get().getName());
        orderRepository.save(orderEntity);
    }
}
