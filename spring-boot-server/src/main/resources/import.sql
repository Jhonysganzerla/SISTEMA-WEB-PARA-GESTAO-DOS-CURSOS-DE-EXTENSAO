insert into authority (authority) values ('ROLE_ADMIN');
insert into authority (authority) values ('ROLE_PROFESSOR');
insert into authority (authority) values ('ROLE_INSTRUTOR');

-- login 123  - senha 123
INSERT INTO public.usuario (email, password, ra, telefone, tipo, nome) VALUES ('123', '$2a$10$wf/Igb7wnJUlKtiyrFwn2.MgWBmYisrdW2.PqLmYcpowBqeootlxW', '123', '123456789', 'administrador', 'Jhony Sganzerla');
INSERT INTO public.usuario (email, password, ra, telefone, tipo, nome) VALUES ('admin', '$2a$10$wf/Igb7wnJUlKtiyrFwn2.MgWBmYisrdW2.PqLmYcpowBqeootlxW', 'admin', '123456789', 'professor', 'Admin');

INSERT INTO public.users_authorities (usuario_id, authority_id) VALUES (1, 1);
INSERT INTO public.users_authorities (usuario_id, authority_id) VALUES (2, 1);

INSERT INTO public.cursos_graduacao (id, descricao, nome) VALUES (default, null, 'Sistemas');
