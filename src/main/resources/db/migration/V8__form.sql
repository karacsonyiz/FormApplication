CREATE TABLE form(
id varchar(255) primary key,
userid int,
osap_num varchar(255),
start_date DATETIME,
end_date DATETIME
foreign key(userid) references users(id)
);
