package com.finlex.orderapp.repository;


import com.finlex.orderapp.entity.OrderEntity;
import com.finlex.orderapp.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity,Integer> {
    List<OrderEntity> findByEmailId(String email);
}
