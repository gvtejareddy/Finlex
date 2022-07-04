
INSERT INTO PERSON (EMAIL_ID,NAME) VALUES('john.king@gmail.com', 'John King'),('james.bond@gmail.com', 'James Bond'),('ex@test.com','De Haan'),('jneena@test.com', 'Jay Neena'),('Renske@gmail.com', 'Renske'),('teja@test.com','Teja Reddy')

INSERT INTO PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRICE) VALUES(1,'Laptop','1000'),(2,'Monitor','400'),(3,'Keyboard','10'),(4,'Mouse','10'),(5,'WebCam','100')

INSERT INTO ORDERS (ORDER_ID,CREATED_BY,EMAIL_ID,ORDERED_DATE) VALUES(1,'John King','john.king@gmail.com','2022-07-03 21:50:16.805'),(2,'John King','john.king@gmail.com','2022-07-04 21:50:16.805'),(3,'De Haan','ex@test.com','2022-07-05 22:50:16.805'),(4,'Teja Reddy','teja@test.com','2022-07-05 23:50:16.805'),(5,'Renske','Renske@gmail.com','2022-07-05 23:52:16.805')

INSERT INTO ORDER_ENTITY_PRODUCT_IDS (ORDER_ENTITY_ORDER_ID,PRODUCT_IDS) VALUES(1,2),(1,3),(2,1),(2,3),(2,4),(3,3),(3,4),(4,1),(5,2),(5,4)
