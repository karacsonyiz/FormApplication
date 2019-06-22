CREATE TABLE form_question(
id varchar(255) primary key,
section_id varchar(255),
question_text text,
answer_id varchar(255),
FOREIGN KEY (section_id) REFERENCES form_section(id)
);
