package com.sganzerla.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Data
public class TipoCursos {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O nome da habilidade não pode ser nulo")
    @Size(max = 50, message = "O tamanho do nome deve no máximo {max} caracteres")
    private String nome;

    @Size(max = 600, message = "O tamanho da descricao no máximo {max} caracteres")
    private String descricao;

}
