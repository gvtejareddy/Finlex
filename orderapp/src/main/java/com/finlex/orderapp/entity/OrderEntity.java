package com.finlex.orderapp.entity;


import com.finlex.orderapp.model.Person;
import com.finlex.orderapp.model.Product;
import io.swagger.models.auth.In;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="orders")
@Data
public class OrderEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer orderId;
    private Date orderedDate;
    private String createdBy;
    private String emailId;
    @ElementCollection
    private List<Integer> productIds;

}
