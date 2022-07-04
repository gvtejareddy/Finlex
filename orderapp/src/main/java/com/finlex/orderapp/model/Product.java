package com.finlex.orderapp.model;

import lombok.Data;

@Data
public class Product {
    private Integer productId;
    private String productName;
    private Integer price;
}
