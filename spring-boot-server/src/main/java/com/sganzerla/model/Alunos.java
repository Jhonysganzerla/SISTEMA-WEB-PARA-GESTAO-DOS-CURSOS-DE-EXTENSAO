package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
public class Alunos {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do aluno deve ser preenchido")
    @Size(max = 50, message = "O tamanho deve no máximo {max} caracteres")
    private String nome;

    @Size(max = 20, message = "O tamanho do telefone deve no máximo {max} caracteres")
    private String telefone;

    @Size(max = 50, message = "O tamanho do email deve no máximo {max} caracteres")
    private String email;

    @NotBlank(message = "O nome do contato do aluno deve ser preenchido")
    @Size(max = 50, message = "O tamanho do nome do contato deve no máximo {max} caracteres")
    private String nomeContato;

    @NotBlank(message = "O telefone do contato do aluno deve ser preenchido")
    @Size(max = 20, message = "O tamanho  do telefone deve no máximo {max} caracteres")
    private String telefoneContato;

    @Transient
    private List<TurmaCurso> lstTurmaCursos;

}
