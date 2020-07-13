create database jtjavatechie;

use jtjavatechie;

create table users (username varchar(50) primary key,
password varchar(1000), enabled boolean not null);

create table authorities (username varchar(50) not null,
authority varchar(50) not null,
foreign key(username) references users(username));

insert into users(username, password, enabled)
values('admin', '1256*', true);

insert into users(username, password, enabled)
values('user', 'S3xAr7IjiMgtFSGxVUQoOucs9g6ZSzns0JtSwC9lwnplrzEpu', true);

insert into authorities(username, authority)values('admin', 'ROLE_ADMIN');
insert into authorities(username, authority)values('user', 'ROLE_USER');

select * from users;
select * from authorities;