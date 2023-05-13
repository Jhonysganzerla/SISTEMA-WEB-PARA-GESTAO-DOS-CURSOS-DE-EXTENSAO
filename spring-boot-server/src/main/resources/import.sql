insert into authority (authority) values ('ROLE_ADMIN');
insert into authority (authority) values ('ROLE_PROFESSOR');
insert into authority (authority) values ('ROLE_INSTRUTOR');

-- login 123  - senha 123
INSERT INTO public.usuario (email, password, ra, telefone, tipo, nome) VALUES ('admin@admin.com', '$2a$10$wf/Igb7wnJUlKtiyrFwn2.MgWBmYisrdW2.PqLmYcpowBqeootlxW', '123', '123456789', 'administrador', 'Jhony Sganzerla');
INSERT INTO public.usuario (email, password, ra, telefone, tipo, nome) VALUES ('professor@professor.com', '$2a$10$wf/Igb7wnJUlKtiyrFwn2.MgWBmYisrdW2.PqLmYcpowBqeootlxW', 'professor', '123456789', 'professor', 'Professor');
INSERT INTO public.usuario (email, password, ra, telefone, tipo, nome) VALUES ('instrutor@instrutor.com', '$2a$10$wf/Igb7wnJUlKtiyrFwn2.MgWBmYisrdW2.PqLmYcpowBqeootlxW', 'instrutor', '123456789', 'instrutor', 'Instrutor');

INSERT INTO public.users_authorities (usuario_id, authority_id) VALUES (1, 1);
INSERT INTO public.users_authorities (usuario_id, authority_id) VALUES (2, 2);
INSERT INTO public.users_authorities (usuario_id, authority_id) VALUES (3, 3);


INSERT INTO public.cursos_graduacao (id, descricao, nome) VALUES (default, null, 'Sistemas');

INSERT INTO public.tipo_cursos (id, descricao, nome) VALUES (default, 'Curso de Java', 'Curso de Java');

INSERT INTO public.tipo_transporte (id, descricao, nome) VALUES (default, 'Bus', 'Azul');

INSERT INTO public.equipe_cursos (id, papel, transporte_id) VALUES (default, 'Dar aula de Java', null);

INSERT INTO public.equipecursos_usuarios (equipecursos_id, usuario_id) VALUES (1, 1);

INSERT INTO public.cursos (id, conteudo, descricao, nivel, nome, observacao, id_tipocursos) VALUES (default, 'Java', 'Curso de jva', 'Avançado', 'Java', 'Curso top', 1);

INSERT INTO public.turma_curso (id, carga_horaria, data_fim, data_inicio, dia_semana, duracao, hora_inicio, local, nome, requisitos, sala, cursos_id, equipecursos_id) VALUES (default, null, null, null, null, null, null, null, 'Turma de Java Sábado manhã', null, null, 1, 1);
INSERT INTO public.turma_curso (id, carga_horaria, data_fim, data_inicio, dia_semana, duracao, hora_inicio, local, nome, requisitos, sala, cursos_id, equipecursos_id) VALUES (default, null, null, null, null, null, null, null, 'Turma de C#', null, null, 1, 1);


INSERT INTO public.alunos (id, email, nome, nome_contato, telefone, telefone_contato) VALUES (default, '', 'Jhony Sganzerla', 'Jhony Sganzerla', '', '(54) 99619-4742');
INSERT INTO public.alunos (id, email, nome, nome_contato, telefone, telefone_contato) VALUES (default, 'Jhonysganzerla@hotmail.com', 'Jhony Sganzerla3', 'Jhony Sganzerla', '', '(54) 99619-4743');
INSERT INTO public.alunos (id, email, nome, nome_contato, telefone, telefone_contato) VALUES (default, '', 'Jhony Sganzerla4', 'Jhony Sganzerla', '', '(54) 99619-4744');
INSERT INTO public.alunos (id, email, nome, nome_contato, telefone, telefone_contato) VALUES (default, 'Jhonysganzerla@hotmail.com', 'Jhony Sganzerla5', 'Jhony Sganzerla', '', '(54) 99619-4745');

INSERT INTO public.aluno_turma_curso (id, aluno, nome, turma_curso) VALUES (default, 1, 'Jhony Sganzerla', 1);
INSERT INTO public.aluno_turma_curso (id, aluno, nome, turma_curso) VALUES (default, 2, 'Jhony Sganzerla3', 1);
INSERT INTO public.aluno_turma_curso (id, aluno, nome, turma_curso) VALUES (default, 3, 'Jhony Sganzerla4', 1);
INSERT INTO public.aluno_turma_curso (id, aluno, nome, turma_curso) VALUES (default, 4, 'Jhony Sganzerla5', 1);
