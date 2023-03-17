package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Data
public class Cursos {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O nome do curso deve ser preenchido")
    @Size(max = 50, message = "O tamanho deve no máximo {max} caracteres")
    private String nome;

    @NotEmpty(message = "A descricao do curso deve ser preenchido")
    @Size(max = 600, message = "O tamanho do descricao deve no máximo {max} caracteres")
    private String descricao;

    @Size(max = 50, message = "O tamanho do nivel deve no máximo {max} caracteres")
    private String nivel;

    @Size(max = 100, message = "O tamanho do conteudo do contato deve no máximo {max} caracteres")
    private String conteudo;

    @Size(max = 600, message = "O tamanho do observacao deve no máximo {max} caracteres")
    private String observacao;

    @ManyToOne
    @JoinColumn(name = "id_tipocursos", referencedColumnName = "id")
    private TipoCursos tipoCursos;

}
