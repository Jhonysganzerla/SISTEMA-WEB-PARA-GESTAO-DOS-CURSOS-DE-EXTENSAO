package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Data
public class EquipeCursos {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O papel não pode ser nulo")
    @Size(max = 50, message = "O tamanho do papel deve no máximo {max} caracteres")
    private String papel;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "transporte_id", referencedColumnName = "id")
    private TipoTransporte transporte;

    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Usuario usuario;

}
