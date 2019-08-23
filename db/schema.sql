create database Burger_Town;
use Burger_Town;

create table burgers (
    id integer(4) not null auto_increment,
    burger_name VARCHAR(50),
    devoured boolean default false,
    primary key (id)
);