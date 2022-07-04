package com.finlex.orderapp.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
@Data
public class ProductEntity {

    @Id
    private Integer productId;
    private String productName;
    private Integer price;
}
