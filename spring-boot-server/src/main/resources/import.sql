insert into authority (authority) values ('ROLE_ADMIN');
insert into authority (authority) values ('ROLE_USER');

-- login 123  - senha 123
INSERT INTO public.usuario (email, password, ra, telefone, tipo, nome) VALUES ('123', '$2a$10$wf/Igb7wnJUlKtiyrFwn2.MgWBmYisrdW2.PqLmYcpowBqeootlxW', '123', '123456789', 'Admin', 'Jhony Sganzerla');

INSERT INTO public.users_authorities (usuario_id, authority_id) VALUES (1, 1);
