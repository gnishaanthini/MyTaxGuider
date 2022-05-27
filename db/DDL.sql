CREATE TABLE Users (
	id int AUTO_INCREMENT PRIMARY KEY,
    username varchar(20) NOT null,
    password varchar(100) NOT null,
    userType enum('Customer', 'Employee', 'Admin') NOT null DEFAULT 'Customer'
);