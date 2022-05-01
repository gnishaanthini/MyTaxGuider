CREATE TABLE Users(
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    userType ENUM ('Customer', 'Employee', 'Admin') NOT NULL DEFAULT 'Customer',
    PRIMARY KEY (username, password)
);