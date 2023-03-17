package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class HabilidadesInstrutores {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "habilidade_id", referencedColumnName = "id")
    private Habilidades habilidade;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private Usuario usuario;

}
