CREATE TABLE form_answer (
id varchar(255) primary key,
question_id varchar(255),
answer_text text,
FOREIGN KEY (question_id) REFERENCES form_question(id)
);
