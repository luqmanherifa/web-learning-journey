CREATE TABLE tbl_employee (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    employee_manager_id INT NULL,
    CONSTRAINT fk_manager
        FOREIGN KEY (employee_manager_id)
        REFERENCES tbl_employee(employee_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);