CREATE TABLE form_answer (
id varchar(255) primary key,
form_id varchar(255),
userid int,
answertext MEDIUMTEXT,
usertext varchar(255),
foreign key(form_id) references form(id),
foreign key(userid) references users(id)
);