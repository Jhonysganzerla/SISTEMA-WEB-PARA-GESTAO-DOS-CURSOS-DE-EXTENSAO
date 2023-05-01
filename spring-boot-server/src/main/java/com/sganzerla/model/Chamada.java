package com.sganzerla.model;

import com.google.api.client.util.DateTime;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Data
public class Chamada {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private DateTime data;

    @NotNull(message = "A presenca deve ser preenchida")
    @Column(columnDefinition = "boolean default false")
    private Boolean presenca;

    @Size(max = 50, message = "O tamanho do conteudo ministrado deve no máximo {max} caracteres")
    private String conteudoministrado;


    @NotNull(message = "O aluno deve ser preenchido")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "alunoturmacurso_id", referencedColumnName = "id")
    private AlunoTurmaCurso alunoturmacurso;


}

