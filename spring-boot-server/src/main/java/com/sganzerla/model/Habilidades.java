package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Data
public class Habilidades {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O nome da habilidade não pode ser nulo")
    @Size(max = 50, message = "O tamanho deve no máximo {max} caracteres")
    private String nome;

    @Size(max = 600, message = "O tamanho deve no máximo {max} caracteres")
    private String descricao;

}
