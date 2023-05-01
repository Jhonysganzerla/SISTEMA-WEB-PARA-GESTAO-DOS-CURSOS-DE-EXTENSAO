package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.List;

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

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "equipecursos_usuarios",
            joinColumns = @JoinColumn(name = "equipecursos_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "usuario_id", referencedColumnName = "id"))
    private List<Usuario> usuarios;
}
