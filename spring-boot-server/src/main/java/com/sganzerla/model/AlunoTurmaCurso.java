package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class AlunoTurmaCurso {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private Long aluno;

    private String nome;

    private Long turmaCurso;

}
