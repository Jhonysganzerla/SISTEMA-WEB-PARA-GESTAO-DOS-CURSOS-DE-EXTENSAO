package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class InstrutorCandidatoCursos {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "turmacursos_id", referencedColumnName = "id")
    private TurmaCurso turmaCurso;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private Usuario usuario;

}
