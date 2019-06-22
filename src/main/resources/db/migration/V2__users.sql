CREATE TABLE users(
     id int auto_increment primary key,
     name varchar(255),
     password varchar(255),
     enabled int,
     role varchar(255));

INSERT INTO users(name, password, enabled, role)
     values ('admin', '$2a$10$FV9w7BuvK2gmnVPaUqQ88.d9V2C73VyTvc24DrqHZJXTGnQV5xtl.', 1, 'ROLE_ADMIN'),
            ('user', '$2a$10$v8PdVYFQ/Btnd1RpicvfR.sA/v0TvNoJogNsULJqRvAWXoCCM50xu', 1, 'ROLE_USER'),
            ('osszeiro1', '$2a$10$FNb5zXHlqCfAFyVp1yBF/.4A3rq.pIMhqb2FO2nuEF5fY.I4f4uBC', 1, 'ROLE_USER'),
            ('osszeiro2', '$2a$10$ZBfbTG1YQQbdWg9/iYSa7eTaDPTb.ZJHmqqLVmzOaLq5ZUsrdr56e', 1, 'ROLE_USER');
