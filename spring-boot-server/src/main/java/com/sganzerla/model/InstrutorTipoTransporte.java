package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class InstrutorTipoTransporte {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private Usuario instrutor;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "transporte_id", referencedColumnName = "id")
    private TipoTransporte transporte;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "turmacursos_id", referencedColumnName = "id")
    private TurmaCurso turmaCurso;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "equipecursos_id", referencedColumnName = "id")
    private EquipeCursos equipeCursos;

//    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
//    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    private Usuario usuario;

}
