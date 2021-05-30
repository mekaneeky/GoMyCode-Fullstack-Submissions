CREATE TABLE Product (
    ProductID int NOT NULL PRIMARY KEY,
    product_name varchar(255),
    Price varchar(255),
    Address varchar(255),
    City varchar(255) 
);

CREATE TABLE Customer (
    CustomerID int NOT NULL PRIMARY KEY,
    customer_Name varchar(255),
    customer_Tel varchar(255)
);


CREATE TABLE Orders (
    CustomerID varchar(255) FOREIGN KEY REFERENCES Customer(CustomerID),
    ProductID varchar(255) FOREIGN KEY REFERENCES Product(ProductID),
    Quantity varchar(255),
    Total_amount int(255)
);

ALTER TABLE Product ADD Category Varchar(20);
ALTER TABLE Orders ADD OrderDate date DEFAULT SYSDATE;

