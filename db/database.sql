create database if not exists companydb;

use companydb;

create table employee(
    id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int(5) default null,
    primary key (id)
);

insert into employee values
(1,'joe',100),
(2,'luggi',100),
(3,'jose',100),
(4,'jhon',100),
(5,'alexis',100);

