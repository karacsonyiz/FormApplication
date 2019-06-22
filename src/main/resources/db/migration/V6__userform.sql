CREATE TABLE userform(
id int primary key,
user_id int,
form_id varchar(255),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (form_id) REFERENCES form(id)
);

insert into userform(id,user_id,form_id)
    values(1,3,"0765ec13-bdd4-4ff1-8b41-0e416c8f72e7"),
    (2,3,"2f98eaad-b491-40c8-ae18-a25ad0d7c263"),
    (3,4,"aa566089-e44e-40dd-971e-da0ffc71c0ac");