CREATE TABLE form(
id varchar(255) primary key,
name varchar(255),
osap_num varchar(255),
start_date datetime,
end_date datetime
);

insert into form(id,name,osap_num,start_date,end_date)
    values("0765ec13-bdd4-4ff1-8b41-0e416c8f72e7","Európai Lakossági Egészségfelmérés","OSAP2201","2019-09-16","2019-12-16"),
    ("2f98eaad-b491-40c8-ae18-a25ad0d7c263","Mezőgazdasági felmérés","OSAP4402","2020-03-17","2020-8-11"),
    ("aa566089-e44e-40dd-971e-da0ffc71c0ac","Népszámlálás","OSAP3902","2021-01-13","2021-6-29");