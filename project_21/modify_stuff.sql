INSERT INTO Products
VALUES
  ('Samsung Galaxy S20', 'Smartphone', 3299), 
  ('ASUS Notebook', 'PC', 4599)


INSERT INTO Customers
VALUES
  ('ALI', '123123123'), 
  ('ASMA', '321321321')



INSERT INTO Orders
VALUES
  (  SELECT CustomerID FROM Customers WHERE customer_name LIKE '%ALI%', 

      SELECT ProductID FROM Products WHERE product_name LIKE '%ASUS%',
      NULL,
      2,
      9198
 ),
  (  SELECT CustomerID FROM Customers WHERE customer_name LIKE '%ASMA%', 
      SELECT ProductID FROM Products WHERE product_name LIKE '%SAMSUNG%',
      ,
      1,
      3299
 )
