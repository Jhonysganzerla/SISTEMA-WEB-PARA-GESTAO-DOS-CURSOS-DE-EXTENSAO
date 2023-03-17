package com.sganzerla.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Data
public class Alunos {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O nome do aluno deve ser preenchido")
    @Size(max = 50, message = "O tamanho deve no máximo {max} caracteres")
    private String nome;

    @Size(max = 20, message = "O tamanho do telefone deve no máximo {max} caracteres")
    private String telefone;

    @Size(max = 50, message = "O tamanho do email deve no máximo {max} caracteres")
    private String email;

    @NotEmpty(message = "O nome do contato do aluno deve ser preenchido")
    @Size(max = 50, message = "O tamanho do nome do contato deve no máximo {max} caracteres")
    private String nomeContato;

    @NotEmpty(message = "O telefone do contato do aluno deve ser preenchido")
    @Size(max = 20, message = "O tamanho  do telefone deve no máximo {max} caracteres")
    private String telefoneContato;

}
