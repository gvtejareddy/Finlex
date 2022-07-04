package com.finlex.orderapp.service;

import com.finlex.orderapp.model.Person;
import com.finlex.orderapp.model.Product;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts();
    Integer calculateTotalPrice(List<Integer> productIds);
}
