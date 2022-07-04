package com.finlex.orderapp.service;

import com.finlex.orderapp.model.Person;
import com.finlex.orderapp.model.Product;
import com.finlex.orderapp.repository.PersonRepository;
import com.finlex.orderapp.repository.ProductRepository;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ProductServiceImpl implements  ProductService{

    @Autowired
    private ProductRepository productRepository;
    @Override
    public List<Product> getAllProducts() {
        List<Product> products= productRepository.findAll().stream().
                map(s -> {
                    Product u = new Product();
                    u.setProductId(s.getProductId());
                    u.setProductName(s.getProductName());
                    u.setPrice(s.getPrice());
                    return u;
                }).collect(Collectors.toList());

        return products ;
    }

    @Override
    public Integer calculateTotalPrice(List<Integer> productIds){

        Integer sum = productIds.stream()
                .map(x -> productRepository.getReferenceById(x).getPrice())
                .reduce(0, Integer::sum);

        return  sum;
    }
}
