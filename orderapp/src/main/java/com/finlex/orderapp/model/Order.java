package com.finlex.orderapp.model;

import io.swagger.models.auth.In;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Order {
    private Integer orderId;
    private List<Integer> productList;
    private Date orderedDate;
    private String email;
    private Integer totalPrice;

}
