insert into customers(id, name, email, age, password, phone_number)
values (1, 'Max', 'max@gmail.com', 19, '1234', '+380991111111'),
       (2, 'Den', 'den@gmail.com', 18, '5678', '+380992222222'),
       (3, 'Tom', 'tom@gmail.com', 20, '91011', '+38099333333');

insert into accounts (id, number, currency, balance, customer_id)
values (1, '4441', 'USD', 10000.00, 1),
       (2, '1144', 'UAH', 5813.72, 1),
       (3, '3021', 'EUR', 9341.22, 2),
       (4, '6554', 'EUR', 391.5, 3);

insert into employers (id, name, address)
values (1, 'Work 1', 'Kyiv'),
       (2, 'Work 2', 'Dnipro'),
       (3, 'Work 3', 'Kharkiv'),
       (4, 'Work 4', 'Lviv');

insert into customers_employers (customer_id, employer_id)
values (1, 1),
       (3, 4),
       (1, 2);