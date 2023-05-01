package com.sganzerla.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Date;

@Entity
@Data
public class TurmaCurso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O nome da turma deve ser preenchido")
    private String nome;

    private Date dataInicio;
    private Date dataFim;
    private String horaInicio;
    private String cargaHoraria;
    private String duracao;
    private String diaSemana;
    @Size(max = 50, message = "O tamanho do local deve no máximo {max} caracteres")
    private String local;
    @Size(max = 50, message = "O tamanho da sala deve no máximo {max} caracteres")
    private String sala;
    @Size(max = 100, message = "O tamanho do local deve no máximo {max} caracteres")
    private String requisitos;

    @NotNull(message = "A equipe deve ser preenchida")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "equipecursos_id", referencedColumnName = "id")
    private EquipeCursos equipeCursos;

    @NotNull(message = "O curso deve ser preenchido")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cursos_id", referencedColumnName = "id")
    private Cursos cursos;

}

