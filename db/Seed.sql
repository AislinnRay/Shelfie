CREATE TABLE products (product_id SERIAL PRIMARY KEY, name VARCHAR(250), price DECIMAL, image VARCHAR(250));

INSERT INTO products (name, price, image)
VALUES ('Book', 19.99, 'https://images-na.ssl-images-amazon.com/images/I/31o6m4snULL._SX346_BO1,204,203,200_.jpg');